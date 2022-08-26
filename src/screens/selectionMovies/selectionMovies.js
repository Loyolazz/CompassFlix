import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import CardMovies from '../../Components/selectMoviesComp/cards/cardMovies';
import Load from '../../Components/Load';
import Loading from '../../Components/Loading';
import HeaderFilm from '../../Components/selectMoviesComp/header/header';
import {Context} from '../../context';
import styles from './style_selectionMovies';
import {getMovies, getAccount, getFavoriteSeries} from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SelectionMovies({navigation}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState();
  const [idUSer, setIdUser] = useState({})
  const [rated, setRated] = useState([]);
  const {sessionId, user, setUser} = useContext(Context);

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

    };
    getResponseAccount();
  }, [sessionId]);

  useEffect(() => {
    getResponseMovies();
  }, []);

  return movies && selected ? (
    <View style={styles.container}>
      <View style={styles.section}>
        <HeaderFilm nameUser={selected.name} />
      </View>

      <FlatList
        numColumns={4}
       
        data={movies}
        keyExtractor={(item, index) => `${index}`}
        onEndReached={getResponseMovies}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}
        renderItem={({item}) => {
          const id = `${item.id}`;
          return (
            <CardMovies
              text={`${item.vote_average}`}
              poster_path={item.poster_path}
              onPress={() => {
                setSelectedId(id);
                navigation.navigate('MoviesDetail', {item});
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
