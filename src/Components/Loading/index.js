import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function Loading(load) {
  if (!load) {
    return;
  }
  return <View > 
    <ActivityIndicator style={styles.loading} size={25} color="#E9A6A6" />
  </View>

}

const styles = StyleSheet.create({
  loading: {
    padding: 10
  },
});