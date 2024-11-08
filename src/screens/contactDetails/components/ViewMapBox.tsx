import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import MapboxGL from '@rnmapbox/maps';
import {PUBLIC_MAPBOX_KEY} from '@env';
import Icon from 'react-native-vector-icons/Ionicons';

MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

interface ViewMapBoxProps {
  latitude: number | null;
  longitude: number | null;
  icon: string | null;
}

const ViewMapBox: React.FC<ViewMapBoxProps> = ({latitude, longitude, icon}) => {
  // const [imageUri, setImageUri] = useState<string>('');

  // useEffect(() => {
  //   console.log(icon);

  //   setImageUri(`https://openweathermap.org/img/wn/04n@2x.png`);
  // }, []);

  if (!latitude || !longitude || !icon) {
    return (
      <View>
        <Text>No location available</Text>
      </View>
    );
  }

  let aux = {
    name: 'sunny-outline',
    size: 24,
    style: {color: 'blue'},
  };

  switch (icon) {
    case '01d':
      aux = {
        name: 'sunny-outline',
        size: 24,
        style: {color: 'yellow'},
      };
      break;
    case '01n':
      aux = {
        name: 'moon-outline',
        size: 24,
        style: {color: 'darkgray'},
      };
      break;
    case '02d':
      aux = {
        name: 'parly-sunny-outline',
        size: 24,
        style: {color: 'orange'},
      };
      break;
    case '02n':
      aux = {
        name: 'cloudy-night-outline',
        size: 24,
        style: {color: 'darkgray'},
      };
      break;
    case '03d':
      aux = {
        name: 'cloudy-outline',
        size: 24,
        style: {color: 'gray'},
      };
      break;
    case '03n':
      aux = {
        name: 'cloudy-night-outline',
        size: 24,
        style: {color: 'gray'},
      };
      break;
    case '04d':
      aux = {
        name: 'cloud-circle-outline',
        size: 24,
        style: {color: 'lightgray'},
      };
      break;
    case '04n':
      aux = {
        name: 'cloud-circle-outline',
        size: 24,
        style: {color: 'black'},
      };
      break;
    case '09d':
      aux = {
        name: 'rainy-outline',
        size: 24,
        style: {color: 'blue'},
      };
      break;
    case '09n':
      aux = {
        name: 'rainy-outline',
        size: 24,
        style: {color: 'blue'},
      };
      break;
    case '10d':
      aux = {
        name: 'rainy-outline',
        size: 24,
        style: {color: 'blue'},
      };
      break;
    case '10n':
      aux = {
        name: 'rainy-outline',
        size: 24,
        style: {color: 'blue'},
      };
      break;
    case '11d':
      aux = {
        name: 'thunderstorm-outline',
        size: 24,
        style: {color: 'darkblue'},
      };
      break;
    case '11n':
      aux = {
        name: 'thunderstorm-outline',
        size: 24,
        style: {color: 'darkblue'},
      };
      break;
    case '13d':
      aux = {
        name: 'snowy-outline',
        size: 24,
        style: {color: 'lightblue'},
      };
      break;
    case '13n':
      aux = {
        name: 'cloudy-night-outline',
        size: 24,
        style: {color: 'black'},
      };
      break;
    case '50d':
      aux = {
        name: 'logo-soundcloud',
        size: 24,
        style: {color: 'gray'},
      };
      break;
    case '50n':
      aux = {
        name: 'logo-soundcloud',
        size: 24,
        style: {color: 'gray'},
      };
      break;
    default:
      aux = {
        name: 'help-outline',
        size: 24,
        style: {color: 'black'},
      };
  }

  const styles = StyleSheet.create({
    container: {
      height: 300,
      width: '100%',
      backgroundColor: 'tomato',
    },
    map: {
      flex: 1,
    },
    img: {
      width: 52,
      height: 50,
    },
  });

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera
          centerCoordinate={[latitude, longitude]}
          zoomLevel={11.15}
        />

        <MapboxGL.PointAnnotation
          coordinate={[latitude, longitude + 0.009]}
          id={`marker-2`}>
          {/* <Image
            source={{
              uri: imageUri,
            }}
            style={styles.img}
          /> */}
          <Icon {...aux} />
        </MapboxGL.PointAnnotation>

        <MapboxGL.PointAnnotation
          coordinate={[latitude, longitude]}
          id={`marker-1`}>
          <Icon name="location" size={24} style={{color: 'blue'}} />
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>
    </View>
  );
};

export default ViewMapBox;
