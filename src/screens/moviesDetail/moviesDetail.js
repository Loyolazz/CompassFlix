import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import styles from './style_moviesDetail';
import {ViewElenco} from '../../Components/movieDetailsComp/elenco';
import {HeaderDetails} from '../../Components/movieDetailsComp/header/index';
import {SinopseDetails} from '../../Components/movieDetailsComp/sinopse/sinopse';
import Api from '../../services/api';
import {getList, AddMovieList} from '../../services/api';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAddList from 'react-native-vector-icons/Feather';
import ButtonFavorite from '../../Components/ButtonFavorite';
import BtnGoback from '../../../node_modules/react-native-vector-icons/Ionicons';
import Load from '../../Components/Load';
import ModalAvaluate from '../../Components/ModalAvaluate';
import {Context} from '../../context';
import {
  ratePost,
  getAccountStates,
  getAccount,
  markFavorite,
  unmarkFavorite,
} from '../../services/api';
import ModalConfirmationAddList from '../../Components/ModalConfirmationAddList';

const apikey = 'api_key=80eb37af6714ab187d2c58f9acc83af3';
const language = 'language=pt-BR';

const MoviesDetail = ({route, navigation}) => {
  const [details, setDetails] = useState({});
  const [detailsCredits, setDetailsCredits] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTeste, setModalVisibleTeste] = useState(false);
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState();
  const [list, setList] = useState({});

  const [dataUser, setDataUser] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState();
  const [isVisivle, setIsVisible] = useState(false);
  const {sessionId, evaluation, setEvaluation} = useContext(Context);
  const [selectedId, setSelectedId] = useState(null);
  const {item} = route?.params || {};
  const id = `${item.id}`;

  const DetailsCredits = async () => {
    const response = await Api.get(
      `/movie/${id}/credits?${apikey}&${language}`,
    );
    setDetailsCredits(response.data);
  };

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);

  useEffect(() => {
    DetailsCredits();
  }, []);

  useEffect(() => {
    const Details = async () => {
      const response = await Api.get(`/movie/${id}?${apikey}&${language}`);
      setDetails(response.data);
    };

    Details();

    if (evaluation) {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('movie', id, sessionId);
        setFavoriteMovies(response.data.favorite);
      };
      getResponseFavorite();
    } else {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('movie', id, sessionId);
        setFavoriteMovies(response.data.favorite);
      };
      getResponseFavorite();
    }
  }, [evaluation]);

  useEffect(() => {
    if (evaluation) {
      const getResponse = async () => {
        const reponse = await getAccountStates('movie', id, sessionId);
        setRated(reponse.data.rated);
      };
      getResponse();
    } else {
      const getResponse = async () => {
        const reponse = await getAccountStates('movie', id, sessionId);
        setRated(reponse.data.rated);
      };
      getResponse();
    }
  }, [evaluation]);

  const postMovie = async () => {
    await ratePost('movie', id, sessionId, rating);
  };
  ////////////// Details ////////////////

  const favorite = async () => {
    setEvaluation(!evaluation);
    if (favoriteMovies) {
      await unmarkFavorite(dataUser.id, sessionId, 'movie', id);
    } else {
      await markFavorite(dataUser.id, sessionId, 'movie', id);
    }
  };

  useEffect(() => {
    const getListMovies = async () => {
      const response = await getList(dataUser, sessionId);
      setList(response.data.results);
    };
    getListMovies();
  }, []);

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
  const director = detailsCredits.crew?.find(
    element => element.job === 'Director',
  )?.name;

  const handleAddMovieList = async () => {
    await AddMovieList(selectedId, sessionId, details.id);

    setIsVisible(!isVisivle);
  };

  return details.poster_path && details.backdrop_path ? (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTeste}
        onRequestClose={() => {
          setModalVisibleTeste(!modalVisibleTeste);
        }}>
        <View style={styles.containerModalAddList}>
          <View style={styles.viewTitleAndBtnExitModal}>
            <Text style={styles.styleTxtTitleModal}>Salvar filmes em...</Text>

            <Pressable onPress={() => setModalVisibleTeste(!modalVisibleTeste)}>
              <Text style={styles.txtExit}>X</Text>
            </Pressable>
          </View>

          <View style={styles.containerAddMovieList} />
          <View style={styles.viewFlatlistAddMovie}>
            <FlatList
              data={list}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => {
                const backgroundColor =
                  item.id === selectedId ? '#000' : '#fff';
                return (
                  <View style={styles.containerItemAddMovie}>
                    <View style={styles.viewCircleSelection}>
                      <TouchableOpacity
                        onPress={() => setSelectedId(item.id)}
                        style={{
                          backgroundColor,
                          height: 17,
                          width: 17,
                          borderRadius: 20,
                        }}></TouchableOpacity>
                    </View>
                    <Text style={{marginLeft: 10, color: '#000'}}>
                      {item.name}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.viewBtnSaveAddMovie}
            onPress={() => {
              setModalVisibleTeste(!modalVisibleTeste);
              handleAddMovieList();
            }}>
            <Text style={styles.txtBtnSaveAddMovie}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ImageBackground
        source={{uri: Banner}}
        style={styles.ImgBackground}></ImageBackground>
      <View style={styles.buttonFavorite}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btnGoBack}>
          <BtnGoback name="md-arrow-back" size={23} color={'#000'} />
        </TouchableOpacity>

        <ButtonFavorite onPress={favorite} favorite={favoriteMovies} />
      </View>

      <HeaderDetails
        Cartaz={Poster}
        Director={director}
        Nota={Note}
        Votes={
          Votes >= 1000 ? `${(Votes / 1000)?.toFixed(0)}` : Votes?.toFixed(0)
        }
        Year={Year}
        Duration={Duration}
        TitleFilm={Title}
      />

      <ModalAvaluate
        modalVisible={modalVisible}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        rating={rating}
        setRating={value => setRating(value)}
        rate={value => postMovie(value)}
      />

      <ModalConfirmationAddList
        modalVisible={isVisivle}
        onPress={() => setIsVisible(!isVisivle)}
      />

      <View style={styles.containerButtons}>
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

        <TouchableOpacity
          onPress={() => setModalVisibleTeste(true)}
          style={styles.buttonAddList}>
          <View style={styles.containerIconPlus}>
            <IconAddList name="plus" size={20} color={'#000'} />
          </View>

          <Text style={styles.textAddList}>Adicionar a uma lista</Text>
        </TouchableOpacity>
      </View>

      <SinopseDetails titleSinopse={TitleSinopse} textSinopse={TextSinopse} />
      <ScrollView>
        <View style={{paddingHorizontal: 20, marginBottom: 10, marginTop: 5}}>
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
      </ScrollView>
    </View>
  ) : (
    <Load />
  );
};

export default MoviesDetail;
