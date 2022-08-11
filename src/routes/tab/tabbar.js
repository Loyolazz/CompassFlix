import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

import { SelectionMovies } from "../../screens/selectionMovies/selectionMovies";
import iconHome from '../../assets/iconHome.png'

const Tab = createBottomTabNavigator();

const TabBottomRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName="SelectionMovies"
            screenOptions={{
                headerShown: false, tabBarShowLabel: false, tabBarInactiveTintColor: '#454545', tabBarStyle: { height: 50, backgroundColor: '#454545'  }
            }} >

            <Tab.Screen name="SelectionMovies" component={SelectionMovies}
                options={{
                    tabBarIcon: ({ color }) => (

                        <View style={
                            {
                                paddingHorizontal: 5,
                                paddingVertical: 5, borderRadius: 80, color,
                            }
                        }>
                            <Image source={iconHome} />
                            
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default TabBottomRoutes