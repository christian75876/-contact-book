import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {RootStackParamList} from '../../../../navigation/main-stack';
import {useNavigation} from '@react-navigation/native';
import {Contact, setContactCacheData} from '../../../services/Crud';

export const useNewContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const openCamera = () => {
    launchCamera({mediaType: 'photo', cameraType: 'back'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };

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
    openCamera,
    openGallery,
  };
};
