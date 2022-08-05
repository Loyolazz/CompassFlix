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
    width:'100%',
    alignItems:'center',
    paddingHorizontal:10
  },
  containerStar: {
    marginTop: 3,
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  image: {
    borderRadius:15,
    height: 95,
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
