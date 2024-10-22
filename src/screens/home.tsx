/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/main-stack';
import {getCachedData} from '../services/Crud';

function Home(): React.JSX.Element {
  const [contacts, setContacts] = useState<any[]>([]);

  const retrieveData = async () => {
    try {
      const data = await getCachedData('contacts');
      if (data) {
        setContacts(data);
      }
    } catch (error) {
      console.log('error al obtener datos de cache' + error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      retrieveData();
      console.log('Contact list updated');
    }, []),
  );

  type navigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ContacDetails'
  >;

  const navigation = useNavigation<navigationProp>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    h1: {
      color: isDarkMode ? Colors.white : Colors.black,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      height: '100%',
      padding: 2,
      color: !isDarkMode ? Colors.black : Colors.white,
    },
    headerTitle: {
      paddingBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    },
    input: {
      height: 40,
      backgroundColor: '#00000000',
    },
    containerSearch: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      paddingHorizontal: 15,
      height: 45,
    },
    iconSearch: {
      marginRight: 10,
    },
    contactList: {
      flexDirection: 'column',
      paddingHorizontal: 8,
      gap: 15,
    },
    contact: {
      backgroundColor: isDarkMode ? '#333' : '#fff',
      padding: 8,
      borderBottomWidth: 1,
      borderColor: isDarkMode ? '#555' : '#ddd',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    contactInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contactName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? Colors.white : Colors.black,
    },
    contactDetails: {
      color: isDarkMode ? 'lightgray' : 'gray',
    },
    img: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderColor: 'lightgray',
      borderWidth: 1,
      overflow: 'hidden',
    },
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.headerTitle}>
        <Text style={styles.h1}>Contactos</Text>
        <View style={styles.containerSearch}>
          <Icon name="search-outline" size={24} style={styles.iconSearch} />
          <TextInput placeholder="Buscar contacto" style={styles.input} />
        </View>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <View style={styles.contactList}>
            {contacts.map((data, index) => (
              <View
                key={index}
                style={styles.contact}
                onTouchStart={() =>
                  navigation.navigate('ContacDetails', {contactId: data.id})
                }>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{data.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;

/**
 * import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/main-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { contactData } from '../data/data';

function Home(): React.JSX.Element {
  type navigationProp = NativeStackNavigationProp<RootStackParamList, 'ContacDetails'>;
  const [contacts, setContacts] = useState<any[]>([]);

  const navigation = useNavigation<navigationProp>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    h1: {
      color: isDarkMode ? Colors.white : Colors.black,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      height: '100%',
      padding: 2,
      color: !isDarkMode ? Colors.black : Colors.white,
    },
    headerTitle: {
      paddingBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    },
    input: {
      height: 40,
      backgroundColor: '#00000000',
    },
    containerSearch: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      paddingHorizontal: 15,
      height: 45,
    },
    iconSearch: {
      marginRight: 10,
    },
    contactList: {
      flexDirection: 'column',
      paddingHorizontal: 8,
      gap: 15,
    },
    contact: {
      backgroundColor: isDarkMode ? '#333' : '#fff',
      padding: 8,
      borderBottomWidth: 1,
      borderColor: isDarkMode ? '#555' : '#ddd',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    contactInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contactName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? Colors.white : Colors.black,
    },
    contactDetails: {
      color: isDarkMode ? 'lightgray' : 'gray',
    },
    img: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderColor: 'lightgray',
      borderWidth: 1,
      overflow: 'hidden',
    },
  });

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('contact');
      if (value !== null) {
        // Si hay datos en AsyncStorage, los parseamos
        setContacts(JSON.parse(value));
      } else {
        // Si no hay datos, usamos el valor por defecto
        setContacts(contactData);
        await AsyncStorage.setItem('contact', JSON.stringify(contactData)); // Guardamos los datos por defecto
      }
    } catch (error) {
      console.error('Error retrieving contacts from AsyncStorage', error);
      // En caso de error, mostramos el valor por defecto
      setContacts(contactData);
    }
  };

  useEffect(() => {
    retrieveData(); // Cargar los datos al montar el componente
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.headerTitle}>
        <Text style={styles.h1}>Contactos</Text>
        <View style={styles.containerSearch}>
          <Icon name="search-outline" size={24} style={styles.iconSearch} />
          <TextInput placeholder="Buscar contacto" style={styles.input} />
        </View>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <View style={styles.contactList}>
            {contacts.map((data, index) => (
              <View
                key={index}
                style={styles.contact}
                onTouchStart={() =>
                  navigation.navigate('ContacDetails', { contactId: data.id })
                }>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{data.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

 */
