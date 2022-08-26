import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {getAccount, getFavoriteSeries} from '../../../services/api';
import {Context} from '../../../context';
import Api from '../../../services/api';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import star_red from '../../../assets/star_red.png';

export default function SerieList({
  navigation,
  onPressFavorite,
  onPressEvaluation,
  nameUser,
}) {
  const [idUser, setIdUser] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [seriesListFavorite, setSeriesListFavorite] = useState([]);
  const [serieListFavoriteEvaluation, setSerieListFavoriteEvaluation] =
    useState([]);
  const navigate = useNavigation();
  const apikey = 'ecd878f5eb6f5ca388735c699adaff80';
  const {sessionId} = useContext(Context);
  const [dataUser, setDataUser] = useState('username');
  useEffect(() => {
    const getAccountId = async () => {
      const response = await getAccount(sessionId);
      setIdUser(response.data.results);
      setDataUser(response.data);
    };
    getAccountId();
  }, [sessionId]);

  useEffect(() => {
    const init = async () => {
      const response = await Api.get(
        `/account/${idUser}/favorite/tv?api_key=${apikey}&session_id=${sessionId}`,
      );
      setSeriesListFavorite(response.data.results);
    };
    init();
  }, [idUser, apikey, sessionId]);
  useEffect(() => {
    const init = async () => {
      const response = await Api.get(
        `/account/${idUser}/rated/tv?api_key=${apikey}&session_id=${sessionId}`,
      );
      setSerieListFavoriteEvaluation(response.data.results);
    };
    init();
  }, [idUser, apikey, sessionId]);

  return (
    <View style={{width: '100%'}}>
      <View style={styles.headerFavorites}>
        <View style={styles.viewTextFavorites}>
          <Text style={styles.textFavorites}>
            Séries favoritas de {dataUser.name}
          </Text>
          <TouchableOpacity onPress={onPressFavorite}>
            <Text style={styles.textViewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewListFavorites}>
          {seriesListFavorite.map((item, i) =>
            i < 4 ? (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setIdItem(item.id), navigate.navigate('SeriesDetail', {item});
                }}
                style={styles.styleItem}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                  }}
                  style={styles.styleItem}
                />
              </TouchableOpacity>
            ) : null,
          )}
        </View>
      </View>
      <View style={styles.headerEvaluation}>
        <View style={styles.viewTextEvaluation}>
          <Text style={styles.textEvaluation}>
            Avaliações de séries recentes de {dataUser.name}
          </Text>
          <TouchableOpacity onPress={onPressEvaluation}>
            <Text style={styles.textViewAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewListEvaluation}>
          {serieListFavoriteEvaluation.map((item, i) =>
            i < 5 ? (
              <View key={i}>
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setIdItem(item.id),
                      navigate.navigate('SeriesDetail', {item});
                  }}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                    }}
                    style={styles.styleItem}
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
            ) : null,
          )}
        </View>
      </View>
    </View>
  );
}
