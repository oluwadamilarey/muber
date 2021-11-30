import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text styles={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  inputBox: {},
});
