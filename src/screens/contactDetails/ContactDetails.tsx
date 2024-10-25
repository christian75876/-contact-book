import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DeleteButton from './DeleteButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/main-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {
  Contact,
  getCacheDataById,
  removeContactById,
} from '../../services/Crud';
import ContactImage from '../../components/ContactImage';

type ContactDetailsRouteProps = RouteProp<RootStackParamList, 'ContacDetails'>;

export interface IcontactDetailsRoute {
  route: ContactDetailsRouteProps;
}

export default function ContactDetails({route}: IcontactDetailsRoute) {
  type navigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'UpdateContact'
  >;
  const navigation = useNavigation<navigationProp>();

  const {contactId} = route.params as {contactId: string};
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      const fetchedContact = await getCacheDataById(
        parseInt(contactId),
        'contacts',
      );
      setContact(fetchedContact);
    };

    fetchContact();
  }, [contactId]);

  const isDarkMode = useColorScheme() === 'dark';

  if (!contact) {
    return (
      <SafeAreaView>
        <Text>No contact found</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    contactHeader: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
    },
    contact: {
      backgroundColor: isDarkMode ? '#333' : '#fff',
      padding: 8,
      borderBottomWidth: 1,
      borderColor: isDarkMode ? '#555' : '#ddd',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    contactName: {
      fontSize: 30,
      fontWeight: 'bold',
      color: isDarkMode ? Colors.white : Colors.black,
    },
    contactDetails: {
      color: isDarkMode ? 'lightgray' : 'gray',
      borderWidth: 1,
      padding: 4,
      borderRadius: 15,
      margin: 5,
      height: 60,
    },
    body: {
      padding: 8,
    },
    information: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    btnUpdate: {
      width: 80,
      backgroundColor: isDarkMode ? 'lightgray' : 'gray',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginEnd: 10,
    },
    containerBtn: {
      alignItems: 'flex-end',
    },
  });

  const deleteContact = async () => {
    await removeContactById('contacts', parseInt(contactId));
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.containerBtn}>
        <TouchableHighlight style={styles.btnUpdate}>
          <Text
            onPress={() => {
              navigation.navigate('UpdateContact', {
                contactId: parseInt(contactId),
              });
            }}
            style={{color: isDarkMode ? 'black' : '#fff', fontSize: 20}}>
            Editar
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.contactHeader}>
        <ContactImage imageUri={contact.imageUri} />
        <Text style={styles.contactName}>{contact.name}</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <View style={styles.contactDetails}>
            <Text>Phone:</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.information}>{contact.phone}</Text>
            </View>
          </View>
          <View style={styles.contactDetails}>
            <Text>Phone:</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.information}>{contact.email}</Text>
            </View>
          </View>
        </View>
        <DeleteButton contactId={contact.id} onpress={deleteContact} />
      </ScrollView>
    </SafeAreaView>
  );
}
