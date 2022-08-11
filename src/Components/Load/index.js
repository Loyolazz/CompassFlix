import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './style';

const Load = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={50} color="#E9A6A6" />
    </View>
  );
};

export default Load;