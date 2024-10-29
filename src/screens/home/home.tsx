import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useHome} from './hooks/useHome.hook';
import Mapbox from '../../components/Mapbox';

export function Home(): React.JSX.Element {
  const {navigation, filteredContacts, searchText, setSearchText} = useHome();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    h1: {
      color: isDarkMode ? Colors.white : Colors.black,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      height: '100%',
      padding: 2,
      color: !isDarkMode ? Colors.black : Colors.white,
    },
    headerTitle: {
      paddingBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    },
    input: {
      height: 40,
      backgroundColor: '#00000000',
    },
    containerSearch: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      paddingHorizontal: 15,
      height: 45,
    },
    iconSearch: {
      marginRight: 10,
    },
    contactList: {
      flexDirection: 'column',
      paddingHorizontal: 8,
      gap: 15,
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
    contactInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contactName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDarkMode ? Colors.white : Colors.black,
    },
    contactDetails: {
      color: isDarkMode ? 'lightgray' : 'gray',
    },
    img: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderColor: 'lightgray',
      borderWidth: 1,
      overflow: 'hidden',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Mapbox />

      <View style={styles.headerTitle}>
        <View style={styles.header}>
          <Text style={styles.h1}>Contacts</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NewContact')}>
            <Icon name="add-outline" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerSearch}>
          <Icon name="search-outline" size={24} style={styles.iconSearch} />
          <TextInput
            placeholder="Search..."
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <View style={styles.contactList}>
            {filteredContacts.map((data, index) => (
              <View
                key={index}
                style={styles.contact}
                onTouchStart={() => {
                  const contactId = data.id;
                  return navigation.navigate('ContacDetails', {
                    contactId,
                  });
                }}>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{data.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;
