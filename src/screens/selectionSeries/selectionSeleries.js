import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Image } from 'react-native';
import CardMovies from '../../Components/selectMoviesComp/cards/cardMovies';
import HeaderSeries from '../../Components/selectSeriesComp/header/header';
import HeaderSeriesDefault from '../../Components/selectSeriesComp/header/headerDefault';
import styles from './styles';
import photo_default from '../../assets/photo_default.png'
import { getSeries, getAccount } from '../../services/api';
import Loading from '../../Components/Loading';
import Load from '../../Components/Load';
import { Context } from '../../context/index';

export function SelectionSeries({ navigation }) {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState();
  const [loading, setLoading] = useState(false);
  const [nameUser, setNameUser] = useState();
  const { sessionId } = useContext(Context);
  const [dataUser, setDataUser] = useState('username');
  async function getResponseSeries() {
    const response = await getSeries(page);
    setSeries([...series, ...response.data.results]);
    setPage(page + 1);
  }
  useEffect(() => {
    getResponseSeries();
  }, []);
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data.name);

    };
    const getResponseAccountPhoto = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data);

    };
    getResponseAccountPhoto();
    getResponseAccount()
  }, []);
  const userPhotoProfile = `http://image.tmdb.org/t/p/original/${dataUser?.avatar?.tmdb?.avatar_path}`

  return series && nameUser ? (
    <View style={styles.container}>
      <View style={styles.section}>
        {dataUser?.avatar?.tmdb?.avatar_path ?

          <HeaderSeries
            nameUser={nameUser}
            photoUser={userPhotoProfile}
            onPress={() => navigation.navigate('Profile')}
          />
          :
          <>
            <HeaderSeriesDefault
              nameUser={nameUser}
              photoUser={photo_default}
              onPress={() => navigation.navigate('Profile')}
            />
          </>

        }

      </View>
      <FlatList
        data={series}
        keyExtractor={(item, index) => `${index}`}
        numColumns={4}
        onEndReached={getResponseSeries}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}
        renderItem={({ item }) => {
          return (
            <CardMovies
              text={`${item.vote_average}`}
              poster_path={item.poster_path}
              onPress={() => {
                setSelectedId(item.id);
                navigation.navigate('SeriesDetail', { item });
              }}
            />
          );
        }}
      />
    </View>
  ) : (
    <Load />
  )
}
