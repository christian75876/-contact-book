import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
} from 'react-native';
import {removeContactById} from '../../services/Crud';

interface DeleteButtonProps {
  contactId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({contactId}) => {
  const handlerDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this contact?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => removeContactById('contacts', contactId)},
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
