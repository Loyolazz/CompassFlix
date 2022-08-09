import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import batmanBanner from '../../assets/batman/batmanBanner.jpeg'
import batmanCover from '../../assets/batman/batmanCover.jpg'
import robert from '../../assets/batman/robert.png'
import styles from './style_moviesDetail'
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';

const moviesDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerBack}>
        <Image style={styles.banner} source={batmanBanner} />
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.cover} source={batmanCover} />
          <View style={styles.viewTitle}>
            <Text style={styles.title}>The Batman</Text>
            <Text style={styles.year}>2022</Text>
          </View>
          <Text style={styles.duration}>176 min</Text>
        </View>
        <View style={styles.viewDirector}>
          <Text style={styles.director}>Direção por </Text>
          <Text style={styles.director}>Matt Reeves</Text>
        </View>
        <View>
          <View>
            <Text style={styles.imdb}>8.5/10</Text>
          </View>
          <View>
            <Text style={styles.likes}>30K</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewSinpose}>
        <Text style={styles.sinposeTop}>
          DESCUBRA A VERDADE.
        </Text>
        <Text style={styles.sinposeBottom}>
          Em seu segundo ano de combate ao crime, Batman descobre a corrupção em Gotham City que se conecta à sua própria família enquanto enfrenta um serial killer conhecido como Charada.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.elencoButton}>
          <Text style={styles.elenco}> Elenco </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actorView1}>
        <Image style={styles.actorImagem} source={robert} />
        <Image style={styles.actorImagem} source={robert} />
        <Image style={styles.actorImagem} source={robert} />
        <Image style={styles.actorImagem} source={robert} />
        <Image style={styles.actorImagem} source={robert} />
      </View>
      <View >
        <Text style={styles.actorName1}>Robert Partinson</Text>
        <Text style={styles.actorPersona1}>Batman</Text>
      </View>
      <View>
        <Text style={styles.actorName2}>Robert Partinson</Text>
        <Text style={styles.actorPersona2}>Batman</Text>
      </View>
      <View >
        <Text style={styles.actorName3}>Robert Partinson</Text>
        <Text style={styles.actorPersona3}>Batman</Text>
      </View>
      <View>
        <Text style={styles.actorName4}>Robert Partinson</Text>
        <Text style={styles.actorPersona4}>Batman</Text>
      </View>
      <View>
        <Text style={styles.actorName5}>Robert Partinson</Text>
        <Text style={styles.actorPersona5}>Batman</Text>
      </View>
    </View>
  );
};

export default moviesDetail;