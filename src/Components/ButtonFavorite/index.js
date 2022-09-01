import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './style';

const ButtonFavorite = ({onPress, favorite}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.buttonRight}
      onPress={onPress}>
      {favorite ? (
        <Image source={require('../../assets/starFocused.png')} />
      ) : (
        <Image source={require('../../assets/starNotFocused.png')} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonFavorite;