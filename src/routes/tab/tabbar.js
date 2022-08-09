import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

import SelectionMovies from '../../screens/selectionMovies/selectionMoviess'

import moviesDetail from '../../screens/moviesDetail/moviesDetail'

const Placeholder = () => <View />

const Tab = createBottomTabNavigator();

const TabBottomRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName="Movies"
            screenOptions={{
                headerShown: false, tabBarShowLabel: false, tabBarInactiveTintColor: 'rgba(48, 79, 254, 0.1)',
                tabBarActiveTintColor: '#304FFE', tabBarStyle: { height: 70 }
            }} >

            <Tab.Screen name="Movies" component={moviesDetail}
                options={{
                    tabBarIcon: ({ color }) => (

                        <View style={
                            {
                                borderWidth: 1, paddingHorizontal: 5,
                                paddingVertical: 5, borderRadius: 80, backgroundColor: '#304FFE', borderColor: color,
                            }
                        }>
                            <Icon name="add" color={'white'} size={40} />
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default TabBottomRoutes