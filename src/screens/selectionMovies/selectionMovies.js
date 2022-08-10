import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';
import { CardMovies } from '../../Components/selectMoviesComp/cards/cardMovies';
import Header from '../../Components/selectMoviesComp/header/header'
import api from '../../services/api';
import styles from './style_selectionMovies';

const apikey =  'api_key=80eb37af6714ab187d2c58f9acc83af3';
const language = 'language=pt-BR';
const keyApiGet =  `/popular?${apikey}&${language}&page=${1}`

export function SelectionMovies({navigation}) {
  return (

    <View style={styles.container}>
      <View style={styles.section}>

        <Header nameUser={nameUser} />

        <FlatList
          data={listApi}
          keyExtractor={item => String(item.id)}
          numColumns={4}
          renderItem={({ item }) => {

            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`
            const nota = `${item.vote_average}/10`
            const id = `${item.id}`
            return (
              <View style={styles.containerCardMovies}>
                <TouchableOpacity
                  style={{ width: '100%', alignItems: "center" }}
                  // onPress={() => {
                  //   setSelectedId(id)
                  //   navigation.navigate('', { item })
                  // }}
                >
                  <CardMovies
                    text={nota}
                    source={uri}
                    starIcon={item.starIconRed}
                  />
                </TouchableOpacity>
              </View>
            )}}
        />
      </View>
    </View>

  );
}
