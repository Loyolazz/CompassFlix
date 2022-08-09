import React from "react";
import Cast from './DATA'
import styles from "./styles";
import { View, FlatList, Text, Image } from "react-native"


export default function Elenco({ name, character, img}) {
   

    return (
        <View style={styles.containerElenco}>
            <View style={{alignItems:'flex-start', justifyContent:'center'}}>
            <View style={styles.elencoView}>
                <Text style={styles.elencoText}>Elenco</Text>
                 
            </View>
            
            <View style={{ width: 30, height: 2, backgroundColor: '#9C4A8B', marginBottom:20, marginLeft:20 }}/>

           
            </View>
            <FlatList
                data={Cast}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) =>
                    <View style={styles.containerActors}>
                        <View style={styles.viewImg}>
                            
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#fff', fontSize:15, fontWeight:'bold'  }}>{item.name}</Text>
                            <Text style={{ color: '#fff', fontSize:8, lineHeight:10.86 }}>{item.character}</Text>
                        </View>

                    </View>}
            />
        </View>

    )
}
