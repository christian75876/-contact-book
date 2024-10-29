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
// import {initializeContacts} from './src/data/data';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // Uncomment the following line to initialize the contacts data
  // initializeContacts();

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <MainStack />
    </SafeAreaProvider>
  );
}
export default App;
