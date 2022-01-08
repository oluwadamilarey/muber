import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';

const UberTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow type={type} key={type.id} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Confirm
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;

const styles = StyleSheet.create({
  container: {},
});
