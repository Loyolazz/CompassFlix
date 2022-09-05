import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from './stack/stack';
import { Provider } from "../context";
import MovieList from "../screens/movieLists/movieList";

export default function () {
    return (
        <Provider>
        <NavigationContainer>
            <MovieList/>
        </NavigationContainer>
        </Provider>
    )
}