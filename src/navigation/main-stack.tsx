import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';

const MainStack = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default MainStack;
