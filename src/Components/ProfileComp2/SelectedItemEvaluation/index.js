import React from 'react';
import star from '../../../assets/star_red.png'
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './stylesEvaluation'
export default function SelectedItemEvaluation({ onPress, uri, vote }) {
  return (
    <>
      <TouchableOpacity
        onPress={ onPress }
      >
        <Image
          style={styles.listMidiaFavorites}
          source={{ uri }}
        />
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
          <Image source={star} style={{ width: 13, height: 13 }} />
          <Text style={{ color: '#fff', marginLeft: 5 }}>{vote}</Text>
        </View>

      </TouchableOpacity>


    </>);
}