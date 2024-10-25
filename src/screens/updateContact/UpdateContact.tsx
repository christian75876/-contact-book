import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/main-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import ContactImage from '../../components/ContactImage';
import useUpdate from './hooks/useUpdate.hook';

type UpdateContactRouteProps = RouteProp<RootStackParamList, 'UpdateContact'>;

export interface IupdateContactRoute {
  route: UpdateContactRouteProps;
}
export default function UpdateContact({route}: IupdateContactRoute) {
  const {
    handleSave,
    openGallery,
    openCamera,
    contact,
    imageUri,
    setName,
    setEmail,
    setPhone,
  } = useUpdate({
    route,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
  });

  if (!contact) {
    return (
      <SafeAreaView>
        <Text>No contact found</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <ContactImage imageUri={imageUri} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        defaultValue={contact.name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={contact.email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        defaultValue={contact.phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button title="Save Changes" onPress={handleSave} />
      <Button title="Camara" onPress={openCamera} />
      <Button title="Galeria" onPress={openGallery} />
    </View>
  );
}
