import React from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import styles from './stylesEvaluation';

export default function SeeItAllEvaluation({nameUser, onPress, midia}) {
 
 return (
    <>
    <Text style={styles.textInfo}>
    Avaliações recentes de {midia} de {nameUser}
    </Text>
    <TouchableWithoutFeedback
      onPress={onPress}>
      <Text style={styles.textVerAll}>Ver Tudo</Text>
    </TouchableWithoutFeedback>
  </>
  );
}