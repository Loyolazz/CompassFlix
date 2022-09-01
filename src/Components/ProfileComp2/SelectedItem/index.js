import React from 'react';
import { TouchableOpacity,Image } from 'react-native';
import styles from './styles'
export default function SelectedItem({onPress,uri}) {
 return (
    <>
    <TouchableOpacity
    onPress={onPress}
  >
    <Image
      style={styles.listMidiaFavorites}
      source={
         {uri}
      }
    />
  </TouchableOpacity>
</>  );
}