import React from 'react';
import {Text, View} from 'react-native';

export default function ContactDetails({route}: {route: any}) {
  const {contactId} = route.params;

  return (
    <View>
      <Text>Contact Details for ID: {contactId}</Text>
    </View>
  );
}
