import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from './stack/stack';
import { Provider } from "../context";


export default function () {
    return (
        <Provider>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
        </Provider>
    )
}