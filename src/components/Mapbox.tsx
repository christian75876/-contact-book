// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import MapboxGL from '@rnmapbox/maps';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {PUBLIC_MAPBOX_KEY} from '@env';

// MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

// const Mapbox = () => {
//   // const [markers, setMarkers] = useState<string[] | null>([]);

//   // useEffect(() => {

//   // });

//   const styles = StyleSheet.create({
//     container: {
//       height: 300,
//       width: 300,
//       backgroundColor: 'tomato',
//     },
//     map: {
//       flex: 1,
//     },
//     marker: {
//       width: 20,
//       height: 20,
//       backgroundColor: 'red',
//       borderRadius: 10,
//     },
//     blackMarker: {
//       backgroundColor: 'black',
//       transform: [{rotate: '45deg'}],
//     },
//   });

//   const handlePress = () => {
//     console.log('Press');
//   };

//   return (
//     <View style={styles.container}>
//       <MapboxGL.MapView style={styles.map} onPress={handlePress}>
//         <MapboxGL.Camera
//           centerCoordinate={[-77.04, 38.907]}
//           zoomLevel={11.15}
//         />

//         <MapboxGL.PointAnnotation id="marker1" coordinate={[-77.04, 38.907]}>
//           <Icon name="location" size={24} style={{color: 'blue'}}></Icon>
//         </MapboxGL.PointAnnotation>

//         {/* <MapboxGL.PointAnnotation id="marker2" coordinate={[-77.05, 38.908]}>
//           <Icon name="location-outline" size={40} style={{color: 'red'}}></Icon>
//         </MapboxGL.PointAnnotation> */}
//       </MapboxGL.MapView>
//     </View>
//   );
// };

// export default Mapbox;
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapboxGL from '@rnmapbox/maps';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { PUBLIC_MAPBOX_KEY } from '@env';

// MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

// const Mapbox = () => {
//   const [marker, setMarker] = useState<{ id: string; coordinates: number[] } | null>(null);

//   const styles = StyleSheet.create({
//     container: {
//       height: 300,
//       width: 300,
//       backgroundColor: 'tomato',
//     },
//     map: {
//       flex: 1,
//     },
//   });

//   const handlePress = (event: any) => {
//     const coordinates = event.geometry.coordinates;
//     const newMarker = {
//       id: `${coordinates[0]}-${coordinates[1]}`,
//       coordinates,
//     };
//     setMarker(newMarker); // Actualizar el marcador existente
//   };

//   return (
//     <View style={styles.container}>
//       <MapboxGL.MapView style={styles.map} onPress={handlePress}>
//         <MapboxGL.Camera
//           centerCoordinate={[-77.04, 38.907]}
//           zoomLevel={11.15}
//         />

//         {/* Renderizar el marcador, si existe */}
//         {marker && (
//           <MapboxGL.PointAnnotation key={marker.id} id={marker.id} coordinate={marker.coordinates}>
//             <Icon name="location" size={24} style={{ color: 'blue' }} />
//           </MapboxGL.PointAnnotation>
//         )}
//       </MapboxGL.MapView>
//     </View>
//   );
// };

// export default Mapbox;

// import React, {useState} from 'react';
// import {View, StyleSheet} from 'react-native';
// import MapboxGL from '@rnmapbox/maps';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {PUBLIC_MAPBOX_KEY} from '@env';

// MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

// const Mapbox = () => {
//   const [marker, setMarker] = useState<{
//     id: string;
//     coordinates: number[];
//   } | null>(null);

//   const styles = StyleSheet.create({
//     container: {
//       height: 300,
//       width: 300,
//       backgroundColor: 'tomato',
//     },
//     map: {
//       flex: 1,
//     },
//   });

//   const handlePress = (event: any) => {
//     const coordinates = event.geometry.coordinates;
//     const newMarker = {
//       id: `${coordinates[0]}-${coordinates[1]}`,
//       coordinates,
//     };
//     console.log(newMarker);
//     setMarker(newMarker);
//   };

//   return (
//     <View style={styles.container}>
//       <MapboxGL.MapView style={styles.map} onPress={handlePress}>
//         <MapboxGL.Camera
//           centerCoordinate={[-77.04, 38.907]}
//           zoomLevel={11.15}
//         />

//         {marker && (
//           <MapboxGL.PointAnnotation
//             key={marker.id}
//             id={marker.id}
//             coordinate={marker.coordinates}>
//             <Icon name="location" size={24} style={{color: 'blue'}} />
//           </MapboxGL.PointAnnotation>
//         )}
//       </MapboxGL.MapView>
//     </View>
//   );
// };

// export default Mapbox;
//*********************************************************************************** */
// import React, {useState} from 'react';
// import {View, StyleSheet} from 'react-native';
// import MapboxGL from '@rnmapbox/maps';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {PUBLIC_MAPBOX_KEY} from '@env';

// MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

// const Mapbox = ({onLocationSelect}: any) => {
//   const [markerCoordinates, setMarkerCoordinates] = useState<number[] | null>(
//     null,
//   );

//   const handlePress = (event: any) => {
//     const coordinates = event.geometry.coordinates;
//     setMarkerCoordinates(coordinates);
//     if (onLocationSelect) {
//       onLocationSelect(coordinates);
//     }
//     return coordinates;
//   };

//   const styles = StyleSheet.create({
//     container: {
//       height: 300,
//       width: '100%',
//       backgroundColor: 'tomato',
//     },
//     map: {
//       flex: 1,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <MapboxGL.MapView style={styles.map} onPress={handlePress}>
//         <MapboxGL.Camera
//           centerCoordinate={[-75.56886131788171, 6.2499793616330805]}
//           zoomLevel={11.15}
//           animationMode="flyTo"
//           animationDuration={1000}
//         />

//         {markerCoordinates && (
//           <MapboxGL.PointAnnotation
//             coordinate={markerCoordinates}
//             id={`${markerCoordinates[0]}-${markerCoordinates[1]}`}>
//             <Icon name="location" size={24} style={{color: 'blue'}} />
//           </MapboxGL.PointAnnotation>
//         )}
//       </MapboxGL.MapView>
//     </View>
//   );
// };

// export default Mapbox;
//*********************************************************************************** */

import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {PUBLIC_MAPBOX_KEY} from '@env';

MapboxGL.setAccessToken(PUBLIC_MAPBOX_KEY);

interface IMapBox {
  onLocationSelect: (nums: number[]) => void;
  location?: number[] | null;
}

const Mapbox = ({onLocationSelect, location}: IMapBox) => {
  useEffect(() => {
    if (location) {
      onLocationSelect(location);
    }
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
  });

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
            <Icon name="location" size={24} style={{color: 'blue'}} />
          </MapboxGL.PointAnnotation>
        )}
      </MapboxGL.MapView>
    </View>
  );
};

export default Mapbox;
