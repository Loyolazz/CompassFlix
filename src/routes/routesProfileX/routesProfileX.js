import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SeriesFavorites from '../../screens/ProfileX/subScreenProfile/SeriesFavorites/index';
import MoviesFavorites from '../../screens/ProfileX/subScreenProfile/MoviesFavorites/index'
import MoviesEvaluation from '../../screens/ProfileX/subScreenProfile/MoviesEvaluation';
import SeriesEvaluation from '../../screens/ProfileX/subScreenProfile/SeriesEvaluation';
import SeeMovieList from '../../screens/seeMovieList';
import MovieList from '../../screens/movieLists/movieList';
import ProfileX from '../../screens/ProfileX';

const Stack = createStackNavigator();

export default function RoutesProfile() {
  return (

    <Stack.Navigator initialRouteName='ProfileX'>
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='ProfileX'
        component={ProfileX}
      />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='SeriesFavorites'
        component={SeriesFavorites}
      />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='MoviesFavorites'
        component={MoviesFavorites}
      />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='MoviesEvaluation'
        component={MoviesEvaluation}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='SeriesEvaluation'
        component={SeriesEvaluation}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='SeeMovieList'
        component={SeeMovieList}
      />
       <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name='MovieList'
        component={MovieList}
      />

    </Stack.Navigator>
  );
}