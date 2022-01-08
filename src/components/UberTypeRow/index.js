import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = props => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }

    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }

    return require('../../assets/images/UberXL.jpeg');
  };

  return (
    <View style={styles.container}>
      {type ? (
        <>
          <Image style={styles.image} source={getImage()} />
          <View style={styles.middleContainer}>
            <Text style={styles.type}>
              {' '}
              {type.type} <Ionicons name={'person'} size={19} /> 3
            </Text>
            <Text style={styles.time}> 8:03PM drop off</Text>
          </View>
          <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
            <Text style={styles.price}>est. ${type.price}</Text>
          </View>
        </>
      ) : (
        <></>
      )}
      {/** Image */}
      {/* <Image style={styles.image} source={require('../../assets/UberX.jpeg')} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {' '}
          {type.id} <Ionicons name={'person'} size={19} /> 3
        </Text>
        <Text style={styles.time}> 8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View> */}
    </View>
  );
};

export default UberTypeRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  time: {
    color: '#5d5d5d',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});
