import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../../screens/login/login'
import TabBottomRoutes from '../tab/tabbar'


const { Navigator, Screen } = createNativeStackNavigator()

const Stack = () => {
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Screen name='Login' component={Login} />
            <Screen name='Tab' component={TabBottomRoutes} />
        </Navigator>
    )
}

export default Stack
