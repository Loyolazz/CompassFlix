import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Trash from 'react-native-vector-icons/EvilIcons';
import styles from './styles'

export default function seeMovieListComp({nameList, description, qtdFilms,deletelListPress, navigation,pressCard}) {
 
    return (
   
        <View style={styles.viewCardList}>
                    <TouchableOpacity onPress={pressCard} style={styles.styleCard }>
                        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>{nameList}</Text>
                        <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}>{description}</Text>
                        <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}>{qtdFilms} Filmes</Text>
                    </TouchableOpacity>

                    <View style={styles.viewTrash}>

                        <TouchableOpacity onPress={deletelListPress}>
                            <Trash name='trash' size={34} color={'#EC2626'} />
                        </TouchableOpacity>

                    </View>


                </View>


  );
}