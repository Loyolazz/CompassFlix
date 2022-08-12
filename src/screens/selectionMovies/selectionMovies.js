import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Text} from 'react-native';
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
  const {id} = useContext(Context);

  const getResponseMovies = async () => {


    const response = await getMovies(page);
    setMovies([...movies, ...response.data.results]);
    setPage(page + 1);
  };

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(id);
      setSelected(response.data.name);
    };
    getResponseAccount();
  }, [id]);

  useEffect(() => {
    getResponseMovies();
  }, []);

  return movies && selected ? (
    <View style={styles.container}>
      <View style={styles.section}>
        <HeaderFilm nameUser={selected} />
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
