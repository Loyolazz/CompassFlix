import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SeriesDetail from '../../screens/seriesDetail';
import { SelectionSeries } from '../../screens/selectionSeries/selectionSeleries';
const {Navigator, Screen} = createNativeStackNavigator();

const StackSeries = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="SelectionSeries" component={SelectionSeries} />
      <Screen name="SeriesDetail" component={SeriesDetail} />
    </Navigator>
  );
};

export default StackSeries;
