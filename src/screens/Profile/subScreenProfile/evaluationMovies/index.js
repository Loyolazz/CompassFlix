import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
import { Context } from '../../../../context';
import { getAccount } from '../../../../services/api';
export default function EvaluationMovies({ navigation }) {

  const DATA = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
    { id: '13' },
    { id: '14' },
    { id: '15' },
    { id: '16' },
    { id: '17' },

  ]
  const [nameUser, setNameUser] = useState('')
  const { sessionId } = useContext(Context)
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data.name);
      console.log(response.data.name)
    };
    getResponseAccount();
  }, [sessionId]);
  return (


    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <BtnGoBack onPress={() => navigation.navigate('Profile')} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.title}>Avaliações de filmes recentes de <Text style={{ color: '#E9A6A6' }}>{nameUser}</Text>!</Text>
      </View>

      <FlatList
        numColumns={4}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <View style={{
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flex: 1,
            flexDirection: 'column',
            marginBottom: 20,
            paddingHorizontal: 10,
            marginTop: 5,
          }}>
            <View style={{
              width: 76,
              height: 95,
              borderRadius: 20,
              backgroundColor: '#fff',
              flexDirection: 'row',
              marginTop: 5,
              alignItems: 'center'
            }}>
              <Text>{item.id}</Text>
            </View></View>


        }
      />
    </View>
  );
}