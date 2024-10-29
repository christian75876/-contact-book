import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Icon from 'react-native-vector-icons/Ionicons';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiY2hyaXN0aWFuNzU4NzYiLCJhIjoiY20ydHE5ZWU0MDVzajJqcHhldmk5eWE1NSJ9.qWRyGE_Ulod9XM4G8Ah27Q',
);

const Mapbox = () => {
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera
          centerCoordinate={[-77.04, 38.907]}
          zoomLevel={11.15}
        />

        <MapboxGL.PointAnnotation id="marker1" coordinate={[-77.04, 38.907]}>
          <Icon name="location" size={24} style={{color: 'blue'}}></Icon>
        </MapboxGL.PointAnnotation>

        <MapboxGL.PointAnnotation id="marker2" coordinate={[-77.05, 38.908]}>
          <Icon name="location-outline" size={40} style={{color: 'red'}}></Icon>
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  blackMarker: {
    backgroundColor: 'black',
    transform: [{rotate: '45deg'}],
  },
});

export default Mapbox;
