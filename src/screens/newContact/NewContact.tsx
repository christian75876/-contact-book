import React from 'react';
import {
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: 'black',
    },
    contactHeader: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
    },
    image: {
      width: 170,
      height: 170,
      borderRadius: 85,
    },
    btnUpdate: {
      width: 80,
      backgroundColor: 'gray',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginEnd: 10,
    },
    containerBtn: {
      flexDirection: 'column',
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
      <View style={{alignItems: 'flex-end'}}>
        <TouchableHighlight style={styles.btnUpdate}>
          <Text onPress={handleCreateContact}>Create</Text>
        </TouchableHighlight>
      </View>
      <ContactImage imageUri={imageUri} />

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
    </SafeAreaView>
  );
}
