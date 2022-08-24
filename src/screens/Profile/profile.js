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
import star_red from '../../assets/star_red.png'
export default function Profile({ navigation }) {
  
  const [evaluationMovies, setEvaluationMovies] = useState([])
  const [evaluationSeries, setEvaluationSeries] = useState([])
  const { sessionId } = useContext(Context)
  const apikey = 'ecd878f5eb6f5ca388735c699adaff80';
  const [idUser, setIdUser] = useState([])
  const [idItem, setIdItem] = useState(null)
  const [moviesListFavorite, setMovieListFavorite] = useState([])
  const [moviesListFavoriteEvaluation, setMovieListFavoriteEvaluation] = useState([])
  const [seriesListFavorite, setSeriesListFavorite] = useState([])
  const [colorBtn, setColorBtn] = useState({
    moviesButton: "#9C4A8B",
    seriesButton: "#474A51"
  });
  useEffect(() => {
    const getAccountId = async () => {
      const response = await getAccount(sessionId);
      setIdUser(response.data.results)
      console.log(response.data.id)
    };
    getAccountId();
  }, [sessionId]);
  useEffect(() => {
    const init = async () => {
      const response = await Api.get(`/account/${idUser}/favorite/tv?api_key=${apikey}&session_id=${sessionId}`)
      setSeriesListFavorite(response.data.results);
    };
    init();
  }, [idUser, apikey, sessionId])
  useEffect(() => {
    const getResponseIdUser = async () => {
      const response = await getAccount(sessionId);
      setIdUser(response.data.id)
    };
    getResponseIdUser();
  }, [sessionId]);
  useEffect(() => {
    const init = async () => {
      const response = await Api.get(`/account/${idUser}/favorite/movies?api_key=${apikey}&session_id=${sessionId}`)
      setMovieListFavorite(response.data.results);
    };
    init();
  }, [idUser, apikey, sessionId])
  useEffect(() => {
    const EvaluationMovies = async () => {
      const response = await Api.get(`/account/${idUser}/rated/movies?api_key=${apikey}&session_id=${sessionId}`)
      setMovieListFavoriteEvaluation(response.data.results);

    };
    EvaluationMovies();
  }, [idUser, apikey, sessionId])
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
  const DATA2 = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },

  ]
  const totalEvaluationNumber = evaluationSeries + evaluationMovies
  const [dataUser, setDataUser] = useState('username')
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);
  const  MoviesListDeafult = (
   
    <View style={styles.headerFavorites}>

      <View style={styles.viewTextFavorites}>
        <Text style={styles.textFavorites}>Filmes favoritos de {dataUser.name}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MoviesFavorites')}>
          <Text style={styles.textViewAll}>Ver tudo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewListFavorites}>
        {moviesListFavorite.map((item, i) => i < 4 ?
          <TouchableOpacity key={i} onPress={() => {
            setIdItem(item.id),
              navigation.navigate('MoviesDetail', { item });
          }}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.styleItem} />
          </TouchableOpacity> : null)
        }
      </View>

      <View style={styles.headerEvaluation}>

        <View style={styles.viewTextEvaluation}>
          <Text style={styles.textEvaluation}>Avaliações de filmes recentes de {dataUser.name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EvaluationMovies')}>
            <Text style={styles.textViewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewListEvaluation}>
          {moviesListFavoriteEvaluation.map((item, i) => i < 5 ?
            <TouchableOpacity key={i} onPress={() => {
              setIdItem(item.id),
                navigation.navigate('MoviesDetail', { item });
            }}>

              <View >
                <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.styleItem} />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image source={star_red} style={{ width: 10, height: 10, marginRight: 8 }} />
                <Text style={{ color: "#fff", fontSize: 13 }}>{item.vote_average?.toFixed(1)}/10</Text>
              </View>

            </TouchableOpacity>
            : null)
          }
        </View>
      </View>
    </View>

  );
  const SeriesListDeafult = (
    <View>
      <View style={styles.headerFavorites}>
        <View style={styles.viewTextFavorites}>
          <Text style={styles.textFavorites}>Séries favoritas de {dataUser.name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SeriesFavorites')}>
            <Text style={styles.textViewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewListFavorites}>
          {seriesListFavorite.map((item, i) => i < 4 ?
            <TouchableOpacity key={i} style={styles.styleItem}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.styleItem} />
            </TouchableOpacity> : null)
          }
        </View>

      </View>
      <View style={styles.headerEvaluation}>
        <View style={styles.viewTextEvaluation}>
          <Text style={styles.textEvaluation}>Avaliações de séries recentes de {dataUser.name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EvaluationSeries')}>
            <Text style={styles.textViewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewListEvaluation}>
          {

            DATA2.map((item, i) => i < 5 ?
              <TouchableOpacity key={i} style={styles.styleItem}>
                <Text>{item.id}</Text>
              </TouchableOpacity> : null)
          }
        </View>
      </View>
    </View>

  );
  const [listView, setListView] = useState(MoviesListDeafult);
  
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
          <View>{listView}</View>


        </View>

      </View>
    </View>
  );
}
