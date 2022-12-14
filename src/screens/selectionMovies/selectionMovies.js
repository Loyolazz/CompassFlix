import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import CardMovies from '../../Components/selectMoviesComp/cards/cardMovies';
import Load from '../../Components/Load';
import Loading from '../../Components/Loading';
import HeaderFilm from '../../Components/selectMoviesComp/header/header';
import HeaderMoviesDefault from '../../Components/selectMoviesComp/header/headerDefault';
import photo_default from '../../assets/photo_default.png'
import { Context } from '../../context';
import styles from './style_selectionMovies';
import { getMovies, getAccount, getFavoriteSeries } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

export function SelectionMovies({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState();
  const [idUSer, setIdUser] = useState({})
  const [rated, setRated] = useState([]);
  const [dataUser, setDataUser] = useState('username');
  const { sessionId, user, setUser } = useContext(Context);

  const getResponseMovies = async () => {
    const response = await getMovies(page);
    setMovies([...movies, ...response.data.results]);
    setPage(page + 1);
  };

  useEffect(() => {
    const getResponseAccount = async () => {
      const storedUser = await AsyncStorage.getItem('sessionId');
      const response = await getAccount(sessionId ? sessionId : storedUser);
      setSelected(response.data);
      setIdUser(response.data.id)
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);

  useEffect(() => {
    getResponseMovies();
  }, []);
  const userPhotoProfile = `http://image.tmdb.org/t/p/original/${dataUser?.avatar?.tmdb?.avatar_path}`
  return movies && selected ? (
    <View style={styles.container}>
      <View style={styles.section}>
        {dataUser?.avatar?.tmdb?.avatar_path ?
          <>
            <HeaderFilm
              nameUser={selected.name}
              photoUser={userPhotoProfile}
              onPress={() => navigation.navigate('Profile')}
            />
          </>
          :
          <>
            <HeaderMoviesDefault
              nameUser={selected.name}
              photoUser={photo_default}
              onPress={() => navigation.navigate('Profile')}
            />
          </>

        }

      </View>
      <FlatList
        numColumns={4}
        data={movies}
        keyExtractor={(item, index) => `${index}`}
        onEndReached={getResponseMovies}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}
        renderItem={({ item }) => {
          const id = `${item.id}`;
          return (
            <CardMovies
              text={`${item.vote_average}`}
              poster_path={item.poster_path}
              onPress={() => {
                setSelectedId(id);
                navigation.navigate('MoviesDetail', { item });
              }}
            />
          );
        }}
      />
    </View>
  ) : (
    <Load />
  );
}
