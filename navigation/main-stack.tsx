import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/screens/home/home';
import {ParamListBase} from '@react-navigation/native';
import ContactDetails from '../src/screens/ContactDetails';
import NewContact from '../src/screens/NewContact';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  ContactDetails: {contactId: number};
  NewContact: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ContacDetails" component={ContactDetails} />
        <Stack.Screen name="NewContact" component={NewContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
