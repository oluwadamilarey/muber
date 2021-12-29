import React from 'react';
import {StyleSheet, TextInput, View, SafeAreaView} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [fromText, setFromText] = React.useState('');
  const [destinationText, setdestinationText] = React.useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          style={styles.textInput}
          placeholder="From"
          onChangeText={setFromText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Where to?"
          onChangeText={setdestinationText}
          value={destinationText}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyCZRrat3B4PYHCgtpT1Nsxn200N3ezMm4k',
            language: 'en',
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
  },
  textInput: {
    backgroundColor: '#eee',
    marginVertical: 5,
    padding: 10,
    borderRadius: 7,
  },
});
