import React from 'react'
import { View, Text } from 'react-native'

export default function Profile() {
    return(
     <View  style={{flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}} >Profile</Text>
     </View>
    )
}