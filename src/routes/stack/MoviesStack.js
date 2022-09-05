import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SelectionMovies} from '../../screens/selectionMovies/selectionMovies';

import MoviesDetail from '../../screens/moviesDetail/moviesDetail';
const {Navigator, Screen} = createNativeStackNavigator();

const MoviesStack = () => {
  return (
    <Navigator
      initialRouteName="SelectionMovies"
      screenOptions={{headerShown: false}}>
      <Screen name="SelectionMovies" component={SelectionMovies} />
      <Screen name="MoviesDetail" component={MoviesDetail} />
    </Navigator>
  );
};

export default MoviesStack;
