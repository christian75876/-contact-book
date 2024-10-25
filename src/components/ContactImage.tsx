import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ContactImageProps {
  imageUri: string | null;
}

const ContactImage: React.FC<ContactImageProps> = ({imageUri}) => {
  return (
    <View style={styles.contactHeader}>
      {imageUri ? (
        <Image source={{uri: imageUri}} style={styles.image} />
      ) : (
        <Icon name="person-circle-outline" size={170} color={'lightgray'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contactHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 85,
  },
});

export default ContactImage;
