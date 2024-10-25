import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ContactImage from '../../components/ContactImage';
import {useNewContact} from './hooks/useNewContact';

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
    openCamera,
    openGallery,
  } = useNewContact();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    form: {
      marginTop: 20,
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
  });

  return (
    <SafeAreaView style={styles.container}>
      <ContactImage imageUri={imageUri} />

      <View style={styles.form}>
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
        <Button title="Create Contact" onPress={handleCreateContact} />
        <Button title="Camara" onPress={openCamera} />
        <Button title="Galeria" onPress={openGallery} />
      </View>
    </SafeAreaView>
  );
}
