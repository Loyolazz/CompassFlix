import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';

import styles from './style_moviesDetail';
import SinopseDetails from './Components/sinopse/sinopse';
import {ViewElenco} from './Components/elenco';
import Header from './Components/header2/index';
import Api from '../../services/api';
import BtnGoback from '../../../node_modules/react-native-vector-icons/Ionicons';
import Load from '../../Components/Load';
const apikey = 'api_key=80eb37af6714ab187d2c58f9acc83af3';
const language = 'language=pt-BR';

const MoviesDetail = ({route, navigation}) => {
  const [details, setDetails] = useState({});
  const [detailsCredits, setDetailsCredits] = useState([]);

  const {item} = route?.params || {};
  const id = `${item.id}`;

  const DetailsCredits = async () => {
    const response = await Api.get(
      `/movie/${id}/credits?${apikey}&${language}`,
    );
    setDetailsCredits(response.data);
  };
  useEffect(() => {
    DetailsCredits();
  }, []);
  const Details = async () => {
    const response = await Api.get(`/movie/${id}?${apikey}&${language}`);
    setDetails(response.data);
  };
  useEffect(() => {
    Details();
  }, []);

  const GoBack = () => {
    navigation.navigate('TabBottomRoutes');
  };
  ////////////// Details ////////////////
  const director = 'diretor';
  const Title = details.title;
  const Year = `${String(details.release_date).substring(0, 4)}`;
  const Duration = `${details.runtime} min`;
  const Note = `${details.vote_average?.toFixed(1)}/10`;
  const Votes = details.vote_count;
  const Poster = `https://image.tmdb.org/t/p/w342/${details.poster_path}`;
  const Banner = `https://image.tmdb.org/t/p/w342/${details.backdrop_path}`;
  const TitleSinopse = details.tagline;
  const TextSinopse = details.overview;
  ////////////// Credits ////////////////

  return  details.poster_path && details.backdrop_path ? (
    <View style={styles.container}>
      <ImageBackground source={{uri: Banner}} style={styles.ImgBackground}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabBottomRoutes')}
          style={styles.btnGoBack}>
          <BtnGoback name="md-arrow-back" size={23} color={'#000'} />
        </TouchableOpacity>
      </ImageBackground>
      <Header
        Cartaz={Poster}
        Director={director}
        Nota={Note}
        Votes={Votes}
        Year={Year}
        Duration={Duration}
        TitleFilm={Title}
      />
      {/*       
      <HeaderFilm
        onpress={GoBack}
        Banner={Banner}
        Cover={Cover}
        director={director}
        title={Title}
        year={Year}
        duration={Duration}
        note={Note}
        votes={Votes}
      /> */}
      <SinopseDetails titleSinopse={TitleSinopse} textSinopse={TextSinopse} />

      <View style={{paddingHorizontal: 20, marginBottom: 10, marginTop: 10}}>
        <View style={styles.elencoView}>
          <Text style={styles.elencoText}>Elenco</Text>
        </View>
      </View>

      {detailsCredits.cast?.map((item, i) =>
        i < 5 ? (
          <ViewElenco
            key={i}
            profile={item.profile_path}
            name={item.name}
            character={item.character}
          />
        ) : null,
      )}
    </View>
  ) : (
    <Load />
  );
};

export default MoviesDetail;
