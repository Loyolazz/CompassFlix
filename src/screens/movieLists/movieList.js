import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Arrow from 'react-native-vector-icons/Feather';
import { removeItem, getMoviesList } from '../../services/api';
import { styles } from './style_movieList';
import * as Animatable from 'react-native-animatable';
import { Context } from '../../context';
import ModalExitAccount from '../../Components/ModalExitAccount';
import Load from '../../Components/Load'

export default function MovieList({ route, navigation }) {
  const [movieButtonFocused, setMovieButtonFocused] = useState(true);
  const [listMovieDetails, setListMovieDetails] = useState([]);
  const [listMovie, setListMovie] = useState([]);
  const [idMovie, setIdMovie] = useState();
  const [selectedId, setSelectedId] = useState();
  const [modalVisibleExit, setVisibleModalExit] = useState(false);
  const { item } = route?.params || {};
  const id = `${item.id}`;
  const { sessionId, evaluation, setEvaluation } = useContext(Context);

  useEffect(() => {
    const getInfoList = async () => {
      const response = await getMoviesList(id);
      setListMovie(response.data.items);
      setListMovieDetails(response.data);
    };

    getInfoList();
  }, [evaluation]);

  const itemRemoved = async () => {
    await removeItem(
      id,
      sessionId,
      idMovie,
    );
    setVisibleModalExit(false);
    setEvaluation(!evaluation);
  };

  return listMovie && listMovieDetails ? (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={styles.ContainerTop}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('SeeMovieList')}>
          <Arrow
            name="arrow-left"
            size={23}
            color={'#000'} />
        </TouchableOpacity>
        <View>
          <View style={styles.ContainerButtonSandM}>
            <View style={styles.BorderButton}>
              <TouchableOpacity
                onPress={() => {
                  setMovieButtonFocused(true);
                }}>
                {movieButtonFocused ? (
                  <View
                    style={styles.ViewEyeIconOne}>
                    <Icon
                      name="eye"
                      size={37}
                      color="#fff"
                      style={styles.Icon}
                    />
                  </View>
                ) : (
                  <View
                    style={styles.ViewEyeIconTwo}>
                    <Icon
                      name="eye"
                      size={37}
                      color="#000"
                      style={styles.Icon}
                    />
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.BorderButton}>
              <TouchableOpacity
                onPress={() => {
                  setMovieButtonFocused(false);
                }}>
                {!movieButtonFocused ? (
                  <View
                    style={styles.ViewPencilIconOne}>
                    <Icon
                      name="pencil"
                      size={35}
                      color="#fff"
                    />
                  </View>
                ) : (
                  <View

                    style={styles.ViewPencilIconTwo}>

                    <Icon
                      name="pencil"
                      size={35}
                      color="#000"
                    />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: 10, alignItems: 'center' }}>
        <View>

          <Text style={styles.TextName}>

            {listMovieDetails.name}
          </Text>
        </View>
        <View>

          <Text style={styles.TextDescp}>
            {listMovieDetails.description}
          </Text>
        </View>
      </View>
      {movieButtonFocused ? (
        <View
          style={styles.ViewPreFlat}>
          <FlatList
            data={listMovie}
            keyExtractor={(item, index) => `${index}`}
            numColumns={4}
            renderItem={({ item }) => {
              const poster = `${item.poster_path}`;
              const id = `${item.id}`;
              return (

                <View style={styles.ViewInFlat}>
                  <TouchableOpacity 
                  
                  onPress={() => {
                        setSelectedId(id);
                        navigation.navigate('MoviesDetail', { item });
                      }}
                  style={styles.ViewOrganizationOff}>
                    <Image
                      style={styles.Image}
                      source={{ uri: `http://image.tmdb.org/t/p/w185/${poster}` }}
                      
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      
      ) : (

        <View style={styles.ViewPreFlat}>

          <FlatList
            data={listMovie}
            keyExtractor={(item, index) => `${index}`}
            numColumns={4}
            renderItem={({ item }) => {
              const poster = `${item.poster_path}`;
              const id = `${item.id}`;
              return (

                <View style={styles.ViewInFlat}>
                  <View style={styles.ViewOrganizationOn}>
                  

                  
                    <Image
                      style={styles.Image}
                      source={{ uri: `http://image.tmdb.org/t/p/w185/${poster}` }}
                      onPress={() => {
                        setSelectedId(id);
                        navigation.navigate('MoviesDetail', { item });
                      }}
                    /> 
                  
                    <>
                      <View style={{ position: 'absolute', width: '90%', height: 20, alignItems: 'flex-end', top: -10 }}>
                        <TouchableOpacity
                          style={styles.TouchableButton}
                          onPress={() => {
                            setIdMovie(item.id);
                            setVisibleModalExit(!modalVisibleExit);
                          }}>
                          <Text style={{ color: 'red', fontSize: 14, fontWeight: '900' }}>-</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  </View>

                </View>
                
             


              


              );
            }}
          />
          <ModalExitAccount
            title="Deseja mesmo remover o filme ?"
            modalExit={modalVisibleExit}
            onPress={() => setVisibleModalExit(false)}
            logout={() => itemRemoved()}
          />
        </View>
      )}
    </View>
  ) : (
    <Load />
  )
}
