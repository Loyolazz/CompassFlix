import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';

export default function EvaluationMovies({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <BtnGoBack onPress={() => navigation.navigate('Profile')} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.title}>Avaliações de filmes recentes de John!</Text>
      </View>
    </View>
  );
}