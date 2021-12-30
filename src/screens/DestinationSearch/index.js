import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View, SafeAreaView} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('redirect to results!!');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setOriginPlace({data, details}); // setting data and details into a new object
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCZRrat3B4PYHCgtpT1Nsxn200N3ezMm4k',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setDestinationPlace({data, details}); // setting data and details into a new object
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCZRrat3B4PYHCgtpT1Nsxn200N3ezMm4k',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    backgroundColor: '#eee',
    marginVertical: 5,
    padding: 10,
    borderRadius: 7,
  },
});
