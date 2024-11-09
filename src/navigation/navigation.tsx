import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactDetails from '../screens/contactDetails/ContactDetails';
import NewContact from '../screens/newContact/NewContact';
import UpdateContact from '../screens/updateContact/UpdateContact';
import Home from '../screens/home/home';
import { RootStackParamList } from '../interfaces/interfaceRootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContacDetails"
        component={ContactDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewContact"
        component={NewContact}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateContact"
        component={UpdateContact}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
