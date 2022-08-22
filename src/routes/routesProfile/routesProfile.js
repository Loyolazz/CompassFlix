import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
import SeriesFavorites from '../../screens/Profile/subScreenProfile/SeriesFavorites/index';
import MoviesFavorites from '../../screens/Profile/subScreenProfile/MoviesFavorites/index';
import EvaluationSeries from '../../screens/Profile/subScreenProfile/evaluationSeries/index';
import EvaluationMovies from '../../screens/Profile/subScreenProfile/evaluationMovies/index'
import Profile from '../../screens/Profile/profile';
const Stack = createStackNavigator();
export default function RoutesProfile() {
  return (
 
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          name='Profile'
          component={Profile}
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
          name='EvaluationSeries'
          component={EvaluationSeries}
        />
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false
          }}
          name='EvaluationMovies'
          component={EvaluationMovies}
        />
      </Stack.Navigator>
 


  );
}