import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import CardList from '../../Components/seeMovieListComp/index';
import styles from './style copy';
import BtnGoBack from '../../Components/ProfileComp2/btnGoBack/btn';
import {TextInput} from 'react-native-gesture-handler';
import {getAccount, getList, deleteList, createList} from '../../services/api';
import {Context} from '../../context';
import ModalExitAccount from '../../Components/ModalExitAccount';

export default function SeeMovieList({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [nameList, setNameList] = useState('');
  const [dataUser, setDataUser] = useState('');
  const [list, setList] = useState({});
  const [del, setDel] = useState('');
  const {sessionId, evaluation, setEvaluation} = useContext(Context);
  const [visibleBtnDel, setVisibileBtnDel] = useState(false);
  const [idItem, setIdItem] = useState();

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setDataUser(response.data.id);
    };
    getResponseAccount();
  }, [sessionId, evaluation]);

  useEffect(() => {
    const getListMovies = async () => {
      const response = await getList(dataUser, sessionId);
      setList(response.data.results);
    };
    getListMovies();
  }, [dataUser, sessionId, evaluation]);

  const delIdList = async list_id => {
    await deleteList(list_id, sessionId);
    setVisibileBtnDel(!visibleBtnDel);
    setEvaluation(!evaluation);
  };


  const postCreateList = async (name, description) => {
    await createList(sessionId, name, description);
    setEvaluation(!evaluation);
    setModalVisible(!modalVisible)
  };


  return (
    <View style={styles.container}>
      <View>
        <ModalExitAccount
          modalExit={visibleBtnDel}
          title={'Deseja mesmo remover o filme?'}
          onPress={() => setVisibileBtnDel(false)}
          logout={() => delIdList(idItem)}
        />







        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.containerMyList}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Nova lista</Text>
            </View>

            <View style={styles.containerModal}>
              <View style={styles.containerTextInput}>
                <TextInput
                  placeholder="Nome da lista"
                  placeholderTextColor={'#8E8E8E'}
                  style={styles.styleInpuListName}
                  value={nameList}
                  onChangeText={setNameList}/>

                <TextInput
                  placeholder="Descrição"
                  placeholderTextColor={'#8E8E8E'}
                  style={styles.styleInpuListInput}
                  value={description}
                  onChangeText={setDescription}/>
              </View>
            </View>
            <View style={styles.containerBtnModal}>
              <TouchableOpacity
                style={styles.btnCancel}
                onPress={() => {
                  setModalVisible(!modalVisible) 
                 
                  
                }}>
                <Text style={styles.textCancel}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.btnSave}
                onPress={() => {
                  postCreateList(nameList, description),
                  setDescription(''),
                  setNameList('');
                }}
              >
                <Text style={styles.textSave}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>







      </View>

      <View style={{marginTop: 20}}>
        <BtnGoBack
          onPress={() => {
            navigation.navigate('ProfileX');
          }}
        />
      </View>

      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Minhas listas</Text>
      </View>

      <View style={styles.mainList}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => {
            return (
              <>
                <CardList
                  nameList={item.name}
                  qtdFilms={item.item_count}
                  deletelListPress={() => {
                    setVisibileBtnDel(!visibleBtnDel);
                    setIdItem(item.id);
                  }}
                />

                {/* <Text style={{ color: '#fff' }}>{item.id}</Text> */}
              </>
            );
          }}
        />
      </View>

      <View style={styles.footerBtnCreateList}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btnCreatList}>
          <Text style={{color: '#000', fontSize: 40}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
