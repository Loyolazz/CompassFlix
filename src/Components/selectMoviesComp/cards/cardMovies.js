import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, BackHandler} from 'react-native';
import star from '../../../assets/star_red.png'

const CardMovies = ({text, poster_path, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={{ justifyContent:'space-between', 
        alignItems:'center', 
        flex:1}}>
        <Image
          style={styles.image}
          source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
        />
      </TouchableOpacity>
      <View style={styles.containerRow}>
        <Image source={star} style={styles.star} />
        <Text style={styles.text}>{text}/10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

     justifyContent:'center',
     //backgroundColor:'grey',
     paddingHorizontal:10,
    
  },
  image: {
    width: 76,
    height: 95,
    borderRadius: 10,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 28,
  },
  text: {
    fontSize: 10,
    color: '#fff',
    marginLeft: 4,
  },
  star: {
    width: 10,
    height: 10,
  },
});

export default CardMovies;
