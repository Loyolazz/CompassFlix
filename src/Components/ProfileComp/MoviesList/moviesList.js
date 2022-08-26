import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {getAccount, getFavoriteSeries, apiKey} from '../../../services/api';
import {Context} from '../../../context';
import Api from '../../../services/api';
import star_red from '../../../assets/star_red.png';

export default function MoviesList({
  navigation,
  onPressFavorite,
  onPressEvaluation,
  nameUser,
  onPressDetails,
}) {
  const navigate = useNavigation();
  const [idUser, setIdUser] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [moviesListFavorite, setMovieListFavorite] = useState([]);
  const [moviesListFavoriteEvaluation, setMovieListFavoriteEvaluation] =
    useState([]);

  const {sessionId} = useContext(Context);

  const [dataUser, setDataUser] = useState('username');

  useEffect(() => {
    const getResponseIdUser = async () => {
      const response = await getAccount(sessionId);
      setIdUser(response.data.id);
      setDataUser(response.data);
    };

    getResponseIdUser();
  }, [sessionId]);

  useEffect(() => {
    const init = async () => {
      const response = await Api.get(
        `/account/${idUser}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}`,
      );
      setMovieListFavorite(response.data.results);
    };
    init();
  }, [idUser, apiKey, sessionId]);

  useEffect(() => {
    const EvaluationMovies = async () => {
      const response = await Api.get(
        `/account/${idUser}/rated/movies?api_key=${apiKey}&session_id=${sessionId}`,
      );
      setMovieListFavoriteEvaluation(response.data.results);
    };
    EvaluationMovies();
  }, [idUser, apiKey, sessionId]);

  const idMovie = `${moviesListFavorite.id}`;
  return (
    <View style={{width: '100%'}}>
      <View style={styles.headerFavorites}>
        <View style={styles.viewTextFavorites}>
          <Text style={styles.textFavorites}>
            Filmes favoritos de {dataUser.name}
          </Text>
          <TouchableOpacity onPress={onPressFavorite}>
            <Text style={styles.textViewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewListFavorites}>
          {moviesListFavorite.map((item, i) =>
            i < 4 ? (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setIdItem(item.id), navigate.navigate('MoviesDetail', {item});
                }}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                  }}
                  style={styles.styleItem}
                />
              </TouchableOpacity>
            ) : null,
          )}
        </View>
      </View>

      <View style={styles.headerEvaluation}>
        <View style={styles.viewTextEvaluation}>
          <Text style={styles.textEvaluation}>
            Avaliações de filmes recentes de {dataUser.name}
          </Text>
          <TouchableOpacity onPress={onPressEvaluation}>
            <Text style={styles.textViewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewListEvaluation}>
          {moviesListFavoriteEvaluation.map((item, i) =>
            i < 5 ? (
              <View key={i}>
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setIdItem(item.id),
                      navigate.navigate('MoviesDetail', {item});
                  }}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                    }}
                    style={styles.styleItem}
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
                    style={{width: 10, height: 10, marginRight: 8}}
                  />
                  <Text style={{color: '#fff', fontSize: 13}}>
                    {item.vote_average?.toFixed(1)}/10
                  </Text>
                </View>
              </View>
            ) : null,
          )}
        </View>
      </View>
    </View>
  );
}
