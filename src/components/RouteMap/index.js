import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB5B3gd9uA1hs2hZulnmpgeEHzcKcb1eCQ';

const HomeMap = () => {
  const origin = {
    latitude: 28.450672,
    longitude: -16.263845,
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269845,
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
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
        <Marker coordinate={origin} title="origin" />
        <Marker coordinate={destination} title={'destination'} />
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
