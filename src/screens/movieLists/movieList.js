import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons"
import Arrow from "react-native-vector-icons/Feather";
import { apiKey } from "../../services/api";
import Api from "../../services/api";
import { styles } from "./style_movieList";

export default function MovieList({ navigation }) {
    const [movieButtonFocused, setMovieButtonFocused] = useState(true);
    const [listMovieDetails, setListMovieDetails] = useState([])
    const [listMovie, setListMovie] = useState([])

    useEffect(() => {
        const testelist = async () => {
            const response = await Api.get(`/list/8215543?api_key=${apiKey}&language=pt-BR`)
            setListMovie(response.data.items)
            setListMovieDetails(response.data)
        }
        testelist();
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{
                alignItems: 'flex-start',
                width: '100%', justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 20, paddingTop: 20
            }}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => navigation.navigate('TabBottomRoutes')}>
                    <Arrow name="arrow-left" size={23} color={'#000'} style={{}} />
                </TouchableOpacity>
                <View style={styles.ContainerStart}>
                    <View style={styles.ContainerButtonSandM}>
                        <View style={styles.BorderButton}>
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

                        <View style={styles.BorderButton}>
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
            <View style={{ paddingBottom: 10, alignItems: 'center' }}>
                <View>
                    <Text style={{ color: '#E9A6A6', paddingTop: 40 }}>{listMovieDetails.name}</Text>
                </View>
                <View>
                    <Text style={{ color: '#FFFFFF', paddingTop: 30 }}>{listMovieDetails.description}</Text>
                </View>
            </View>
            <View style={{ paddingTop: '10%', alignItems: 'center', justifyContent: 'space-between' }}>
                <FlatList
                    data={listMovie}
                    keyExtractor={(item, index) => `${index}`}
                    numColumns={4}
                    renderItem={({ item }) => {
                        const poster = `${item.poster_path}`
                        const id = `${item.id}`;
                        return (
                            <View style={{ justifyContent: 'space-between' }}>
                                <Image
                                    style={styles.Image}
                                    source={{ uri: `http://image.tmdb.org/t/p/w185/${poster}` }}
                                    onPress={() => {
                                        setSelectedId(id);
                                        navigation.navigate('MoviesDetail', { item });
                                    }}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    )
}

