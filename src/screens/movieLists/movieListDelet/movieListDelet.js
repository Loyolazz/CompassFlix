import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons"
import Arrow from "react-native-vector-icons/Feather";
import Api from "../../../services/api";


export default function MovieListDelet({ }) {
    const [movieButtonFocused, setMovieButtonFocused] = useState(true);
    


    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{alignItems: 'flex-start', width: '100%', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, paddingTop: 20}}>
                <TouchableOpacity
                    style={styles.bnt}
                    onPress={() => navigation.navigate('TabBottomRoutes')}>
                    <Arrow name="arrow-left" size={23} color={'#000'} style={{}} />
                </TouchableOpacity>
                <View style={styles.containerStart}>
                    <View style={styles.containerButtonSandM}>
                        <View style={styles.borderButton}>
                            <TouchableOpacity
                                onPress={() => {
                                    setMovieButtonFocused(true);
                                }}>
                                {movieButtonFocused ? (
                                    <Icon
                                        name='eye'
                                        size={37}
                                        color='#bd1451'
                                        style={styles.Icon}
                                    />
                                ) : (
                                    <Icon
                                        name='eye'
                                        size={37}
                                        style={styles.Icon}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.borderButton}>
                            <TouchableOpacity
                                onPress={() => {
                                    setMovieButtonFocused(false);
                                }}>
                                {!movieButtonFocused ? (
                                    <Icon
                                        name='pencil'
                                        size={35}
                                        color='#bd1451'
                                        style={styles.Icon}
                                    />
                                ) : (
                                    <Icon
                                        name='pencil'
                                        size={35}
                                        style={styles.Icon}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ color: '#E9A6A6' }}>Filmes que mudaram a minha vida</Text>
            </View>
            <View>
                <Text style={{ color: '#FFFFFF' }}>Essa é uma lista de filmes que vai mudar a sua vida e gerar reflexão sobre diversos temas. Aproveite para unir o útil ao agradável e usar seu tempo livre para conhecer histórias inspiradoras.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStart: {
        //width: '100%',
        //alignItems: 'flex-end'
    },
    containerButtonSandM: {
        flexDirection: 'row',
        paddingTop: 22,
        backgroundColor: '#000000',
        width: 120,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderEndWidth: 1,
        borderRadius: 20,
        borderColor: '#E9A6A6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonMidia: {
        //alignItems: 'center',
        //width: 28,
        //height: 28,
    },
    borderButton: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon: {
        bottom: 12
    },
    bnt: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})