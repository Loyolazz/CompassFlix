import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styleProfile';
import photUser from '../../assets/imgUser/perfil_photo.png';
import HeaderProfile from '../../Components/ProfileComp/header/headerProfile';
import MoviesList from '../../Components/ProfileComp/MoviesList/moviesList';
import SeriesList from '../../Components/ProfileComp/SerieList/serieList';
export default function Profile({navigation}) {
  const [colorBtn, setColorBtn] = useState({
    moviesButton:"#00AEFF",
    seriesButton:"#5C5C5C"
  });
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
  const [listView, setListView] = useState(MoviesListDeafult);

  const nameUser = 'John';
  const photo = photUser;

  function MoviesListPress() {
    setListView(MoviesListDeafult);
    setColorBtn({moviesButton:"#00AEFF", seriesButton:"#5C5C5C"})
  }
  function SeriesListPress() {
    setListView(SeriesListDeafult);
    setColorBtn({moviesButton:"#5C5C5C", seriesButton:"#00AEFF"})
  }
  return (
    <View style={styles.container}>
      <HeaderProfile
        nameUser={nameUser}
        textEvaluation={'Avaliação'}
        numberEvaluation={30}
        photoUser={photo}
      />

      <View style={styles.containerFavoritesAndEvaluation}>
        <View style={styles.containerIcons}>
          <View style={styles.containerIconPopcorn}>
            <TouchableOpacity onPress={MoviesListPress}>
              <Icon
                name="popcorn"
                size={34}
                color={colorBtn.moviesButton}
                selectionColor={'#000'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerIconPlay}>
            <TouchableOpacity onPress={SeriesListPress}>
              <Icon name="movie-play" size={34} color={colorBtn.seriesButton} />
            </TouchableOpacity>
          </View>
        </View>
        <View>{listView}</View>
      </View>
    </View>
  );
}
