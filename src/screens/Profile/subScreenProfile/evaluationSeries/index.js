import React from 'react';
import { View, Text} from 'react-native';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
import styles from './styles';
export default function EvaluationSeries({navigation}) {
 return (
  <View style={styles.container}>
  <View style={{ marginTop: 20 }}>
    <BtnGoBack onPress={() => navigation.navigate('Profile')} />
  </View>
  <View style={styles.viewText}>
    <Text style={styles.title}>Avaliações de series recentes de John!</Text>
  </View>
</View>
  );
}