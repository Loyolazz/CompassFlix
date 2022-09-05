import React from 'react';
import star from '../../../assets/star_red.png'
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './stylesEvaluation'
export default function SelectedItemEvaluation({ onPress, uri, vote }) {
  return (
    <View style={{flex:1,  justifyContent:'center', alignItems:'center', width:'100%'}}>
      <TouchableOpacity
        onPress={ onPress }
      >
        <Image
          style={styles.listMidiaFavorites}
          source={{ uri }}
        />
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
          <Image source={star} style={{ width: 13, height: 13, marginLeft: 5 }} />
          <Text style={{ color: '#fff', marginLeft: 8 }}>{vote}</Text>
        </View>

      </TouchableOpacity>


    </View>);
}