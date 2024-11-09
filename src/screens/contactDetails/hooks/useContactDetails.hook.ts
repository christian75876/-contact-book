import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../interfaces/interfaceRootStackParamList';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { IcontactDetailsRoute } from '../ContactDetails';
import { getCacheDataById } from '../../../services/Crud';
import { useColorScheme } from 'react-native';
import type Contact from '../../../interfaces/contact.interface';

export const useContactDetail = ({ route }: IcontactDetailsRoute) => {
  type navigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'UpdateContact'
  >;
  const navigation = useNavigation<navigationProp>();

  const { contactId } = route.params as { contactId: string };
  const [contact, setContact] = useState<Contact | null>(null);

  useFocusEffect(
    useCallback(() => {
      const fetchContact = async (contactIds: string) => {
        const fetchedContact = await getCacheDataById(
          parseInt(contactIds),
          'contacts',
        );
        setContact(fetchedContact);
      };

      fetchContact(contactId);
      return () => fetchContact(contactId);
    }, [contactId]),
  );

  const isDarkMode = useColorScheme() === 'dark';

  return {
    navigation,
    contact,
    isDarkMode,
  };
};
