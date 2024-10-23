import React, {useState} from 'react';
import {getCachedData} from '../../../services/Crud';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/main-stack';

export function useHome() {
  const [contacts, setContacts] = useState<any[]>([]);

  const retrieveData = async () => {
    try {
      const data = await getCachedData('contacts');
      if (data) {
        setContacts(data);
      }
    } catch (error) {
      console.log('error al obtener datos de cache' + error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      retrieveData();
      console.log('Contact list updated');
    }, []),
  );

  type navigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ContacDetails',
    'NewContact'
  >;

  const navigation = useNavigation<navigationProp>();

  return {
    navigation,
    contacts,
  };
}
