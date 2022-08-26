import React, {useState, useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import ModalExitAccount from '../../Components/ModalExitAccount';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from '../../context';
import {
  getAccount,
  EvaluationSeries,
  getMoviesFavorites,
  getPostMovies,
} from '../../services/api';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

export default function ProfileX({navigation}) {
  const [modalVisibleExit, setVisibleModal] = useState(false);
  const [dataUser, setDataUser] = useState('username');
  const [evaluationSeries, setEvaluationSeries] = useState([]);
  const [evaluationMovies, setEvaluationMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoriteSeries, setFavoriteSeries] = useState([]);
  const [movieButtonFocused, setMovieButtonFocused] = useState(true);
  const [movieRaring, setMovieRating] = useState(true);

  const {sessionId} = useContext(Context);
  const totalEvaluationNumber =
    evaluationSeries.total_results + evaluationMovies.total_results;

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);

  useEffect(() => {
    const getEvaluationSeries = async () => {
      const response = await EvaluationSeries(dataUser, 'tv', sessionId);
      setEvaluationSeries(response.data);
    };

    const getEvaluationMovies = async () => {
      const response = await EvaluationSeries(dataUser, 'movies', sessionId);
      setEvaluationMovies(response.data);
    };

    getEvaluationSeries();
    getEvaluationMovies();
  }, [dataUser, sessionId]);

  useEffect(() => {
    const getResponseMoviesFavorites = async () => {
      const response = await getMoviesFavorites(dataUser, 'movies', sessionId);
      setFavoriteMovies(response.data);
    };

    const getResponseSeriesFavorites = async () => {
      const response = await getMoviesFavorites(dataUser, 'tv', sessionId);
      setFavoriteSeries(response.data);
    };

    getResponseMoviesFavorites();
    getResponseSeriesFavorites();
  }, [dataUser, sessionId]);

  useEffect(() => {
    const getResponseMoviesFavoritesRating = async () => {
      const response = await getPostMovies(dataUser, 'movies', sessionId);
      setMovieRating(response.data);
    };

    getResponseMoviesFavoritesRating();
  }, [dataUser, sessionId]);

  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.replace('Login');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonExit}
        onPress={() => setVisibleModal(true)}>
        <Icon name="exit-outline" size={15} color="#000" />
        <Text style={styles.textExit}>Sair</Text>
      </TouchableOpacity>

      <ModalExitAccount
        modalExit={modalVisibleExit}
        logout={Logout}
        onPress={() => setVisibleModal(false)}
      />

      {dataUser.avatar?.avatar_path ? (
        <View style={styles.containerPhotoUser}>
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/original/${dataUser?.avatar?.tmdb?.avatar_path}`,
            }}
            style={styles.photoUser}
          />
        </View>
      ) : (
        <Icon name="person-circle" color="rgba(255,255,255,0.4)" size={78} />
      )}

      <Text style={styles.nameUser}>{dataUser?.name}</Text>

      <View style={styles.containerTotalResults}>
        {evaluationSeries.total_results && evaluationMovies.total_results ? (
          <>
            <Text style={styles.totalAvaluation}>{totalEvaluationNumber}</Text>

            <Text style={styles.textAvaliacao}>Avaliações</Text>
          </>
        ) : (
          <ActivityIndicator size="large" color="#E9A6A6" />
        )}
      </View>

      <View style={styles.containerButtonSandM}>
        <View style={styles.borderButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              setMovieButtonFocused(true);
            }}>
            {movieButtonFocused ? (
              <Image
                style={styles.ButtonMidia}
                source={require('../../assets/buttonMovie.png')}
              />
            ) : (
              <Image
                style={styles.ButtonMidia}
                source={require('../../assets/!buttonMovie.png')}
              />
            )}
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.borderButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              setMovieButtonFocused(false);
            }}>
            {!movieButtonFocused ? (
              <Image
                style={styles.ButtonMidia}
                source={require('../../assets/buttonSeries.png')}
              />
            ) : (
              <Image
                style={styles.ButtonMidia}
                source={require('../../assets/!buttonSeries.png')}
              />
            )}
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.containerMain}>
        {movieButtonFocused ? (
          <>
            <Text style={styles.textInfo}>
              Filmes favoritos de {dataUser.name}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('MoviesFavorites');
              }}>
              <Text style={styles.textVerAll}>Ver Tudo</Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={styles.textInfo}>
              Séries favoritos de {dataUser.name}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SeriesFavorites');
              }}>
              <Text style={styles.textVerAll}>Ver Tudo</Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>

      <View style={styles.containerMovieFavorites}>
        {favoriteMovies?.results && favoriteSeries?.results ? (
          <FlatList
            data={
              movieButtonFocused
                ? favoriteMovies?.results?.slice(0, 4)
                : favoriteSeries?.results?.slice(0, 4)
            }
            horizontal={true}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Image
                style={styles.listMidiaFavorites}
                source={{
                  uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}`,
                }}
              />
            )}
          />
        ) : (
          <ActivityIndicator size="large" color="#E9A6A6" />
        )}
      </View>

      <View style={styles.containerRow}>
        <View style={styles.containerMain}>
          {movieButtonFocused ? (
            <>
              <Text style={styles.textInfo}>
                Avaliações recentes de {dataUser.name}
              </Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Text style={styles.textVerAll}>Ver Tudo</Text>
              </TouchableWithoutFeedback>
            </>
          ) : (
            <>
              <Text style={styles.textInfo}>
                Avaliações de séries recentes de {dataUser.name}
              </Text>

              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('');
                }}>
                <Text style={styles.textVerAll}>Ver Tudo</Text>
              </TouchableWithoutFeedback>
            </>
          )}
        </View>
      </View>
      
    </View>
    
  );
}
