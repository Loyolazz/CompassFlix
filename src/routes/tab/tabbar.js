import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import ProfileX from '../../screens/ProfileX';
import {SelectionSeries} from '../../screens/selectionSeries/selectionSeleries';
//import RoutesPrifile from '../routesProfile/routesProfile'
import {SelectionMovies} from '../../screens/selectionMovies/selectionMovies';
import iconMovies from '../../assets/iconsTabBar/iconMovies.png';
import iconMovieFocused from '../../assets/iconsTabBar/iconMovieFocused.png';
import routesProfileX from '../routesProfileX/routesProfileX';
import ButtonSeries from '../../Components/Tabbuttons/ButtonSeries';
import ButtonUser from '../../Components/Tabbuttons/ButtonUser';

import MoviesStack from '../stack/MoviesStack';
import SeriesStack from '../stack/SeriesStack';


const Tab = createBottomTabNavigator();

const TabBottomRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="MoviesStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#454545',
        tabBarStyle: {height: 50, backgroundColor: '#454545'},
      }}>
      <Tab.Screen
        name="SeriesStack"
        component={SeriesStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonSeries focused={focused} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MoviesStack"
        component={MoviesStack}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <Image source={iconMovieFocused} />;
            } else {
              return <Image source={iconMovies} />;
            }
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={routesProfileX}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonUser focused={focused} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBottomRoutes;
