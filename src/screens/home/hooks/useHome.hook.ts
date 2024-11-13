import { useEffect, useState } from 'react';
import { getCachedData } from '../../../services/Crud';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../interfaces/interfaceRootStackParamList';
import type Contact from '../../../interfaces/contact.interface';

export function useHome() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchText, setSearchText] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const retrieveData = async () => {
    const data = await getCachedData('contacts');
    setContacts(data!);
  };

  let focused = useIsFocused();

  useEffect(() => {
    retrieveData();
  }, [focused]);

  type navigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ContacDetails',
    'NewContact'
  >;

  const navigation = useNavigation<navigationProp>();

  const groupContactsByLetter = (contactsGeneral: Contact[]) => {
    return contactsGeneral.reduce((acc, contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(contact);
      return acc;
    }, {} as { [key: string]: Contact[] });
  };

  const groupedContacts = groupContactsByLetter(filteredContacts);

  return {
    navigation,
    searchText,
    setSearchText,
    groupedContacts,
  };
}
