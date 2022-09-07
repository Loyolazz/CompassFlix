import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login/login';
import { SelectionMovies } from '../../screens/selectionMovies/selectionMovies';
import TabBottomRoutes from '../tab/tabbar';
import MoviesDetail from '../../screens/moviesDetail/moviesDetail';
import SeriesDetail from '../../screens/seriesDetail';
import SlapshLoadLogin from '../../Components/SplashLoadLogin/splashLoadLogin';
import MoviesDetail from '../../screens/moviesDetail/moviesDetail';
import ProfileX from '../../screens/ProfileX';

const {Navigator, Screen} = createNativeStackNavigator();
const Stack = () => {
  return (
    <Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
   <Screen name="Splash" component={SlapshLoadLogin} />
      <Screen name="Login" component={Login} />
      <Screen name="TabBottomRoutes" component={TabBottomRoutes} />
      <Screen name="SelectionMovies" component={SelectionMovies} />
      <Screen name="MoviesDetail" component={MoviesDetail} />
      <Screen name="SeriesDetail" component={SeriesDetail} />
      <Screen name="ProfileX" component={ProfileX} />
    </Navigator>
  );
};

export default Stack;