import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
} from 'react-native';

interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = () => {
  const handlerDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this contact?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
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
      <Text style={{color: '#fff', fontSize: 20}}>Eliminar</Text>
    </TouchableHighlight>
  );
};

export default DeleteButton;
