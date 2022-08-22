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

export default function Profile({ navigation }) {
  const [nameUser, setNameUser] = useState('')
  const [avatar, setAvatar] = useState('')
  const [colorBtn, setColorBtn] = useState({
    moviesButton: "#9C4A8B",
    seriesButton: "#474A51"
  });
  const MoviesListDeafult = (
    <MoviesList
      nameUser={nameUser.name}
      onPressFavorite={() => navigation.navigate('MoviesFavorites')}
      onPressEvaluation={() => navigation.navigate('EvaluationMovies')}
    />
  );
  const SeriesListDeafult = (
    <SeriesList
      nameUser={nameUser.name}
      onPressFavorite={() => navigation.navigate('SeriesFavorites')}
      onPressEvaluation={() => navigation.navigate('EvaluationSeries')}
    />
  );
  const [listView, setListView] = useState(MoviesListDeafult);

  const { sessionId } = useContext(Context)
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data);
      console.log(response.data);
    };
    getResponseAccount();
  }, [sessionId]);

  //const uri = `http://image.tmdb.org/t/p/original/${nameUser?.avatar?.tmdb?.avatar_path}`


  function MoviesListPress() {
    setListView(MoviesListDeafult);
    setColorBtn({ moviesButton: "#9C4A8B", seriesButton: "#474A51" })
  }
  function SeriesListPress() {
    setListView(SeriesListDeafult);
    setColorBtn({ moviesButton: "#474A51", seriesButton: "#9C4A8B" })
  }
  return (
    <View style={styles.container}>
      <HeaderProfile
        nameUser={nameUser.name}
        textEvaluation={'Avaliação'}
        numberEvaluation={30}
        photoUser={`http://image.tmdb.org/t/p/original/${nameUser?.avatar?.tmdb?.avatar_path}`}
        LogOut={() => navigation.navigate('Login')}
      />
{/* <Image
                source={{
                  uri: `http://image.tmdb.org/t/p/original/${nameUser?.avatar?.tmdb?.avatar_path}`,
                }}
                style={{
                  width: 100,
                  height: 100,
                }}
              /> */}

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
        <View>{listView}

        </View>
       
      </View>
    </View>
  );
}
