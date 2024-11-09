import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  useColorScheme,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactImage from '../../components/ContactImage';
import useUpdate from './hooks/useUpdate.hook';
import { useCamera } from '../../hooks/useCamera.hook';
import { RootStackParamList } from '../../interfaces/interfaceRootStackParamList';
import Mapbox from '../../components/Mapbox';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

type UpdateContactRouteProps = RouteProp<RootStackParamList, 'UpdateContact'>;

export interface IupdateContactRoute {
  route: UpdateContactRouteProps;
}
export default function UpdateContact({ route }: IupdateContactRoute) {
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

  const { openCamera, openGallery } = useCamera(setImageUri);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const [isMapVisible, setIsMapVisible] = useState(false);

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
    button: {
      flex: 1,
      backgroundColor: isDarkMode ? 'lightgray' : 'gray',
      borderRadius: 8,
      paddingVertical: 12,
      marginHorizontal: 5,
    },
    buttonText: {
      color: isDarkMode ? '#000' : '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    btnClose: {
      backgroundColor: '#FF4B4B',
      borderRadius: 8,
      padding: 12,
      alignItems: 'center',
      width: '50%',
      marginBottom: 10,
      marginTop: 20,
    },
    btnCloseText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: isDarkMode ? Colors.white : Colors.black,
    },
    modalMap: {
      height: 400,
      width: '90%',
      backgroundColor: backgroundColor,
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
    },
    btnSave: {
      backgroundColor: isDarkMode ? 'lightgray' : 'gray',
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
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

      <TouchableOpacity onPress={() => setIsMapVisible(true)}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.label}>Select location</Text>
          <Icon name="map-outline" size={24} style={{ paddingLeft: 10 }} />
        </View>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnSave} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <Modal visible={isMapVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalMap}>
            <Mapbox onLocationSelect={updateLocation} location={location} />
            <TouchableOpacity
              style={styles.btnClose}
              onPress={() => setIsMapVisible(false)}>
              <Text style={styles.btnCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
