import {View, StyleSheet, Text, Image} from 'react-native';
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
  if (!latitude || !longitude || !icon) {
    return (
      <View>
        <Text>No location available</Text>
      </View>
    );
  }

  console.log(icon);

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
      width: 70,
      height: 100,
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
          coordinate={[latitude, longitude]}
          id={`${latitude}-${longitude}`}>
          <Icon name="location" size={24} style={{color: 'blue'}} />
        </MapboxGL.PointAnnotation>

        <MapboxGL.PointAnnotation
          coordinate={[latitude, longitude + 0.009]}
          id={`marker-2`}>
          <Image
            source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}
            style={styles.img}
          />
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>
    </View>
  );
};

export default ViewMapBox;
