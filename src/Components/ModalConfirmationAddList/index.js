import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles'

import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons'

const ModalConfirmationAddList = ({modalVisible, onPress, title, icon, colorIcon}) => {
  return (
    <Modal transparent={true} visible={modalVisible} onRequestClose={onPress}>
      <View style={styles.background}>
        <View style={styles.body}>
          <IconCheck
            name={icon}
            color={colorIcon}
            style={styles.title}
          />

          <Text style={{color: '#000', fontWeight: 'bold', marginTop: 15}}>{title}</Text>


          <View style={{marginTop: 20, marginBottom: 8, alignItems: 'center'}}>
          
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
