import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import MapboxGL from '@rnmapbox/maps';
import { PUBLIC_MAPBOX_KEY } from '@env';
import Icon from 'react-native-vector-icons/Ionicons';
import getIconForWeather from '../hooks/useViewMapBox.hook';

MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

interface ViewMapBoxProps {
  latitude: number | null;
  longitude: number | null;
  icon: string | null;
}

const ViewMapBox: React.FC<ViewMapBoxProps> = ({
  latitude,
  longitude,
  icon,
}) => {
  console.log(icon);

  if (!latitude || !longitude || !icon) {
    return (
      <View>
        <Text>No location available</Text>
      </View>
    );
  }

  const aux = getIconForWeather(icon);

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
    marker: {
      color: 'blue',
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
          id={'marker-2'}>
          <Icon {...aux} />
        </MapboxGL.PointAnnotation>

        <MapboxGL.PointAnnotation
          coordinate={[latitude, longitude]}
          id={'marker-1'}>
          <Icon name="location" size={24} style={styles.marker} />
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>
    </View>
  );
};

export default ViewMapBox;
