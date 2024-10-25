import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

type SetImageUriType = (uri: string | null) => void;

export const useCamera = (setImageUri: SetImageUriType) => {
  const openCamera = () => {
    launchCamera({mediaType: 'photo', cameraType: 'back'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };

  return {openCamera, openGallery};
};
