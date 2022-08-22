import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
export default function SerieList({navigation, onPressFavorite, onPressEvaluation, nameUser}) {
 
    const DATA = [
        { id: 'a' },
        { id: 'b' },
        { id: 'c' },
        { id: 'd' },
       
    ]
    const DATA2 = [
        { id: '0' },
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
     
    ]
    return (
        <View style={{ width: '100%', }}>

            <View style={styles.headerFavorites}>
                <View style={styles.viewTextFavorites}>
                    <Text style={styles.textFavorites}>Séries favoritas de {nameUser}</Text>
                    <TouchableOpacity onPress={onPressFavorite}>
                        <Text style={styles.textViewAll}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewListFavorites}>
                    {DATA.map((item, i) => i < 4 ?
                        <TouchableOpacity key={i} style={styles.styleItem}>
                            <Text>{item.id}</Text>
                        </TouchableOpacity> : null)
                    }
                </View>

            </View>
            <View style={styles.headerEvaluation}>
                <View style={styles.viewTextEvaluation}>
                    <Text style={styles.textEvaluation}>Avaliações de séries recentes de {nameUser}</Text>
                    <TouchableOpacity onPress={onPressEvaluation}>
                        <Text style={styles.textViewAll}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewListEvaluation}>
                    {DATA2.map((item, i) => i < 5 ?
                        <TouchableOpacity key={i} style={styles.styleItem}>
                            <Text>{item.id}</Text>
                        </TouchableOpacity> : null)
                    }
                </View>

            </View>
        </View>
    );

}