import type Contact from '../interfaces/contact.interface';
import { setCachedData } from '../services/Crud';

export const contactData: Contact[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+34 612 345 678',
    imageUri: '',
    location: [-75.56886131788171, 6.2499793616330805],
  },
  {
    id: 2,
    name: 'Ana Gómez',
    email: 'ana.gomez@email.com',
    phone: '+34 623 456 789',
    imageUri: '',
    location: [-75.56886131788171, 6.2499793616330805],
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    email: 'carlos.ruiz@email.com',
    phone: '+34 634 567 890',
    imageUri: '',
    location: [-75.56886131788171, 6.2499793616330805],
  },
  {
    id: 4,
    name: 'Laura Martínez',
    email: 'laura.martinez@email.com',
    phone: '+34 645 678 901',
    imageUri: '',
    location: [-75.56886131788171, 6.2499793616330805],
  },
  {
    id: 5,
    name: 'Pedro Sánchez',
    email: 'pedro.sanchez@email.com',
    phone: '+34 656 789 012',
    imageUri: '',
    location: [-75.56886131788171, 6.2499793616330805],
  },
];

export const initializeContacts = async () => {
  try {
    await setCachedData('contacts', contactData);
    console.log('Contacts stored successfully.');
  } catch (error) {
    console.error('Error storing contacts:', error);
  }
};
