import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { getAccount, getFavoriteSeries } from '../../../services/api';
import { Context } from '../../../context';
import Api from '../../../services/api';
import styles from './styles';
export default function SerieList({ navigation, onPressFavorite, onPressEvaluation, nameUser }) {
    const [idUser, setIdUser] = useState([])
    const [seriesListFavorite, setSeriesListFavorite] = useState([])

    const apikey = 'ecd878f5eb6f5ca388735c699adaff80';
    const { sessionId } = useContext(Context)

    useEffect(() => {
        const getAccountId = async () => {
            const response = await getAccount(sessionId);
            setIdUser(response.data.results)
           console.log(response.data.id)
        };
        getAccountId();
    }, [sessionId]);


    useEffect(() => {
        const init = async () => {
            const response = await Api.get(`/account/${idUser}/favorite/tv?api_key=${apikey}&session_id=${sessionId}`)
            setSeriesListFavorite(response.data.results);
        };
        init();
    }, [idUser, apikey, sessionId])

    const DATA2 = [
        { id: '0' },
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },

    ]
    return (
        <View style={{ width: '100%', }}>

            <View style={styles.headerFavorites}>
                <View style={styles.viewTextFavorites}>
                    <Text style={styles.textFavorites}>Séries favoritas de {nameUser}</Text>
                    <TouchableOpacity onPress={onPressFavorite}>
                        <Text style={styles.textViewAll}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewListFavorites}>
                    {seriesListFavorite.map((item, i) => i < 4 ?
                        <TouchableOpacity key={i} style={styles.styleItem}>
                          <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={styles.styleItem} />
                        </TouchableOpacity> : null)
                    }
                </View>

            </View>
            <View style={styles.headerEvaluation}>
                <View style={styles.viewTextEvaluation}>
                    <Text style={styles.textEvaluation}>Avaliações de séries recentes de {nameUser}</Text>
                    <TouchableOpacity onPress={onPressEvaluation}>
                        <Text style={styles.textViewAll}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewListEvaluation}>
                    {
                    
                    DATA2.map((item, i) => i < 5 ?
                        <TouchableOpacity key={i} style={styles.styleItem}>
                            <Text>{item.id}</Text>
                        </TouchableOpacity> : null)
                    }
                </View>

            </View>
        </View>
    );

}