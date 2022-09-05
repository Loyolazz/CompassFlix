import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login/login';
import TabBottomRoutes from '../tab/tabbar';
import SlapshLoadLogin from '../../Components/SplashLoadLogin/splashLoadLogin';
const {Navigator, Screen} = createNativeStackNavigator();

const Stack = () => {
  return (
    <Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Screen name="Splash" component={SlapshLoadLogin} />
      <Screen name="Login" component={Login} />
      <Screen name="TabBottomRoutes" component={TabBottomRoutes} />
    </Navigator>
  );
};

export default Stack;
