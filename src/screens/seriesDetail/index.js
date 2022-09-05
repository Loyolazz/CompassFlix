import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {HeaderDetails} from '../../Components/movieDetailsComp/header/index';
import {SinopseDetails} from '../../Components/movieDetailsComp/sinopse/sinopse';
import Api, {getAccountStates} from '../../services/api';
import BtnGoback from '../../../node_modules/react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './style';
import Load from '../../Components/Load';
import ModalAvaluate from '../../Components/ModalAvaluate';
import Season from '../../Components/seasons';
import ButtonFavorite from '../../Components/ButtonFavorite';
import {
  ratePost,
  getNotas,
  markFavorite,
  unmarkFavorite,
  getAccount,
} from '../../services/api';
import {Context} from '../../context';

const apikey = 'api_key=80eb37af6714ab187d2c58f9acc83af3';
const language = 'language=pt-BR';

export default function SeriesDetail({route, navigation}) {
  const [details, setDetails] = useState([]);
  const {item} = route?.params || {};
  const id = `${item.id}`;
  const [visible, setVisible] = useState(false);
  const [seasonNumber, setSeasonNumber] = useState();
  const [seasonSelected, setSeasonSelected] = useState();
  const [dataUser, setDataUser] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const [favoriteSeries, setFavoriteSeries] = useState();

  const {sessionId, evaluation, setEvaluation} = useContext(Context);

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);

  useEffect(() => {
    const detailsSeries = async () => {
      const response = await Api.get(`tv/${id}?${apikey}&${language}`);
      setDetails(response.data);
    };
    detailsSeries();

    if (evaluation) {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('tv', id, sessionId);
        setFavoriteSeries(response.data.favorite);
      };
      getResponseFavorite();
    } else {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('tv', id, sessionId);
        setFavoriteSeries(response.data.favorite);
      };
      getResponseFavorite();
    }
  }, [evaluation]);

  useEffect(() => {
    if (evaluation) {
      const getResponse = async () => {
        const reponse = await getAccountStates('tv', id, sessionId);
        setRated(reponse.data.rated);
      };
      getResponse();
    } else {
      const getResponse = async () => {
        const reponse = await getAccountStates('tv', id, sessionId);
        setRated(reponse.data.rated);
      };
      getResponse();
    }
  }, [evaluation]);

  const postSerie = async () => {
    await ratePost('tv', id, sessionId, rating);
    setEvaluation(!evaluation);
  };

  const favorite = async () => {
    setEvaluation(!evaluation);
    if (favoriteSeries) {
      await unmarkFavorite(dataUser.id, sessionId, 'tv', id);
    } else {
      await markFavorite(dataUser.id, sessionId, 'tv', id);
    }
  };

  const Banner = `https://image.tmdb.org/t/p/w342/${details.backdrop_path}`;
  const uri = 'https://image.tmdb.org/t/p/w342/';
  return details.backdrop_path && details.poster_path ? (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: Banner}}
        style={styles.logoBackground}></ImageBackground>

      <View style={styles.buttonFavorite}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabBottomRoutes')}
          style={styles.btnGoBack}>
          <BtnGoback name="md-arrow-back" size={23} color={'#000'} />
        </TouchableOpacity>

        <ButtonFavorite onPress={favorite} favorite={favoriteSeries} />
      </View>

      <HeaderDetails
        Cartaz={`${uri}${details.poster_path}`}
        Nota={`${details.vote_average?.toFixed(1)}/10`}
        Votes={details.vote_count}
        Year={`${String(details.first_air_date).substring(0, 4)}`}
        TitleFilm={details.name ? details.name : 'Sem Titulo'}
        poster={`${uri}${details.poster_path}`}
        Director={
          details?.created_by[0]?.name
            ? details?.created_by[0]?.name
            : 'Desconhecido'
        }
      />

      <ModalAvaluate
        modalVisible={modalVisible}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        rating={rating}
        setRating={value => setRating(value)}
        rate={value => postSerie(value)}
      />

      {rated ? (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.ButtonAvalueteOk}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textModalOk}>Sua nota: {rated.value}/10</Text>

          <View style={styles.iconPincel}>
            <EvilIcons name="pencil" size={10} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.ButtonAvaluete}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textModal}>Avalie agora</Text>
        </TouchableOpacity>
      )}

      <SinopseDetails
        titleSinopse={details.tagline ? details.tagline : 'Sem Descrição.'}
        textSinopse={details.overview ? details.overview : 'Sem Sinopse.'}
      />

      <Animatable.View style={styles.flex2_5}
      animation="zoomInUp"
          duration={1000}
      >


        <ScrollView>
          {details.seasons.map((item, index) => (
            <Season
              key={String(item.id)}
              visible={visible}
              index={index}
              id={id}
              seasonNumber={seasonNumber}
              seasonSelected={seasonSelected}
              onPress={() => {
                setVisible(!visible);
                setSeasonNumber(item.season_number);
                setSeasonSelected(index + 1);
              }}
            />
          ))}
        </ScrollView>
      </Animatable.View>
    </View>
  ) : (
    <Load />
  );
}
