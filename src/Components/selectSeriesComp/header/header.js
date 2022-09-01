import React from "react";
import { View, Text,Image } from "react-native";
import styles from "./styles";

export default function HeaderSeries ({nameUser,photoUser}) {
    return (
        <View style={styles.header}> 
       <View style={{width:'100%', alignItems:'flex-end'}}>
                 <Image source={{ uri: photoUser }} style={{ width: 50, height: 50,  borderRadius: 60 }}></Image>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>


                <View style={{ width: '100%', marginHorizontal: 20, alignItems: 'flex-start' }}>
                    <View style={{width:'100%', justifyContent:'space-between', flexDirection:'row'}}>

                        <View style={styles.containerRow}>
                            <Text style={styles.title}>Olá,</Text>
                            <Text style={styles.label}>{nameUser}</Text>
                            <Text style={styles.title}>!</Text>
                        </View>
                      
                    </View>
 

                </View>


            </View>
            <Text style={styles.description}>
                Reveja ou acompanhe os séries que você assistiu...
            </Text>
            <Text style={styles.popularSeries}>
                Séries populares este mês
            </Text>
        </View>
    )
}