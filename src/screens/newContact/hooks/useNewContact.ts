import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {RootStackParamList} from '../../../navigation/interfaceRootStackParamList';
import {useNavigation} from '@react-navigation/native';
import {Contact, setContactCacheData} from '../../../services/Crud';

export const useNewContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  type navigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationProp>();

  const handleCreateContact = async () => {
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
