import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';

import styles from './style copy'
import BtnGoBack from '../../Components/ProfileComp2/btnGoBack/btn'
import { TextInput } from 'react-native-gesture-handler';

const useCounter = () => {
    const [value, setValue] = useState(0);
    const setCounter = () => {
        setValue(value + 1);
    };
    return [value, setCounter];
};
// const Counter = () => {
//     const [counter, setCounter] = useCounter(0);
//     return (
//         <View>
//             <Text>{counter}</Text>
//             <TouchableOpacity title="clique aqui" onPress={() => setCounter()} ><Text>+</Text></TouchableOpacity>
//         </View>
//     );
// };

export default function SeeMovieList({ navigation }) {
    const [counter, setCounter] = useCounter(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [descricao,setDescricao] = useState('');
    const ExibirDescricao = () =>{
        return(
            <View style={{backgroundColor:'blue', width:'100%', flex:1}}>
                <Text>{descricao}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View>
                <Modal

                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <View
                        style={{ backgroundColor: '#fff', width: 330, height: 170, borderRadius: 20, marginHorizontal: '10%', marginVertical: '80%', alignItems: 'center' }}
                    >
                        <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>Nova lista</Text>
                        </View>

                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 100 }}>

                            <View style={{ width: '90%', height: "85%", justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                                <TextInput
                                    placeholder='Nome da lista'
                                    placeholderTextColor={'#8E8E8E'}
                                    style={{ backgroundColor: '#d7d8d7', width: 280, height: 31, borderRadius: 5, fontSize: 12, justifyContent: 'flex-end' }}>

                                </TextInput>
                                <TextInput
                                    placeholder='Descrição'
                                    placeholderTextColor={'#8E8E8E'}
                                    style={{
                                        backgroundColor: '#d7d8d7', width: 280, height: 50
                                        , borderRadius: 5, fontSize: 12
                                    }}
                                    value={descricao}
                                    onChangeText={text => setDescricao(text)}
                                    >

                                </TextInput>
                            </View>

                        </View>
                        <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                            <TouchableOpacity
                                style={{ borderWidth: 1, borderColor: '#000', width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold' }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ backgroundColor: '#000', width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                                onPress={ExibirDescricao}>
                                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>Salvar</Text>
                            </TouchableOpacity>
                        </View>


                    </View>


                </Modal>

            </View>

            <View style={{ marginTop: 20 }}>
                <BtnGoBack onPress={() => { navigation.navigate('ProfileX') }} />
            </View>

            <View style={styles.viewTitle}>
                <Text style={styles.txtTitle}>Minhas listas</Text>

            </View>
            <View style={styles.mainList}>
         
           <Text style={{ fontSize: 30 }}>{descricao}</Text>
               
                
            </View>
            <View style={styles.footerBtnCreateList}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#000', fontSize: 40 }}>+</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}