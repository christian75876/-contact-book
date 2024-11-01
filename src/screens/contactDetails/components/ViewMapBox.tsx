import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import MapboxGL from '@rnmapbox/maps';
import {PUBLIC_MAPBOX_KEY} from '@env';
import Icon from 'react-native-vector-icons/Ionicons';

MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

interface ViewMapBoxProps {
  latitude: number | null;
  longitude: number | null;
}

const ViewMapBox: React.FC<ViewMapBoxProps> = ({latitude, longitude}) => {
  if (!latitude || !longitude) {
    return (
      <View>
        <Text>No location available</Text>
      </View>
    );
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
      </MapboxGL.MapView>
    </View>
  );
};

export default ViewMapBox;
