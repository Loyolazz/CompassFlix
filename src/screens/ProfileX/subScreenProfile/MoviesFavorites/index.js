import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';

import {Context} from '../../../../context';
import styles from './styles copy';
import {getAccount, getMoviesFavorites} from '../../../../services/api';
import star_red from '../../../../assets/star_red.png';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
import BlockIcon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function   MoviesFavorites({navigation}) {
  const [nameUser, setNameUser] = useState('');
  const [idUser, setIdUser] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [dataUser, setDataUser] = useState('username');
  const [moviesSeries, setFavoriteMovies] = useState([]);
  const {sessionId} = useContext(Context);
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
   
    const getResponseSeriesFavorites = async () => {
      const response = await getMoviesFavorites(dataUser, 'movies', sessionId);
      setFavoriteMovies(response.data);

    };

    getResponseSeriesFavorites();
  }, [dataUser, sessionId]);

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <BtnGoBack onPress={() => navigation.navigate('ProfileX')} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.title}>
          Filmes favoritos de <Text style={{color: '#E9A6A6'}}>{nameUser}</Text>
          !
        </Text>
      </View>
      {moviesSeries.total_results === 0 ?
        <View style={styles.containerMoviesEmpty}>
          <Text style={styles.textEmptyMovies}>Sem Filmes Favoritos</Text>
        <BlockIcon name='movie-open-remove-outline' size={100} color={'grey'}/>
        </View> 
        :  
      <FlatList
        numColumns={4}
        data={moviesSeries.results}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={styles.containerCard}>
            <TouchableOpacity
              onPress={() => {
                setIdItem(item.id), navigation.navigate('MoviesDetail', {item});
              }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                }}
                style={styles.stylePoster}
              />
            </TouchableOpacity>
            <View
              style={styles.containerTextStar}>
              <Image
                source={star_red}
                style={styles.styleStar}
              />
              <Text style={styles.textNote}>
                {item.vote_average?.toFixed(1)}/10
              </Text>
            </View>
          </View>
        )}
      />}
    </View>
  );
}
