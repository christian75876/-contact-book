import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DeleteButton from './components/DeleteButton';
import {RouteProp} from '@react-navigation/native';
import {removeContactById} from '../../services/Crud';
import ContactImage from '../../components/ContactImage';
import {useContactDetail} from './hooks/useContactDetails.hook';
import {RootStackParamList} from '../../navigation/interfaceRootStackParamList';
import ViewMapBox from './components/ViewMapBox';
import apiWeather from '../../services/Weather';

type ContactDetailsRouteProps = RouteProp<RootStackParamList, 'ContacDetails'>;

export interface IcontactDetailsRoute {
  route: ContactDetailsRouteProps;
}

export default function ContactDetails({route}: IcontactDetailsRoute) {
  const {contactId} = route.params as {contactId: string};
  const [weatherData, setWeatherData] = useState(null);
  const {navigation, contact, isDarkMode} = useContactDetail({route});

  useEffect(() => {
    const fetchWeather = async () => {
      if (!contact?.location) {
        return;
      }
      const response = await apiWeather(
        contact.location[1],
        contact.location[0],
      );
      setWeatherData(response);
    };
    fetchWeather();
  }, [contact]);

  if (!contact) {
    return (
      <SafeAreaView>
        <Text>No contact found</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    contactHeader: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
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
    contactName: {
      fontSize: 30,
      fontWeight: 'bold',
      color: isDarkMode ? Colors.white : Colors.black,
      marginBottom: 50,
    },
    contactDetails: {
      color: isDarkMode ? 'lightgray' : 'gray',
      borderWidth: 1,
      padding: 4,
      borderRadius: 15,
      margin: 5,
      height: 60,
    },
    body: {
      padding: 8,
    },
    information: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    btnUpdate: {
      width: 80,
      backgroundColor: isDarkMode ? 'lightgray' : 'gray',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    containerBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  const deleteContact = async () => {
    await removeContactById('contacts', parseInt(contactId));
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.containerBtn}>
        <TouchableHighlight style={styles.btnUpdate}>
          <Text
            onPress={() => {
              navigation.navigate('UpdateContact', {
                contactId: parseInt(contactId),
              });
            }}
            style={{color: isDarkMode ? 'black' : '#fff', fontSize: 20}}>
            Update
          </Text>
        </TouchableHighlight>
        <DeleteButton contactId={contact.id} onpress={deleteContact} />
      </View>
      <View style={styles.contactHeader}>
        <ContactImage imageUri={contact.imageUri} />
        <Text style={styles.contactName}>{contact.name}</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <View style={styles.contactDetails}>
            <Text>Phone:</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.information}>{contact.phone}</Text>
            </View>
          </View>
          <View style={styles.contactDetails}>
            <Text>Email:</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.information}>{contact.email}</Text>
            </View>
          </View>
          <Text>Location</Text>
        </View>

        {!contact.location || !contact.location[0] || !contact.location[1] ? (
          <Text>No location available</Text>
        ) : (
          <ViewMapBox
            latitude={contact.location[0]}
            longitude={contact.location[1]}
            icon={weatherData?.weather?.[0]?.icon}
          />
        )}
        {weatherData && weatherData.weather && (
          <View style={styles.body}>
            <Text style={styles.information}>
              Weather: {weatherData.weather[0].description}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
