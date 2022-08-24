import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
import { Context } from '../../../../context';
import { getAccount, apiKey } from '../../../../services/api';
import Api from '../../../../services/api';

export default function EvaluationMovies({ navigation }) {

  const [nameUser, setNameUser] = useState([])
  const [idUser, setIdUser] = useState([])
  const { sessionId } = useContext(Context)
  const [moviesListFavoriteEvaluation, setMovieListFavoriteEvaluation] = useState([])

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data.name);
      setIdUser(response.data.id)
    };
    getResponseAccount();
  }, []);

    useEffect(() => {
      const EvaluationMovies = async () => {
          const response = await Api.get(`/account/${idUser}/rated/movies?api_key=${apiKey}&session_id=${sessionId}`)
          setMovieListFavoriteEvaluation(response.data.results);
          console.log(response.data.results)
      };
      EvaluationMovies();
  }, [idUser, apiKey, sessionId])


  return (

    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <BtnGoBack onPress={() => navigation.navigate('Profile')} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.title}>Avaliações de filmes recentes de <Text style={{ color: '#E9A6A6' }}>{nameUser}</Text>!</Text>
        <Text style={styles.title}>{apiKey}</Text>
        <Text style={styles.title}>{idUser}</Text>
        <Text style={styles.title}>{sessionId}</Text>
      </View>

      <FlatList
        numColumns={4}
        data={moviesListFavoriteEvaluation}
        keyExtractor={item => String(item.id)}
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
              flexDirection: 'row',
              marginTop: 5,
              alignItems: 'center'
            }}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={{  width: 76,
              height: 95,
              borderRadius: 20,
              flexDirection: 'row',
              marginTop: 5,
              alignItems: 'center'}} />
              {/* <Text>{item.id}</Text> */}
            </View></View>


        }
      />
    </View>
  );
}