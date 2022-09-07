import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';
import {Context} from '../../../../context';
import {getAccount, getMoviesFavorites} from '../../../../services/api';
import Api from '../../../../services/api';
import star_red from '../../../../assets/star_red.png';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
import BlockIcon from 'react-native-vector-icons/MaterialIcons'

export default function SeriesFavorites({navigation}) {
  const [nameUser, setNameUser] = useState('');
  const [idUser, setIdUser] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [dataUser, setDataUser] = useState('username');
  const [favoriteSeries, setFavoriteSeries] = useState([]);
  const {sessionId} = useContext(Context);
  
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data.name);
      setIdUser(response.data.id);
      setDataUser(response.data);
    };
    getResponseAccount();
  }, [sessionId]);
 
  useEffect(() => {
    const getResponseSeriesFavorites = async () => {
      const response = await getMoviesFavorites(dataUser, 'tv', sessionId);
      setFavoriteSeries(response.data);
    };
    getResponseSeriesFavorites();
  }, [dataUser, sessionId]);

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <BtnGoBack onPress={() => navigation.navigate('ProfileX')} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.title}>
        Séries favoritas de  <Text style={{color: '#E9A6A6'}}>{nameUser}</Text>
          !
        </Text>
      </View>
      {favoriteSeries.total_results === 0 ?
        <View style={{width:'100%',  alignItems:'center', justifyContent:'center'}}>
          <Text style={{ color: 'grey', fontSize:20, marginBottom:30, marginTop:10 }}>Sem Séries recentes</Text>
        <BlockIcon name='tv-off' size={100} color={'grey'}/>
        </View> 
        :  
      <FlatList
        numColumns={4}
        data={favoriteSeries.results}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flex: 1,
              flexDirection: 'column',
              marginBottom: 20,
              paddingHorizontal: 10,
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIdItem(item.id), navigation.navigate('SeriesDetail', {item});
              }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                }}
                style={{
                  width: 76,
                  height: 95,
                  borderRadius: 20,

                  marginTop: 5,
                  alignItems: 'center',
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={star_red}
                style={{width: 10, height: 10, marginRight: 8}}
              />
              <Text style={{color: '#fff', fontSize: 13}}>
                {item.vote_average?.toFixed(1)}/10
              </Text>
            </View>
          </View>
        )}
      />}
    </View>
  );
}
