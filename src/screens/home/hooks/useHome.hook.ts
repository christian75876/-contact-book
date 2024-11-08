import {useEffect, useState} from 'react';
import {getCachedData} from '../../../services/Crud';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/interfaceRootStackParamList';
import {checkPermission} from '../../../utilities/check-permision';
import {PermissionEnum} from '../../../interfaces/permissions.interface';

export function useHome() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const retrieveData = async () => {
    try {
      const permissionResponse = await checkPermission(
        PermissionEnum.ACCESS_MEDIA_LOCATION,
      );
      if (!permissionResponse) {
        console.log('cannot check permissions');
      } else {
        const data = await getCachedData('contacts');
        setContacts(data!);
      }
    } catch (error) {
      console.log('error al obtener datos de cache' + error);
    }
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

  return {
    navigation,
    filteredContacts,
    searchText,
    setSearchText,
  };
}
