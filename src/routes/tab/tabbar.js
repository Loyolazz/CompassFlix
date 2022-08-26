import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileX from '../../screens/ProfileX';
import {SelectionSeries} from '../../screens/selectionSeries/selectionSeleries';
import RoutesPrifile from '../routesProfile/routesProfile'
import {SelectionMovies} from '../../screens/selectionMovies/selectionMovies';
import iconMovies from '../../assets/iconsTabBar/iconMovies.png';
import iconMovieFocused from '../../assets/iconsTabBar/iconMovieFocused.png';

import ButtonSeries from '../../Components/Tabbuttons/ButtonSeries';
import ButtonUser from '../../Components/Tabbuttons/ButtonUser';

const Tab = createBottomTabNavigator();

const TabBottomRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="SelectionMovies"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#454545',
        tabBarStyle: {height: 50, backgroundColor: '#454545'},
      }}>
      <Tab.Screen
        name="SelectionSeries"
        component={SelectionSeries}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonSeries focused={focused} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="SelectionMovies"
        component={SelectionMovies}
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
        name="ProfileX"
        component={ProfileX}
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
