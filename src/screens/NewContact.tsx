import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Contact, setContactCacheData} from '../services/Crud';

export default function NewContact(): React.JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateContact = async () => {
    const newContact: Contact = {
      id: 0,
      name,
      email,
      phone,
    };

    await setContactCacheData('contacts', newContact);

    setName('');
    setEmail('');
    setPhone('');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    form: {
      marginTop: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Button title="Create Contact" onPress={handleCreateContact} />
      </View>
    </SafeAreaView>
  );
}
