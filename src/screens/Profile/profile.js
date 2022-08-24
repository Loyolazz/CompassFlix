import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styleProfile';
import photUser from '../../assets/imgUser/perfil_photo.png';
import HeaderProfile from '../../Components/ProfileComp/header/headerProfile';
import MoviesList from '../../Components/ProfileComp/MoviesList/moviesList';
import SeriesList from '../../Components/ProfileComp/SerieList/serieList';
import { Context } from '../../context'
import { getAccount } from '../../services/api';
import Api from '../../services/api';
export default function Profile({ navigation }) {
  const [dataUser, setDataUser] = useState('')
  const [evaluationMovies, setEvaluationMovies] = useState([])
  const [evaluationSeries, setEvaluationSeries] = useState([])
  const [avatar, setAvatar] = useState('')
  const apikey = 'ecd878f5eb6f5ca388735c699adaff80';
  const [colorBtn, setColorBtn] = useState({
    moviesButton: "#9C4A8B",
    seriesButton: "#474A51"
  });
  const MoviesListDeafult = (
    <MoviesList
      nameUser={dataUser.name}
      onPressDetails={() => navigation.navigate('MoviesDetail')}
      onPressFavorite={() => navigation.navigate('MoviesFavorites')}
      onPressEvaluation={() => navigation.navigate('EvaluationMovies')}
    />
  );
  const SeriesListDeafult = (
    <SeriesList
      nameUser={dataUser.name}
      onPressFavorite={() => navigation.navigate('SeriesFavorites')}
      onPressEvaluation={() => navigation.navigate('EvaluationSeries')}
    />
  );
  const [listView, setListView] = useState(MoviesListDeafult);

  const { sessionId } = useContext(Context)
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);

  useEffect(() => {
    const EvaluationMovies = async () => {
      const response = await Api.get(`/account/${dataUser}/rated/movies?api_key=${apikey}&session_id=${sessionId}`)
      setEvaluationMovies(response.data.total_results);
    };
    EvaluationMovies();
  }, [dataUser, apikey, sessionId])

  useEffect(() => {
    const EvaluationSeries = async () => {
      const response = await Api.get(`/account/${dataUser}/rated/tv?api_key=${apikey}&session_id=${sessionId}`)
      setEvaluationSeries(response.data.total_results);
    };
    EvaluationSeries();
  }, [dataUser, apikey, sessionId])

  function MoviesListPress() {
    setListView(MoviesListDeafult);
    setColorBtn({ moviesButton: "#9C4A8B", seriesButton: "#474A51" })
  }
  function SeriesListPress() {
    setListView(SeriesListDeafult);
    setColorBtn({ moviesButton: "#474A51", seriesButton: "#9C4A8B" })
  }
  const totalEvaluationNumber = evaluationSeries + evaluationMovies
  return (
    <View style={styles.container}>
      <HeaderProfile
        nameUser={dataUser.name}
        textEvaluation={'Avaliações'}
        numberEvaluation={totalEvaluationNumber}
        photoUser={`http://image.tmdb.org/t/p/original/${dataUser?.avatar?.tmdb?.avatar_path}`}
        LogOut={() => navigation.navigate('Login')}
      />

      <View style={styles.containerFavoritesAndEvaluation}>
        <View style={styles.containerIcons}>
          <View style={styles.containerIconPopcorn}>
            <TouchableOpacity onPress={MoviesListPress}>
              <Icon
                name="popcorn"
                size={34}
                color={colorBtn.moviesButton}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerIconPlay}>
            <TouchableOpacity onPress={SeriesListPress}>
              <Icon
                name="movie-play"
                size={34}
                color={colorBtn.seriesButton} />
            </TouchableOpacity>
          </View>
        </View>
        <View>

          <Text style={{ color: '#fff' }}>{evaluationMovies.total_results}</Text>
          {listView}

        </View>

      </View>
    </View>
  );
}
