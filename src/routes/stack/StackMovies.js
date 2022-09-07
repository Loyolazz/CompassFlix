import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MoviesDetail from '../../screens/moviesDetail/moviesDetail';
import {SelectionMovies} from '../../screens/selectionMovies/selectionMovies';
const {Navigator, Screen} = createNativeStackNavigator();

const StackMovies = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="SelectionMovies" component={SelectionMovies} />
      <Screen name="MoviesDetail" component={MoviesDetail} />
    </Navigator>
  );
};

export default StackMovies;
