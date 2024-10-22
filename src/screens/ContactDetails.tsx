import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {contactData} from '../data/data';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import DeleteButton from '../components/contacDetails/DeleteButton';

export default function ContactDetails({route}: {route: any}) {
  const {contactId} = route.params;

  const contact = contactData.find(data => data.id === contactId);
  const isDarkMode = useColorScheme() === 'dark';

  if (!contact) {
    return (
      <SafeAreaView>
        <Text>No contact found</Text>
      </SafeAreaView>
    );
  }

  const handleDelete = () => {
    // Aquí va la lógica para eliminar el ítem, por ejemplo:
    console.log('Elemento eliminado');
  };

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
      marginTop: 10,
      marginEnd: 10,
    },
    containerBtn: {
      alignItems: 'flex-end',
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.containerBtn}>
        <TouchableHighlight style={styles.btnUpdate}>
          <Text style={{color: isDarkMode ? 'black' : '#fff', fontSize: 20}}>
            Editar
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.contactHeader}>
        <Icon
          name="person-circle-outline"
          size={170}
          color={isDarkMode ? 'white' : 'gray'}
        />
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
            <Text>Phone:</Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.information}>{contact.email}</Text>
            </View>
          </View>
        </View>
        <DeleteButton onDelete={handleDelete} />
      </ScrollView>
    </SafeAreaView>
  );
}
