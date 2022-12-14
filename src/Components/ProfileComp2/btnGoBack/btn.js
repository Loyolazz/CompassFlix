import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import IconBack from 'react-native-vector-icons/Ionicons'
export default function BtnGoBack({ onPress }) {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={{width:40, height:40, backgroundColor:'#fff', borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                <IconBack name='arrow-back-outline' size={23} color={'#000'} />
            </TouchableOpacity>
        </View>

    )
}