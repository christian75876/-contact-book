import {setCachedData, type Contact} from '../services/Crud';

export const contactData: Contact[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+34 612 345 678',
    imageUri: '',
  },
  {
    id: 2,
    name: 'Ana Gómez',
    email: 'ana.gomez@email.com',
    phone: '+34 623 456 789',
    imageUri: '',
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    email: 'carlos.ruiz@email.com',
    phone: '+34 634 567 890',
    imageUri: '',
  },
  {
    id: 4,
    name: 'Laura Martínez',
    email: 'laura.martinez@email.com',
    phone: '+34 645 678 901',
    imageUri: '',
  },
  {
    id: 5,
    name: 'Pedro Sánchez',
    email: 'pedro.sanchez@email.com',
    phone: '+34 656 789 012',
    imageUri: '',
  },
];

export const initializeContacts = async () => {
  try {
    await setCachedData('contacts', contactData);
    console.log('Contactos almacenados exitosamente.');
  } catch (error) {
    console.error('Error al almacenar contactos:', error);
  }
};

// Uncomment this line to initialize the contacts data when the app starts.
// initializeContacts();
