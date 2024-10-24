import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/main-stack';
import {Contact, getCacheDataById, updateCachedData} from '../../services/Crud';
import {SafeAreaView} from 'react-native-safe-area-context';

type UpdateContactRouteProps = RouteProp<RootStackParamList, 'UpdateContact'>;

export interface IupdateContactRoute {
  route: UpdateContactRouteProps;
}

export default function UpdateContact({route}: IupdateContactRoute) {
  const {contactId} = route.params as {contactId: number};
  const [contact, setContact] = useState<Contact | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  console.log('name: ', name);
  useEffect(() => {
    const fetchContact = async () => {
      const fetchedContact = await getCacheDataById(contactId, 'contacts');
      setContact(fetchedContact);

      if (fetchedContact) {
        setName(fetchedContact.name);
        setEmail(fetchedContact.email);
        setPhone(fetchedContact.phone);
      }
    };

    fetchContact();
  }, []);
  console.log('name: ', name);
  if (!contact) {
    return (
      <SafeAreaView>
        <Text>No contact found</Text>
      </SafeAreaView>
    );
  }

  const handleSave = async () => {
    console.log('Contact updated:', {contactId, name, email, phone});
    const updatedContact: Contact = {
      id: contactId,
      name,
      email,
      phone,
    };

    await updateCachedData(contactId, 'contacts', updatedContact);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Contact {contactId}</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        defaultValue={contact.name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={contact.email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        defaultValue={contact.phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
}
