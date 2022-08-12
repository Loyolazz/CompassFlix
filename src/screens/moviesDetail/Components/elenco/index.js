import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import * as Animatable from 'react-native-animatable';
export  function ViewElenco({profile, name, character}){

    return(
        
           <Animatable.View 
           animation='fadeInLeft'
           duration={900}
           style={styles.containerElenco}>
          <View style={styles.viewPhoto}>
            <Image style={styles.stylePhoto} source={{ uri:`https://image.tmdb.org/t/p/w342/${profile}`}} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.styleTextName}>{name}</Text>
            <Text stylFe={styles.styleTextCharcter}>{character}</Text>
          </View>

        </Animatable.View>

       
    )
}