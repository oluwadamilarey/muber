import React from 'react';
import {StyleSheet, TextInput, View, SafeAreaView} from 'react-native';

const DestinationSearch = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeHolder="From" />
        <TextInput style={styles.textInput} placeHolder="Where to?" />
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
    height: 50,
  },
});
