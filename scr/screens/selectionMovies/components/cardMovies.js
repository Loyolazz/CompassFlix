import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export function CardMovies({source, text, starIcon}) {
  return (
    <View style={styles.cardMovies}>
      <TouchableOpacity>
        <Image style={styles.image} source={source} />
      </TouchableOpacity>
      <View style={styles.containerStar}>
        <Image style={styles.star} source={starIcon}/>
        <Text style={styles.nota}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardMovies: {
    flexDirection: 'column',
    marginTop: 16,
    margin:10,
    height: 120,
    borderRadius: 15,
    alignItems:'center'
  },
  containerStar: {
    marginTop: 3,
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
  },
  image: {
    height: 100,
  },
  nota: {
    color: '#FFF',
    fontSize: 10, 
    marginLeft:6
    
  },
  star: {
    height:10,
    width:10,
   
  }
});
