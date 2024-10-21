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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    h1: {
      color: isDarkMode ? Colors.white : Colors.black,
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 30,
    },
    body: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      height: 1000, //pendiente por revisar OJO
      padding: 30,
      color: !isDarkMode ? Colors.black : Colors.white,
      gap: 30,
    },
    header: {
      flexDirection: 'column',
      gap: 20,
    },
    headerTitle: {
      padding: 10,
    },
    input: {
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    contact: {
      padding: 5,
      color: 'lightgray',
    },
    img: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderColor: 'lightgray',
      borderWidth: 1,
      overflow: 'hidden',
      margin: 10,
    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerSearch: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 15,
      paddingHorizontal: 10,
      height: 40,
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
          <Icon name="search-outline" size={30} />
          <TextInput placeholder="Buscar contacto" />
        </View>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <View style={styles.main}>
            <View style={styles.container}>
              <View style={styles.contact}>
                <Text>Nombre</Text>
                <Text>Email</Text>
                <Text>Teléfono</Text>
              </View>
              <View style={styles.img}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
