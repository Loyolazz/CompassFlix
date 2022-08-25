import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';

export default function ButtonFavorite({
  isFavorite,
  setDataFavorite,
  awaitFavorite,
  setIsFavorite,
  id,
  mediaType,
}) {
  return (
    <TouchableOpacity
      style={[styles.containerButtonStarOn]}
      onPress={() => {
        setIsFavorite(!isFavorite);
        setDataFavorite({
          media_type: mediaType,
          media_id: id,
          favorite: isFavorite,
        });
        awaitFavorite();
      }}>
      <AntDesign
        name="star"
        size={24}
        style={isFavorite && styles.buttonStar}
      />
    </TouchableOpacity>
  );
}
