import React from 'react';
import {View, Text, FlatList,SafeAreaView, ScrollView} from 'react-native';

import {CardMovies} from './components/cardMovies';
import moviesList from './data/movies';

import styles from './styles';

export function SelectionMovies() {
  return (

      <View style={styles.container}>  
          <View style={styles.section}>
          <View style={styles.header}>
                   <View style={styles.containerRow}>
                      <Text style={styles.title}>Ola,</Text>
                      <Text style={styles.label}>Jonh</Text>
                      <Text style={styles.title}>!</Text>
                  </View>
                  <Text style={styles.description}>
                     Reveja ou acompanhe os filmes que você assistiu...
                  </Text>
                  <Text style={styles.popularMovies}>
                     Filmes populares este mês
                  </Text>
         </View>

          <FlatList
            data={moviesList}
            keyExtractor={item => String(item.id)}
            numColumns={4}
            showsVerticalScrollIndicator ={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => ( 
            
              <View style={styles.containerCardMovies}>
    
                <CardMovies 
                  text={item.nota} 
                  source={item.image} 
                  starIcon={item.starIconRed}
                />
                
              </View>
             
            )}
          />
        </View>
     
    </View>

  );
}
