import React, {
  useState,
  useContext,
  useEffect
} from 'react';
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
import { Context } from '../../context';
import {
  getAccount,
  EvaluationSeries,
  getMoviesFavorites,
  getPostMovies,
  apiKey
} from '../../services/api';

import Icon from 'react-native-vector-icons/Ionicons';
import SeeItAll from '../../Components/ProfileComp2/SeeItAll';
import SelectedItem from '../../Components/ProfileComp2/SelectedItem';
import SeeItAllEvaluation from '../../Components/ProfileComp2/SeeItAllEvaluation';
import SelectedItemEvaluation from '../../Components/ProfileComp2/SelectedItemEvaluation';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';


export default function ProfileX({ navigation }) {

  const [modalVisibleExit, setVisibleModal] = useState(false);
  const [dataUser, setDataUser] = useState('username');
  const [evaluationSeries, setEvaluationSeries] = useState([]);
  const [evaluationMovies, setEvaluationMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoriteSeries, setFavoriteSeries] = useState([]);
  const [movieButtonFocused, setMovieButtonFocused] = useState(true);
  const [idItem, setIdItem] = useState(null);
  const { sessionId } = useContext(Context);


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
        title="Deseja mesmo sair?"
        modalExit={modalVisibleExit}
        logout={Logout}
        onPress={() => setVisibleModal(false)}
      />



      {dataUser?.avatar?.tmdb?.avatar_path ? (
        <View style={styles.containerPhotoUser}>
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/original/${dataUser?.avatar?.tmdb?.avatar_path}`,
            }}
            style={styles.photoUser}
          />
        </View>
      ) :

        <Icon name="person-circle" color="rgba(255,255,255,0.4)" size={78} />
      }

      <Text style={styles.nameUser}>{dataUser?.name}</Text>

      <View style={styles.viewListMovies}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('SeeMovieList')}}
        style={styles.btnViewListMovies}>
          <Text style={styles.textListMovies}>Ver listas de filmes</Text>
          </TouchableOpacity>
      </View>

      {evaluationSeries?.total_results === 0 && evaluationMovies?.total_results === 0 ? (
        <View style={styles.containerTotalResults}>
          <Text style={styles.totalAvaluation}>0</Text>
          <Text style={styles.textAvaliacao}>Avaliações</Text>
        </View>) :
        (<View style={styles.containerTotalResults}>
          {evaluationSeries.total_results && evaluationMovies.total_results ? (
            <>
              <Text style={styles.totalAvaluation}>{totalEvaluationNumber}</Text>

              <Text style={styles.textAvaliacao}>Avaliações</Text>
            </>
          ) : (
            <ActivityIndicator size="large" color="#E9A6A6" />
          )}
        </View>)}

      {/* ///////////////////// btnMovieSeries //////////////////// */}
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
      {/* ///////////////////// container princiapl //////////////////// */}
      <View style={styles.containerMain}>
        {movieButtonFocused ? (
          <SeeItAll
            midia={'Filmes'}
            letra={'o'}
            nameUser={dataUser.name}
            onPress={() => {
              navigation.navigate('MoviesFavorites');
            }}
          />
        ) : (
          <SeeItAll
            midia={'Séries'}
            letra={'a'}
            nameUser={dataUser.name}
            onPress={() => {
              navigation.navigate('SeriesFavorites');
            }}
          />
        )}
      </View>
      {/*  //////////////////// Container filmes favoritos /////////////////// */}
      {favoriteMovies?.total_results === 0 || favoriteSeries?.total_results === 0 ?
        <View style={styles.containerMovieFavorites}>
          <Text style={{ color: '#fff', marginTop: 30, fontSize: 20 }}>Lista vazia</Text>
        </View> :
        <View style={styles.containerMovieFavorites}>
          {favoriteMovies?.results && favoriteSeries?.results ? (
            <View>
              <FlatList
                data={
                  movieButtonFocused
                    ? favoriteMovies?.results?.slice(0, 4)
                    : favoriteSeries?.results?.slice(0, 4)
                }
                horizontal={true}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  movieButtonFocused ?
                    <SelectedItem
                      onPress={() => {
                        setIdItem(item.id), navigation.navigate('MoviesDetail', { item });
                      }}
                      uri={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                    />
                    :
                    <SelectedItem
                      onPress={() => {
                        setIdItem(item.id), navigation.navigate('SeriesDetail', { item });
                      }}
                      uri={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                    />

                )}
              />

            </View>) : (
            <ActivityIndicator size="large" color="#E9A6A6" />
          )}
        </View>}
      <View style={{ width: '100%', borderWidth: 0.3, marginBottom: 10, borderTopColor: 'grey' }}>


        <View style={styles.containerRow2}>

          {movieButtonFocused ? (
            <SeeItAllEvaluation
              midia={'Filmes'}
              nameUser={dataUser.name}
              onPress={() => {
                navigation.navigate('MoviesEvaluation');
              }}
            />

          ) : (
            <SeeItAllEvaluation
              midia={'Séries'}
              nameUser={dataUser.name}
              onPress={() => {
                navigation.navigate('SeriesEvaluation');
              }}
            />

          )}

        </View>
        {favoriteMovies?.total_results === 0 && favoriteMovies?.total_results === 0 ?(
         <View style={styles.containerEvaluation}>
           <Text  style={{ color: '#fff', marginTop: 30, fontSize: 20 }}>Sem avaliações</Text>
        </View>):(
        <View style={styles.containerEvaluation}>
          {favoriteMovies?.results && favoriteSeries?.results ? (
            <View>
              <FlatList
                data={
                  movieButtonFocused
                    ? evaluationMovies?.results?.slice(0, 5)
                    : evaluationSeries?.results?.slice(0, 5)
                }
                horizontal={true}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  movieButtonFocused ?
                    <SelectedItemEvaluation
                      onPress={() => {
                        setIdItem(item.id), navigation.navigate('MoviesDetail', { item })
                      }
                      }
                      uri={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                      vote={item.rating.toFixed(0) + '/10'}
                    />
                    :
                    <SelectedItemEvaluation
                      onPress={() => {
                        setIdItem(item.id), navigation.navigate('SeriesDetail', { item })
                      }
                      }
                      uri={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                      vote={item.rating.toFixed(0) + '/10'}
                    />
                )}
              />

            </View>) : (
            <ActivityIndicator size="large" color="#E9A6A6" />
          )}
        </View>)}
      </View>
    </View>
  );
}
