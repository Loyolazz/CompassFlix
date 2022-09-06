import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import Trash from 'react-native-vector-icons/EvilIcons';
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
const Counter = () => {
    const [counter, setCounter] = useCounter(0);
    return (
        <View>
            <Text>{counter}</Text>
            <TouchableOpacity title="clique aqui" onPress={() => setCounter()} ><Text>+</Text></TouchableOpacity>
        </View>
    );
};

export default function SeeMovieList({ navigation }) {
    const [counter, setCounter] = useCounter(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [description, setDescription] = useState('')
    const [nameList, setNameList] = useState('')
    // const [list, setList] = useState({
    //     nameList:nameList,
    //     description:description
    // });
    const ExibirDescricao = () => {
        return (
            <View style={{ backgroundColor: 'blue', width: '100%', flex: 1 }}>
                <Text>{nameList}</Text>
                <Text>{description}</Text>
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

                    <View style={styles.containerMyList}>

                        <View style={styles.viewTitle}>
                            <Text style={styles.title}>Nova lista</Text>
                        </View>

                        <View style={styles.containerModal}>

                            <View style={styles.containerTextInput}>

                                <TextInput
                                    placeholder='Nome da lista'
                                    placeholderTextColor={'#8E8E8E'}
                                    style={styles.styleInpuListName}
                                    value={nameList}
                                    onChangeText={text => setNameList(text)}
                                    >

                                </TextInput>

                                <TextInput
                                    placeholder='Descrição'
                                    placeholderTextColor={'#8E8E8E'}
                                    style={styles.styleInpuListInput}
                                    value={description}
                                    onChangeText={text => setDescription(text)}
                                    >
                                </TextInput>
                            </View>

                        </View>
                        <View style={styles.containerBtnModal}>

                            <TouchableOpacity
                                style={styles.btnCancel}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textCancel}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.btnSave}
                                onPress={ExibirDescricao}>
                                <Text style={styles.textSave}>Salvar</Text>
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
                <View style={styles.viewCardList}>
                    <View style={styles.styleCard }>
                        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>{nameList.toUpperCase()}</Text>
                        <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}>{description.toUpperCase()}</Text>
                    </View>

                    <View style={styles.viewTrash}>

                        <TouchableOpacity>
                            <Trash name='trash' size={34} color={'#EC2626'} />
                        </TouchableOpacity>

                    </View>


                </View>

            </View>

            <View style={styles.footerBtnCreateList}>

                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.btnCreatList}>
                    <Text style={{ color: '#000', fontSize: 40 }}>+</Text>
               
                </TouchableOpacity>

            </View>
        </View>
    );
}