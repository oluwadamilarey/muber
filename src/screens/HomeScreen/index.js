import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import RouteMap from '../../components/RouteMap';

const HomeScreen = () => {
  return (
    <View>
      {/* *<HomeMap/> */}
      <RouteMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
