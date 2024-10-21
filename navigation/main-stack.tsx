import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/screens/home';
import {ParamListBase} from '@react-navigation/native';
import ContactDetails from '../src/screens/ContactDetails';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  ContactDetails: {contactId: number};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ContacDetails" component={ContactDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
