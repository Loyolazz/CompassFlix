import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles'

import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons'

const ModalConfirmationAddList = ({modalVisible, onPress}) => {
  return (
    <Modal transparent={true} visible={modalVisible} onRequestClose={onPress}>
      <View style={styles.background}>
        <View style={styles.body}>
          <IconCheck
            name='check-circle-outline'
            color={'#000'}
            style={styles.title}
          />

          <Text style={{color: '#000', fontWeight: 'bold'}}>Lista atualizada com sucesso!</Text>


          <View style={{marginTop: 22, marginBottom: 10, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}></View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnOk} onPress={onPress}>
              <Text style={styles.textOk}>ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmationAddList;
