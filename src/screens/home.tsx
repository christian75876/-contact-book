/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/main-stack';
import {contactData} from '../data/data';

function Home(): React.JSX.Element {
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
            {contactData.map((data, index) => (
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

/**<View style={styles.container}>
                <View style={styles.contact}>
                  <Text>Nombre</Text>
                  <Text>Email</Text>
                  <Text>Teléfono</Text>
                </View>
                <View style={styles.img}>
                  <Button
                    title="btn"
                    onPress={() => navigation.navigate('ContacDetails')}
                  />
                </View>
              </View> */

/**
 *{contactData.map((data, index) => (
              <View key={index} style={styles.contact}>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{data.name}</Text>
                  <Text style={styles.contactDetails}>{data.email}</Text>
                  <Text style={styles.contactDetails}>{data.phone}</Text>
                </View>
                <View style={styles.img}>
                  <Icon name="person-circle-outline" size={60} color={isDarkMode ? 'white' : 'gray'} />
                </View>
              </View>
            ))}
 */
