import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export function CardMovies({source, text}) {
  return (
    <View style={styles.cardMovies}>
      <TouchableOpacity>
        <Image style={styles.image} source={source} />
      </TouchableOpacity>
      <View style={styles.containerStar}>
        <Text style={styles.star}> ⭐ </Text>
        <Text style={styles.nota}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardMovies: {
    flexDirection: 'column',
    marginTop: 16,
    width: 88,
    height: 120,
    borderRadius: 15,
  },
  containerStar: {
    // marginTop: 5,
    flexDirection: 'row',
  },
  image: {
    height: 100,
  },
  nota: {
    color: '#FFF',
    fontSize: 12
  },
  star: {
    fontSize: 10,
    color: 'red',
  }
});
