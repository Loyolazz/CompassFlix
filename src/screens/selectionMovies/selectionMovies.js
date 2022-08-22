import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Image} from 'react-native';
import CardMovies from '../../Components/selectMoviesComp/cards/cardMovies';
import Load from '../../Components/Load';
import Loading from '../../Components/Loading';
import HeaderFilm from '../../Components/selectMoviesComp/header/header';
import {Context} from '../../context';
import styles from './style_selectionMovies';
import {getMovies, getAccount} from '../../services/api';

export function SelectionMovies({navigation}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState();
  const {sessionId} = useContext(Context);

  const getResponseMovies = async () => {


    const response = await getMovies(page);
    setMovies([...movies, ...response.data.results]);
    setPage(page + 1);
  };

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setSelected(response.data);
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
        <Image
                source={{
                  uri: `http://image.tmdb.org/t/p/original/${selected?.avatar?.tmdb?.avatar_path}`,
                }}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
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
