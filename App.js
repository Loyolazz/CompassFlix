import React from 'react';
import { View, Text } from 'react-native'
import { SelectionMovies } from './scr/screens/selectionMovies/selectionMovies';


export default function App () {
  return(
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <SelectionMovies />
    </View>
  )
}