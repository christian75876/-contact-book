import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { PUBLIC_MAPBOX_KEY } from '@env';

MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

interface IMapBox {
  onLocationSelect: (nums: number[]) => void;
  location?: number[] | null;
}

const Mapbox = ({ onLocationSelect, location }: IMapBox) => {
  useEffect(() => {
    if (location) {
      onLocationSelect(location);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePress = (event: any) => {
    const coordinates = event.geometry.coordinates;
    onLocationSelect(coordinates);
  };

  const styles = StyleSheet.create({
    container: {
      height: 300,
      width: '100%',
      backgroundColor: 'tomato',
    },
    map: {
      flex: 1,
    },
    color: {
      color: 'blue',
    },
  });

  if (!location) {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} onPress={handlePress}>
          <MapboxGL.Camera
            centerCoordinate={[-75.56886131788171, 6.2499793616330805]}
            zoomLevel={11.15}
            animationMode="flyTo"
            animationDuration={1000}
          />

          {location && (
            <MapboxGL.PointAnnotation
              coordinate={location}
              id={`${location[0]}-${location[1]}`}>
              <Icon name="location" size={24} style={styles.color} />
            </MapboxGL.PointAnnotation>
          )}
        </MapboxGL.MapView>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map} onPress={handlePress}>
        <MapboxGL.Camera
          centerCoordinate={[location[0], location[1]]}
          zoomLevel={11.15}
          animationMode="flyTo"
          animationDuration={1000}
        />

        {location && (
          <MapboxGL.PointAnnotation
            coordinate={location}
            id={`${location[0]}-${location[1]}`}>
            <Icon name="location" size={24} style={styles.color} />
          </MapboxGL.PointAnnotation>
        )}
      </MapboxGL.MapView>
    </View>
  );
};

export default Mapbox;
