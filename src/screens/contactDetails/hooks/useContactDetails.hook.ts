import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/interfaceRootStackParamList';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {IcontactDetailsRoute} from '../ContactDetails';
import {Contact, getCacheDataById} from '../../../services/Crud';
import {useColorScheme} from 'react-native';

export const useContactDetail = ({route}: IcontactDetailsRoute) => {
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

  return {
    navigation,
    contact,
    isDarkMode,
  };
};
