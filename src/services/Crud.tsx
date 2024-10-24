import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const cache = new Map<string, Contact[] | null>();

export const getCachedData = async (key: string): Promise<Contact[] | null> => {
  if (cache.has(key)) {
    const cachedValue = cache.get(key);
    return cachedValue !== undefined ? cachedValue : null;
  } else {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data) {
        const parsedData: Contact[] = JSON.parse(data);
        cache.set(key, parsedData);
        return parsedData;
      }
      return null;
    } catch (error) {
      console.error(`Error getting cached data for key "${key}":`, error);
      return null;
    }
  }
};

export const getCacheDataById = async (
  id: number,
  key: string,
): Promise<Contact | null> => {
  try {
    const contacts = await getCachedData(key);
    if (contacts) {
      const contact = contacts.find(c => c.id === id);
      if (contact) {
        return contact;
      }
    }
    return null;
  } catch (error) {
    console.error(`Error getting cached data for key "${key}":`, error);
    return null;
  }
};

export const updateCachedData = async (
  id: number,
  key: string,
  updatedContact: Contact,
): Promise<void | null> => {
  try {
    const contacts = await getCachedData(key);
    if (!contacts) {
      console.log('Could not find contacts');
      return null;
    }
    const contact = await getCacheDataById(id, key);
    if (!contact) {
      console.log('Could not find contact');
      return null;
    }

    const updatedContacts = contacts.map(c =>
      c.id === id ? updatedContact : c,
    );
    await setCachedData(key, updatedContacts);
  } catch (error) {
    console.error(`Error updating cached data for key "${key}":`, error);
    return null;
  }
};

export const setCachedData = async (
  key: string,
  data: Contact[],
): Promise<void> => {
  try {
    const stringifiedData = JSON.stringify(data);
    await AsyncStorage.setItem(key, stringifiedData);
    cache.set(key, data);
  } catch (error) {
    console.error(`Error setting cached data for key "${key}":`, error);
  }
};

export const setContactCacheData = async (
  key: string,
  contact: Contact,
): Promise<void> => {
  try {
    const contacts = await getCachedData(key);
    if (contacts) {
      contact.id = Date.now();
      const updatedContacts = [...contacts, contact];
      await setCachedData(key, updatedContacts);
    } else {
      await setCachedData(key, [contact]);
    }
  } catch (error) {
    console.error(`Error setting contact data for key "${key}":`, error);
  }
};

export const removeCachedData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    cache.delete(key);
  } catch (error) {
    console.error(`Error removing cached data for key "${key}":`, error);
  }
};

export const removeContactById = async (
  key: string,
  id: number,
): Promise<void> => {
  try {
    const contacts = await getCachedData(key);
    if (contacts) {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      await setCachedData(key, updatedContacts);
    }
  } catch (error) {
    console.error(
      `Error removing contact with id "${id}" from key "${key}":`,
      error,
    );
  }
};
