/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainStack from './src/navigation/main-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getCachedData} from './src/services/Crud';
import {initializeContacts} from './src/data/data';
import {checkPermission} from './src/utilities/check-permision';
import {PermissionEnum} from './src/interfaces/permissions.interface';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const retrieveData = async () => {
    try {
      const data = await getCachedData('contacts');
      if (!data) {
        const permissionResponse = await checkPermission(
          PermissionEnum.ACCESS_MEDIA_LOCATION,
        );
        if (!permissionResponse) {
          console.log('cannot check permissions');
        } else {
          initializeContacts();
        }
      } else {
        console.log('Todo va funcionando bien');
      }
    } catch (error) {
      console.log('error al obtener datos de cache' + error);
    }
  };

  retrieveData();

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <MainStack />
    </SafeAreaProvider>
  );
}
export default App;
