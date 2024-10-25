import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/main-stack';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Contact,
  getCacheDataById,
  updateCachedData,
} from '../../../services/Crud';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {IupdateContactRoute} from '../UpdateContact';

export default function useUpdate({route}: IupdateContactRoute) {
  type navigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ContactDetails'
  >;
  const navigation = useNavigation<navigationProp>();

  const {contactId} = route.params as {contactId: number};
  const [contact, setContact] = useState<Contact | null>(null);

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

  useEffect(() => {
    const fetchContact = async () => {
      const fetchedContact = await getCacheDataById(contactId, 'contacts');
      setContact(fetchedContact);

      if (fetchedContact) {
        setName(fetchedContact.name);
        setEmail(fetchedContact.email);
        setPhone(fetchedContact.phone);
        setImageUri(fetchedContact.imageUri);
      }
      console.log(fetchContact);
    };

    fetchContact();
  }, [contactId]);

  const handleSave = async () => {
    console.log('Contact updated:', {contactId, name, email, phone});
    const updatedContact: Contact = {
      id: contactId,
      name,
      email,
      phone,
      imageUri,
    };

    await updateCachedData(contactId, 'contacts', updatedContact);

    navigation.navigate('ContacDetails', {contactId});
  };

  return {
    handleSave,
    openGallery,
    openCamera,
    contact,
    imageUri,
    setName,
    setEmail,
    setPhone,
  };
}
