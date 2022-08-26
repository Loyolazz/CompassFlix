import React, {useState, useContext, useEffect} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styleProfile';

import HeaderProfile from '../../Components/ProfileComp/header/headerProfile';
import MoviesList from '../../Components/ProfileComp/MoviesList/moviesList';
import SeriesList from '../../Components/ProfileComp/SerieList/serieList';
import {Context} from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAccount} from '../../services/api';
import Api from '../../services/api';
import star_red from '../../assets/star_red.png';
export default function Profile({navigation}) {
  const [evaluationMovies, setEvaluationMovies] = useState([]);
  const [evaluationSeries, setEvaluationSeries] = useState([]);
  const {sessionId} = useContext(Context);
  const apikey = 'ecd878f5eb6f5ca388735c699adaff80';
  const [idUser, setIdUser] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [moviesListFavorite, setMovieListFavorite] = useState([]);
  const [moviesListFavoriteEvaluation, setMovieListFavoriteEvaluation] =
    useState([]);
  const [seriesListFavorite, setSeriesListFavorite] = useState([]);
  const [colorBtn, setColorBtn] = useState({
    moviesButton: '#9C4A8B',
    seriesButton: '#474A51',
  });
  const [dataUser, setDataUser] = useState('username');

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);
  /////////////////////////
  useEffect(() => {
    const getAccountId = async () => {
      const response = await getAccount(sessionId);
      setIdUser(response.data.results);
    };
    getAccountId();
  }, [sessionId]);
  /////////////////////////
  useEffect(() => {
    const init = async () => {
      const response = await Api.get(
        `/account/${idUser}/favorite/tv?api_key=${apikey}&session_id=${sessionId}`,
      );
      setSeriesListFavorite(response.data.results);
    };
    init();
  }, [idUser, apikey, sessionId]);
  //////////////////
  useEffect(() => {
    const getResponseIdUser = async () => {
      const response = await getAccount(sessionId);
      setIdUser(response.data.id);
    };
    getResponseIdUser();
  }, [sessionId]);
  ////////////////////////
  useEffect(() => {
    const init = async () => {
      const response = await Api.get(
        `/account/${idUser}/favorite/movies?api_key=${apikey}&session_id=${sessionId}`,
      );
      setMovieListFavorite(response.data.results);
    };
    init();
  }, [idUser, sessionId]);
  ////////////////////////
  useEffect(() => {
    const EvaluationMovies = async () => {
      const response = await Api.get(
        `/account/${idUser}/rated/movies?api_key=${apikey}&session_id=${sessionId}`,
      );
      setMovieListFavoriteEvaluation(response.data.results);
    };
    EvaluationMovies();
  }, [idUser, apikey, sessionId]);
  /////////////////////////
  useEffect(() => {
    const EvaluationMovies = async () => {
      const response = await Api.get(
        `/account/${dataUser}/rated/movies?api_key=${apikey}&session_id=${sessionId}`,
      );
      setEvaluationMovies(response.data.total_results);
    };
    EvaluationMovies();
  }, [dataUser, apikey, sessionId]);
  ////////////////////////
  useEffect(() => {
    const EvaluationSeries = async () => {
      const response = await Api.get(
        `/account/${dataUser}/rated/tv?api_key=${apikey}&session_id=${sessionId}`,
      );
      setEvaluationSeries(response.data.total_results);
    };
    EvaluationSeries();
  }, [dataUser, apikey, sessionId]);

  const DATA2 = [{id: '0'}, {id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}];
  const totalEvaluationNumber = evaluationSeries + evaluationMovies;

  const MoviesListDeafult = (
    <MoviesList
      onPressFavorite={() => navigation.navigate('MoviesFavorites')}
      onPressEvaluation={() => navigation.navigate('EvaluationMovies')}
    />
  );
  const SeriesListDeafult = (
    <SeriesList
      onPressFavorite={() => navigation.navigate('SeriesFavorites')}
      onPressEvaluation={() => navigation.navigate('EvaluationSeries')}
    />
  );
  const [listView, setListView] = useState(<View>{MoviesListDeafult}</View>);
  function MoviesListPress() {
    setListView(MoviesListDeafult);
    setColorBtn({moviesButton: '#9C4A8B', seriesButton: '#474A51'});
  }
  function SeriesListPress() {
    setListView(SeriesListDeafult);
    setColorBtn({moviesButton: '#474A51', seriesButton: '#9C4A8B'});
  }
  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <HeaderProfile
        nameUser={dataUser.name}
        textEvaluation={'Avaliações'}
        numberEvaluation={totalEvaluationNumber}
        photoUser={`http://image.tmdb.org/t/p/original/${dataUser?.avatar?.tmdb?.avatar_path}`}
        LogOut={Logout}
      />

      <View style={styles.containerFavoritesAndEvaluation}>
        <View style={styles.containerIcons}>
          <View style={styles.containerIconPopcorn}>
            <TouchableOpacity onPress={MoviesListPress}>
              <Icon name="popcorn" size={34} color={colorBtn.moviesButton} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerIconPlay}>
            <TouchableOpacity onPress={SeriesListPress}>
              <Icon name="movie-play" size={34} color={colorBtn.seriesButton} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{color: '#fff'}}>{evaluationMovies.total_results}</Text>
          <View>{listView}</View>
        </View>
      </View>
    </View>
  );
}
