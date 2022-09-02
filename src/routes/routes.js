import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from './stack/stack';
import { Provider } from "../context";
import MovieListDelet from "../screens/movieLists/movieListDelet/movieListDelet";

export default function () {
    return (
        <Provider>
        <NavigationContainer>
            <MovieListDelet/>
        </NavigationContainer>
        </Provider>
    )
}