import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  useColorScheme,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ContactImage from '../../components/ContactImage';
import {useNewContact} from './hooks/useNewContact';
import {useCamera} from '../../hooks/useCamera.hook';
import Mapbox from '../../components/Mapbox';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

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
    updateLocation,
    location,
  } = useNewContact();

  const {openCamera, openGallery} = useCamera(setImageUri);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const [isMapVisible, setIsMapVisible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: backgroundColor,
    },
    contactHeader: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: isDarkMode ? Colors.white : Colors.black,
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
      backgroundColor: '#007bff',
      borderRadius: 8,
      paddingVertical: 12,
      marginHorizontal: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    btnCreate: {
      backgroundColor: isDarkMode ? 'lightgray' : 'gray',
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalMap: {
      height: 400,
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
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
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contactHeader}>
        <ContactImage imageUri={imageUri} />
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>New Contact</Text>
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

        <TouchableOpacity onPress={() => setIsMapVisible(true)}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Select location</Text>
            <Icon name="map-outline" size={24} style={{paddingLeft: 10}} />
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

        <TouchableOpacity
          style={styles.btnCreate}
          onPress={handleCreateContact}>
          <Text
            style={{color: isDarkMode ? '#000' : '#fff', fontWeight: 'bold'}}>
            Create
          </Text>
        </TouchableOpacity>
      </ScrollView>

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
    </SafeAreaView>
  );
}
