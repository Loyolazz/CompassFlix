import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export  function SinopseDetails({ titleSinopse, textSinopse }) {
    return (
        <View style={styles.viewSinpose}>
        
                <Text style={styles.sinposeTop}>
                {titleSinopse}
            </Text>
            <Text style={styles.sinposeBottom}>
                {textSinopse}
            </Text>
       
            
        </View>
    )
}
