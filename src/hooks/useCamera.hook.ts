import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {checkPermission} from '../utilities/check-permision';
import {PermissionEnum} from '../interfaces/permissions.interface';

type SetImageUriType = (uri: string | null) => void;

export const useCamera = (setImageUri: SetImageUriType) => {
  const openCamera = async () => {
    const permissionResponse = await checkPermission(PermissionEnum.CAMERA);
    if (!permissionResponse) {
      console.log('cannot check permission');
    } else {
      launchCamera({mediaType: 'photo', cameraType: 'back'}, response => {
        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri || null);
        }
      });
    }
  };

  const openGallery = async () => {
    const permissionResponse = await checkPermission(
      PermissionEnum.READ_MEDIA_IMAGES,
    );
    if (!permissionResponse) {
      console.log('cannot check permissions');
    } else {
      launchImageLibrary({mediaType: 'photo'}, response => {
        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri || null);
        }
      });
    }
  };

  return {openCamera, openGallery};
};
