import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../../screens/login/login'
import TabBottomRoutes from '../tab/tabbar'
import { SelectionMovies } from "../../screens/selectionMovies/selectionMovies";
import MoviesDetail from '../../screens/moviesDetail/moviesDetail'
const { Navigator, Screen } = createNativeStackNavigator()

const Stack = () => {
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Screen name='Login' component={Login} />
            <Screen name='selectionMovies' component={SelectionMovies} />
     
            <Screen name='Tab' component={MoviesDetail} />
        </Navigator>
    )
}

export default Stack
