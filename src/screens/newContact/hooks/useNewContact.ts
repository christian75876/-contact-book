import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {RootStackParamList} from '../../../navigation/interfaceRootStackParamList';
import {useNavigation} from '@react-navigation/native';
import {Contact, setContactCacheData} from '../../../services/Crud';
import {Alert} from 'react-native';

export const useNewContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  type navigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationProp>();

  const handleCreateContact = async () => {
    if (!name) {
      return Alert.alert('Invalid name');
    }
    const newContact: Contact = {
      id: 0,
      name,
      email,
      phone,
      imageUri,
    };

    await setContactCacheData('contacts', newContact);

    setName('');
    setEmail('');
    setPhone('');
    setImageUri(null);

    navigation.navigate('Home');
  };
  return {
    imageUri,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    handleCreateContact,
    setImageUri,
  };
};
