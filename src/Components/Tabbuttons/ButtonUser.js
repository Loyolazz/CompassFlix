import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ButtonUser({color, focused}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#E9A6A6' : '#454545'},
      ]}>
      <Icon name={'user-o'} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 39,
      height: 39,
      padding: 8,
      borderRadius: 80,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 24,
    },
  });
  