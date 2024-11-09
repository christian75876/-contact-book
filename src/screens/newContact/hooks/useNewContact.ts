import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {RootStackParamList} from '../../../interfaces/interfaceRootStackParamList';
import {useNavigation} from '@react-navigation/native';
import {setContactCacheData} from '../../../services/Crud';
import {Alert} from 'react-native';
import Contact from '../../../interfaces/contact.interface';

export const useNewContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [location, setLocation] = useState<number[] | null>(null);

  type navigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationProp>();

  const updateLocation = (newLocation: number[]) => {
    setLocation(newLocation);
  };

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
      location,
    };

    await setContactCacheData('contacts', newContact);

    setName('');
    setEmail('');
    setPhone('');
    setImageUri(null);

    navigation.navigate('Home');
  };
  return {
    location,
    imageUri,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    handleCreateContact,
    setImageUri,
    updateLocation,
  };
};
