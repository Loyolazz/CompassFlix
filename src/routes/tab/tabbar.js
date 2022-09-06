import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import ProfileX from '../../screens/ProfileX';
import {SelectionSeries} from '../../screens/selectionSeries/selectionSeleries';
//import RoutesPrifile from '../routesProfile/routesProfile'
import iconMovies from '../../assets/iconsTabBar/iconMovies.png';
import iconMovieFocused from '../../assets/iconsTabBar/iconMovieFocused.png';
import routesProfileX from '../routesProfileX/routesProfileX';
import ButtonSeries from '../../Components/Tabbuttons/ButtonSeries';
import ButtonUser from '../../Components/Tabbuttons/ButtonUser';

import StackMovies from '../stack/StackMovies';
import StackSeries from '../stack/StackSeries';

const Tab = createBottomTabNavigator();

const TabBottomRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackMovies"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#454545',
        tabBarStyle: {height: 50, backgroundColor: '#454545'},
      }}>
      <Tab.Screen
        name="StackSeries"
        component={StackSeries}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonSeries focused={focused} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="StackMovies"
        component={StackMovies}
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
