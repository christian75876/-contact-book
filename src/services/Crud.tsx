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

export const setCachedData = async (
  key: string,
  data: Contact[],
): Promise<void> => {
  try {
    const stringifiedData = JSON.stringify(data);
    await AsyncStorage.setItem(key, stringifiedData);
    cache.set(key, data);
    console.log('********************************' + data);
  } catch (error) {
    console.error(`Error setting cached data for key "${key}":`, error);
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
      console.log(updatedContacts);
      await setCachedData(key, updatedContacts);
    }
  } catch (error) {
    console.error(
      `Error removing contact with id "${id}" from key "${key}":`,
      error,
    );
  }
};
