import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text, ImageEditor } from 'react-native';
import batmanBanner from '../../assets/batman/batmanBanner.jpeg'
import batmanCover from '../../assets/batman/batmanCover.jpg'
import robert from '../../assets/batman/robert.png'
import styles from './style_moviesDetail'
import HeaderFilm from './Components/header/header';
import SinopseDetails from './Components/sinopse/sinopse';
import Elenco from './Components/elenco/ElencoList';
import Lista from './Components/lista/listaTeste'
const MoviesDetail = () => {

  const director = 'Matt Reeves'
  const Title = 'The Batman'
  const Year = '2022'
  const Duration = '172'
  const Note = '08/10'
  const Votes = '30k'

  const TitleSinopse = 'Descubra a verdade'
  const TextSinopse = 'Em seu segundo ano de combate ao crime, Batman descobre a corrupção em Gotham City que se conecta à sua própria família enquanto enfrenta um serial killer conhecido como Charada.'
  return (

    <View style={styles.container}>

      <HeaderFilm
        batmanBanner={batmanBanner}
        batmanCover={batmanCover}
        director={director}
        title={Title}
        year={Year}
        duration={Duration}
        note={Note}
        votes={Votes}
      />
      <SinopseDetails
        titleSinopse={TitleSinopse}
        textSinopse={TextSinopse}
      />




        <View style={{paddingHorizontal:20, marginBottom:10, marginTop:10}}>
          <View style={styles.elencoView}>
        <Text style={styles.elencoText}>Elenco</Text>
      </View>
        </View>
      
      {Lista.map((item) => {
        return (
          <View style={{
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginVertical: 5,
            alignItems: 'flex-start',
            flexDirection: 'row'
          }}>
            <View style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: 50, }}>

            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ color: 'white', fontSize: 10 }}>{item.character}</Text>
            </View>

          </View>

        )
      })

      }
    </View>

  );
};

export default MoviesDetail;