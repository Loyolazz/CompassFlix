import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function HeaderFilm({nameUser,photoUser}){
    return (
        <View style={styles.header}>
                 <View style={{flexDirection:'row'}}>
        
        <View style={styles.containerRow}>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.label}>{nameUser}</Text>
            <Text style={styles.title}>!</Text>
        </View>
        <View style={{ width:'40%',  marginHorizontal:20, alignItems:'flex-end', marginTop:-30}}>
            <Image  source={{uri:photoUser}}  style={{width:50, height:50, backgroundColor:'grey', borderRadius:60}}></Image>
        </View>
        
       </View>
            <Text style={styles.description}>
                Reveja ou acompanhe os filmes que você assistiu...
            </Text>
            <Text style={styles.popularMovies}>
                Filmes populares este mês
            </Text>
        </View>
    )
}
