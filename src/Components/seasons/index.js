import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { getTvShowSeason } from '../../services/api';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

export default function seasons({
  visible,
  onPress,
  id,
  index,
  seasonNumber,
  seasonSelected,
}) {
  const [seriesDetailsSeason, setSeriesDetailsSeason] = useState([]);

  useEffect(() => {
    if (visible) {
      const getSeason = async () => {
        const response = await getTvShowSeason(id, seasonNumber);
        setSeriesDetailsSeason(response.data.episodes);
      };
      getSeason();
    }
  }, [visible]);

  index++;

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            borderBottomColor:
              visible && index === seasonSelected ? '#E9A6A6' : '#BFBFBF',
          },
        ]}>
        <Text style={styles.numTemporada}>{`Temporada ${index}`}</Text>
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
          <Feather
            size={15}
            name={
              visible && index === seasonSelected
                ? 'chevron-up'
                : 'chevron-down'
            }
          />
        </TouchableOpacity>
      </View>
      {visible &&
        index === seasonSelected &&
        seriesDetailsSeason?.map(item => (
          <Animatable.View
            animation="slideInDown"
            duration={500}
            key={String(item.id)}
            style={styles.containerVisible}>
            <Text style={styles.textEp}>
              {`T${String(seasonSelected).padStart(2, '0')} | E${String(
                item.episode_number,
              ).padStart(2, '0')}`}
            </Text>
            <Text style={styles.textNumTemp}>
              {item.name ? item.name : `Episódio ${item.episode_number}`}
            </Text>
          </Animatable.View>
        ))}
    </View>
  );
}
