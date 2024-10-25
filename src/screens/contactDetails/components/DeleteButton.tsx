import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
} from 'react-native';

interface DeleteButtonProps {
  contactId: number;
  onpress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({onpress}) => {
  const handlerDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this contact?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'OK',
        onPress: onpress,
      },
    ]);
  };
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    btnDelete: {
      width: 80,
      backgroundColor: isDarkMode ? '#f00' : 'red',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
  });

  return (
    <TouchableHighlight style={styles.btnDelete} onPress={handlerDelete}>
      <Text style={{color: '#fff', fontSize: 20}}>Delete</Text>
    </TouchableHighlight>
  );
};

export default DeleteButton;
