import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ContactImage from '../../components/ContactImage';
import {useNewContact} from './hooks/useNewContact';
import {useCamera} from '../../hooks/useCamera.hook';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function NewContact(): React.JSX.Element {
  const {
    imageUri,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    handleCreateContact,
    setImageUri,
  } = useNewContact();

  const {openCamera, openGallery} = useCamera(setImageUri);

  const isDarkMode = false;
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: backgroundColor,
    },
    contactHeader: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
      marginBottom: 20,
    },
    image: {
      width: 170,
      height: 170,
      borderRadius: 85,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: isDarkMode ? Colors.white : Colors.black,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: 'black',
      backgroundColor: isDarkMode ? '#555' : '#fff',
    },
    contactDetails: {
      backgroundColor: isDarkMode ? '#333' : '#fff',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
    },
    btnUpdate: {
      width: '100%',
      backgroundColor: isDarkMode ? 'lightgray' : 'gray',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      padding: 10,
    },
    containerBtn: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#007bff',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactHeader}>
        <ContactImage imageUri={imageUri} />
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.containerBtn}>
          <TouchableHighlight style={styles.button} onPress={openCamera}>
            <Text style={styles.buttonText}>Cámara</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={openGallery}>
            <Text style={styles.buttonText}>Galería</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={styles.btnUpdate}
          onPress={handleCreateContact}>
          <Text style={{color: isDarkMode ? '#000' : '#fff'}}>Crear</Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
}
