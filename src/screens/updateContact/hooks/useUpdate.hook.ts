import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../interfaces/interfaceRootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getCacheDataById, updateCachedData } from '../../../services/Crud';
import { IupdateContactRoute } from '../UpdateContact';
import type Contact from '../../../interfaces/contact.interface';

export default function useUpdate({ route }: IupdateContactRoute) {
  type navigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ContactDetails'
  >;
  const navigation = useNavigation<navigationProp>();

  const { contactId } = route.params as { contactId: number };
  const [contact, setContact] = useState<Contact | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [location, setLocation] = useState<number[] | null>(null);

  const updateLocation = (newLocation: number[]) => {
    setLocation(newLocation);
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
        setLocation(fetchedContact.location);
      }
      console.log(fetchContact);
    };

    fetchContact();
  }, [contactId]);

  const handleSave = async () => {
    console.log('Contact updated:', { contactId, name, email, phone });
    const updatedContact: Contact = {
      id: contactId,
      name,
      email,
      phone,
      imageUri,
      location,
    };

    await updateCachedData(contactId, 'contacts', updatedContact);

    navigation.navigate('ContacDetails', { contactId });
  };

  return {
    handleSave,
    contact,
    imageUri,
    setName,
    setEmail,
    setPhone,
    setImageUri,
    updateLocation,
    location,
  };
}
