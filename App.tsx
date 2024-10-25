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
// import MainStack from './navigation/main-stack';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <MainStack />
    </SafeAreaProvider>
  );
}
export default App;
