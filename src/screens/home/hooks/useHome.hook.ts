import {useEffect, useState} from 'react';
import {getCachedData, removeContactById} from '../../../services/Crud';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/main-stack';

export function useHome() {
  const [contacts, setContacts] = useState<any[]>([]);

  const retrieveData = async () => {
    try {
      const data = await getCachedData('contacts');
      setContacts(data!);
    } catch (error) {
      console.log('error al obtener datos de cache' + error);
    }
  };

  const deleteContac = async (id: number) => {
    const newContac = removeContactById('contacts', id);
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
    contacts,
    retrieveData,
    deleteContac,
  };
}
