import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import star from '../../../assets/star_red.png'

export function CardMovies({ source, text, onpress }) {
  return (
    <View style={styles.cardMovies}>

    {/* <Image style={styles.image} source={{ uri: source }} /> */}

      <View style={styles.containerStar}>
        <Image style={styles.star} source={star} />
        <Text style={styles.nota}>10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  cardMovies: {
    flexDirection: 'column',
    marginTop: 16,
    width: '80%',
    justifyContent: 'flex-end'
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
