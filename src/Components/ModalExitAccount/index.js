import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

const ModalExitAccount = ({modalExit, onPress, logout, title}) => {
  return (
    <Modal transparent={true} visible={modalExit} onRequestClose={onPress}>
      <TouchableWithoutFeedback onPress={onPress} touchSoundDisabled>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxtHeader}>Atenção!</Text>
            <Text style={styles.modalTxtMid}>{title}</Text>
            <View style={styles.modalContainerFooter}>
              <View style={styles.modalContentFooter}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onPress}
                  style={styles.btn.cancelar}>
                  <Text style={styles.modalTxtFooter.white}>CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={logout}
                  style={styles.btn.sim}>
                  <Text style={styles.modalTxtFooter}>SIM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '90%',
    paddingHorizontal: 30,
    paddingVertical: 27,
  },
  modalTxtHeader: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
    marginBottom: 17,
    fontWeight: 'bold',
  },
  modalTxtMid: {
    fontSize: 13,
    lineHeight: 20,
    color: '#969696',
    marginBottom: 35,
  },
  modalContainerFooter: {
    alignItems: 'center',
  },
  modalContentFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    cancelar: {
      width: 85,
      height: 20,
      backgroundColor: '#000',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sim: {
      width: 85,
      height: 20,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  modalTxtFooter: {
    fontSize: 10,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 15,
    color: '#000',
    white: {
      fontSize: 10,
      fontFamily: 'OpenSans-Bold',
      color: '#fff',
    },
  },
});

export default ModalExitAccount;
