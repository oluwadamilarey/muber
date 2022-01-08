import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }

    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }

    return require('../../assets/images/top-UberXL.png');
  };

  const Vehicle = [...cars];

  const marker = () => {
    <Marker
      coordinate={{
        latitude: 28.454812,
        longitude: -16.258658,
      }}>
      <Image
        source={require('../../assets/images/top-UberXL.png')}
        style={{width: 70, height: 70, resizeMode: 'contain'}}
      />
    </Marker>;
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: 28.454812,
          longitude: -16.258658,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        {cars.map(car => {
          return (
            <Marker
              key={car.id}
              coordinate={{
                latitude: car.latitude,
                longitude: car.longitude,
              }}>
              <Image
                source={getImage(car.title)}
                style={{width: 70, height: 70, resizeMode: 'contain'}}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
