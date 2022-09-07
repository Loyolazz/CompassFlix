import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Context } from '../../../../context';
import styles from './styless';
import { getAccount, EvaluationSeries } from '../../../../services/api';
import star_red from '../../../../assets/star_red.png';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
import BlockIcon from 'react-native-vector-icons/MaterialIcons'

export default function SeriesEvaluation({ navigation }) {
  const [nameUser, setNameUser] = useState('');
  const [idUser, setIdUser] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [dataUser, setDataUser] = useState('username');
  const [seriesEvaluation, setSeriesEvaluation] = useState([]);
  const { sessionId } = useContext(Context);

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data.name);
      setIdUser(response.data.id);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);

  useEffect(() => {
    const getEvaluationSeries = async () => {
      const response = await EvaluationSeries(dataUser, 'tv', sessionId);
      setSeriesEvaluation(response.data);
    
    };
    
    getEvaluationMovies();
  }, [dataUser, sessionId]);


  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <BtnGoBack onPress={() => navigation.navigate('ProfileX')} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.title}>
          Avaliações de Séries recentes de <Text style={{ color: '#E9A6A6' }}>{nameUser}</Text>
          !
        </Text>
      </View>
      {seriesEvaluation.total_results === 0 ?
        <View style={{width:'100%',  alignItems:'center', justifyContent:'center'}}>
          <Text style={{ color: 'grey', fontSize:20, marginBottom:30, marginTop:10 }}>Sem avaliações recentes</Text>
        <BlockIcon name='tv-off' size={100} color={'grey'}/>
        </View> 
        :  
        <FlatList
        numColumns={4}
        data={seriesEvaluation.results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flex: 1,
              flexDirection: 'column',
              marginBottom: 20,
              paddingHorizontal: 10,
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIdItem(item.id), navigation.navigate('SeriesDetail', { item });
              }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                }}
                style={{
                  width: 76,
                  height: 95,
                  borderRadius: 20,
                  marginTop: 5,
                  alignItems: 'center',
                }}
              />
     
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={star_red}
                style={{ width: 10, height: 10, marginRight: 8 }}
              />
              <Text>
                {item.rating?.toFixed(0)}/10
              </Text>
            </View>
          </View>
        )}
      />}
    </View>
  );
}
