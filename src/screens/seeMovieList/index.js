import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import CardList from '../../Components/seeMovieListComp/index';
import styles from './style copy';
import BtnGoBack from '../../Components/ProfileComp2/btnGoBack/btn';
import {TextInput} from 'react-native-gesture-handler';
import {getAccount, getList, deleteList, createList} from '../../services/api';
import {Context} from '../../context';
import Load from '../../Components/Load';
import ModalExitAccount from '../../Components/ModalExitAccount';
import ModalConfirmationAddList from '../../Components/ModalConfirmationAddList';

export default function SeeMovieList({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [nameList, setNameList] = useState('');
  const [dataUser, setDataUser] = useState('');
  const [list, setList] = useState({});
  const [visibleError, setVisibleError] = useState(false);

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
    if (!nameList) {
      return setVisibleError(!visibleError);
    }

    await createList(sessionId, name, description);
    setEvaluation(!evaluation);
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View>
        <ModalExitAccount
          modalExit={visibleBtnDel}
          title={'Deseja mesmo remover essa lista?'}
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
                  onChangeText={setNameList}
                />

                <TextInput
                  placeholder="Descrição"
                  placeholderTextColor={'#8E8E8E'}
                  style={styles.styleInpuListInput}
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
            </View>
            <View style={styles.containerBtnModal}>
              <TouchableOpacity
                style={styles.btnCancel}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textCancel}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnSave}
                onPress={() => {
                  postCreateList(nameList, description),
                    setDescription(''),
                    setNameList('');
                }}>
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

      {list ? (
        <View style={styles.mainList}>
          <FlatList
            data={list}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item}) => {
              return (
                <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
                  <CardList
                    nameList={item.name}
                    qtdFilms={item.item_count}
                    pressCard={() => {
                      setIdItem(item.id),
                        navigation.navigate('MovieList', {item});
                    }}
                    deletelListPress={() => {
                      setVisibileBtnDel(!visibleBtnDel);
                      setIdItem(item.id);
                    }}
                    />
                </View>
              );
            }}
            ListEmptyComponent={
              <Text style={styles.TextEmptyList}>
                Você não criou nenhuma lista ainda, por favor clique no
                "+" para criar uma!
              </Text>
            }
          />
        </View>
      ) : (
        <Load />
      )}

      <View style={styles.footerBtnCreateList}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btnCreatList}>
          <Text style={{color: '#000', fontSize: 40}}>+</Text>
        </TouchableOpacity>
      </View>

      <ModalConfirmationAddList
        modalVisible={visibleError}
        onPress={() => setVisibleError(!visibleError)}
        title="Erro! Adicione um nome a lista.."
        icon="block-helper"
        colorIcon={'red'}
      />
    </View>
  );
}
