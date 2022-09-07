import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SeriesDetail from '../../screens/seriesDetail';
import {SelectionSeries} from '../../screens/selectionSeries/selectionSeleries';
const {Navigator, Screen} = createNativeStackNavigator();

const SeriesStack = () => {
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SelectionSeries"
      >
      <Screen name="SelectionSeries" component={SelectionSeries} />

      <Screen name="SeriesDetail" component={SeriesDetail} />
    </Navigator>
  );
};

export default SeriesStack;
