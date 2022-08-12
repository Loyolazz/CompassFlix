import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import star from '../img/star_red.png'

export default function CardMovies2({ poster_path, text, onPress }) {
    return (
        <View style={styles.cardMovies}>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor:'blue', height:120}}>
                <Image
                    style={styles.image}
                    source={{ uri: `http://image.tmdb.org/t/p/w185/${poster_path}` }}
                />
            </TouchableOpacity>


            <View style={styles.containerStar}>
                <Image style={styles.star} source={star} />
                <Text style={styles.nota}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    cardMovies: {
        flexDirection: 'column',
        marginTop: 16,
        width: '100%',
        justifyContent: 'flex-end',
        backgroundColor:'red',
    },
    containerStar: {
        marginTop: 3,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        //backgroundColor:'blue'

    },
    image: {
        borderRadius: 15,
        width: '100%',
        height: 95,
  
    },
    nota: {
        color: '#FFF',
        fontSize: 10,
        marginLeft: 6
    },
    star: {
        height: 10,
        width: 10,
    }
});
