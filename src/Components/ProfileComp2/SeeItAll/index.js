
import React from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import styles from './styles';

export default function SeeItAll({nameUser, onPress, midia,letra}) {

 return (
    <>
    <Text style={styles.textInfo}>
      {midia} favorit{letra}s de {nameUser}
    </Text>
    <TouchableWithoutFeedback
      onPress={onPress}>
      <Text style={styles.textVerAll}>Ver Tudo</Text>
    </TouchableWithoutFeedback>
  </>
  );
}