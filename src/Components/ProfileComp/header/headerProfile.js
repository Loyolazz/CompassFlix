import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text,Image } from 'react-native';
import styles from './styles'
import IconExit from 'react-native-vector-icons/Ionicons'
export default function HeaderProfile({  nameUser, numberEvaluation, textEvaluation, photoUser, LogOut}) {
    const [visibleModal, setVisibleModal] = useState(false)
    return (
        <View style={styles.containerProfile}>

            <View style={styles.viewBtn}>
                <TouchableOpacity style={styles.styleBtn} onPress={() => setVisibleModal(true)}>
                    <IconExit name='exit-outline' size={20} color={'#000'} />
                    <Text style={styles.txtExit}>Sair</Text>

                    <Modal 
                        animationType='slide'
                        visible={visibleModal}
                        transparent={true}
                        onRequestClose={() => setVisibleModal(false)}
                    >
                        <View style={{ backgroundColor: '#fff', height: 150, borderRadius: 25, justifyContent: 'center', flex: 1, marginHorizontal: 40, marginVertical: 360, alignItems: 'center', paddingHorizontal: 15 }}>
                            <View style={{ justifyContent: 'flex-end', width: '100%', marginBottom: 40, marginLeft: 50 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#000' }}>Atenção!</Text>
                                <Text style={{ fontSize: 13, color: 'grey', marginTop: 15 }}>Deseja mesmo sair?</Text>
                            </View>

                            <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => setVisibleModal(false)} style={{ width: 90, height: 30, backgroundColor: '#000', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={LogOut} style={{ width: 90, height: 30, backgroundColor: '#fff', borderRadius: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}>
                                    <Text style={{ color: '#000' }}>Sim</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </Modal>

                </TouchableOpacity>


            </View>

            <View style={styles.viewProfileInfo}>
                <Image source={{uri:photoUser}} style={{ borderRadius: 60, width:90, height:90 }} />
                <Text style={styles.textNameUser}>{nameUser}</Text>
            </View>

            <View style={styles.viweEvaluation}>
                <Text style={styles.styleNumberEvaluation}>{numberEvaluation}</Text>
                <Text style={{ fontSize: 13, color: '#fff' }}>{textEvaluation}</Text>
            </View>

        </View>
    );
}