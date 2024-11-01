import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ContactImage from '../../components/ContactImage';
import useUpdate from './hooks/useUpdate.hook';
import {useCamera} from '../../hooks/useCamera.hook';
import {RootStackParamList} from '../../navigation/interfaceRootStackParamList';
import Mapbox from '../../components/Mapbox';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type UpdateContactRouteProps = RouteProp<RootStackParamList, 'UpdateContact'>;

export interface IupdateContactRoute {
  route: UpdateContactRouteProps;
}
export default function UpdateContact({route}: IupdateContactRoute) {
  const {
    handleSave,
    contact,
    imageUri,
    setName,
    setEmail,
    setPhone,
    setImageUri,
    updateLocation,
    location,
  } = useUpdate({
    route,
  });

  const {openCamera, openGallery} = useCamera(setImageUri);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: backgroundColor,
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      height: 45,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 20,
      backgroundColor: isDarkMode ? '#555' : '#fff',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
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
    <ScrollView style={styles.container}>
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

      <Mapbox onLocationSelect={updateLocation} location={location} />

      <View style={styles.buttonContainer}></View>

      <Button title="Save Changes" onPress={handleSave} />
      <Button title="Camara" onPress={openCamera} />
      <Button title="Galeria" onPress={openGallery} />
    </ScrollView>
  );
}
