import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UberTypeRow from '../UberTypeRow';

// import typesData from '../../assets/data/types';

const typesData = [
  {
    id: '0',
    type: 'UberX',
    price: 22,
    duration: 45,
  },
  {
    id: '1',
    type: 'Comfort',
    price: 27,
    duration: 30,
  },
  {
    id: '2',
    type: 'UberXL',
    price: 36,
    duration: 27,
  },
];

const UberTypes = () => {
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow type={type} key={type.id} />
      ))}
      <UberTypeRow />
    </View>
  );
};

export default UberTypes;

const styles = StyleSheet.create({
  container: {},
});
