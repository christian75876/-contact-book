import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/screens/home/home';
import {ParamListBase} from '@react-navigation/native';
import ContactDetails from '../src/screens/contactDetails/ContactDetails';
import UpdateContact from '../src/screens/updateContact/UpdateContact';
import NewContact from '../src/screens/newContact/NewContact';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  ContactDetails: {contactId: number};
  NewContact: undefined;
  UpdateContact: {contactId: number};
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
        <Stack.Screen name="UpdateContact" component={UpdateContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
