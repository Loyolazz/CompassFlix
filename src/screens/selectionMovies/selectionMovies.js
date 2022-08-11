import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CardMovies from '../../Components/selectMoviesComp/cards/cardMovies';
import Load from '../../Components/Load';
import Loading from '../../Components/Loading';
import Header from '../../Components/selectMoviesComp/header/header';
import styles from './style_selectionMovies';
import { getMovies } from '../../services/api';


export function SelectionMovies({navigation}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const nameUser = 'John';

  const getResponseMovies = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const response = await getMovies(page);
    setMovies([...movies, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    getResponseMovies();
  }, []);
  return movies ? (
    <View style={styles.container}>
      <View style={styles.section}>
        <Header nameUser={nameUser} />
      </View>

      <FlatList
        numColumns={4}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={movies}
        keyExtractor={(item, index) => `${index}`}
        onEndReached={getResponseMovies}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}


        renderItem={({item}) => {
          const id = `${item.id}`
          return(
          <CardMovies
            text={`${item.vote_average}`}
            poster_path={item.poster_path}
            onPress={() => {
              setSelectedId(id)
              console.log('trocou')
              navigation.navigate('Tab', { item })
            }}
          />
  )}}
      />
    </View>
  ) : (
    <Load loa />
  );
}
