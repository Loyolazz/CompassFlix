import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
export  function ViewElenco({profile, name, character}){

    return(
        
           <View style={styles.containerElenco}>
          <View style={styles.viewPhoto}>
            <Image style={styles.stylePhoto} source={{ uri:`https://image.tmdb.org/t/p/w342/${profile}`}} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.styleTextName}>{name}</Text>
            <Text stylFe={styles.styleTextCharcter}>{character}</Text>
          </View>

        </View>

       
    )
}