import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';
import RouteMap from '../../components/RouteMap';

const SearchResults = () => {
  return (
    <View>
      {/* <HomeMap /> */}
      <RouteMap />
      <UberTypes />
    </View>
  );
};

export default SearchResults;
