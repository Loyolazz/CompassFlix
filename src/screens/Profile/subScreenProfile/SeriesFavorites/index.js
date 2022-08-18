import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
export default function SeriesFavorites({navigation}) {
 return (
  <View style={styles.container}>
  <View style={{ marginTop: 20 }}>
    <BtnGoBack onPress={() => navigation.navigate('Profile')} />
  </View>
  <View style={styles.viewText}>
    <Text style={styles.title}>Series favoritos de John!</Text>
  </View>
</View>
  );
}