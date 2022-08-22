import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getAccount, getFavoriteSeries } from '../../../services/api';
import { Context } from '../../../context';
export default function MoviesList({ navigation, onPressFavorite, onPressEvaluation, nameUser }) {

    const [idUser, setIdUser] = useState([])
    const [session, setSession] = useState([])

    //const apikey = 'api_key=80eb37af6714ab187d2c58f9acc83af3';
    const { sessionId } = useContext(Context)

    useEffect(() => {
        const getResponseMoviesFavorites = async () => {
            const response = await getAccount(sessionId);
            setIdUser(response.data.id)
            console.log(response.data.id)
        };
        getResponseMoviesFavorites();
    }, [sessionId]);

    useEffect(() => {
        const getResponseFavoritesSeries = async () => {
            const response = await getFavoriteSeries(sessionId,idUser )
            setSession(response.data.total_results)
            console.log(response.data)
        }
        getResponseFavoritesSeries();
    }, [sessionId, idUser]);
     
    //const apiKeyGet = `https://api.themoviedb.org/3/account/${idUser}/favorite/movies?api_key=${apikey}&session_id=ca87d64f641171d2bd7b6b2ce35ea2316b525ac0`

    const DATA = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
    ]
    const DATA2 = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
    ]
    return (
        <View style={{ width: '100%', }}>

            <View style={styles.headerFavorites}>
                <View style={styles.viewTextFavorites}>
                    <Text style={styles.textFavorites}>Filmes favoritas de {nameUser}</Text>
                    <TouchableOpacity onPress={onPressFavorite}>
                        <Text style={styles.textViewAll}>Ver tudo</Text>
                        <Text style={styles.textViewAll}>{session}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.viewListFavorites}>
                    {DATA.map((item, i) => i < 4 ?
                        <TouchableOpacity key={i} style={styles.styleItem}>
                            <Text>{item.id}</Text>
                        </TouchableOpacity> : null)
                    }
                </View>

            </View>

            <View style={styles.headerEvaluation}>
                <View style={styles.viewTextEvaluation}>
                    <Text style={styles.textEvaluation}>Avaliações de filmes recentes de {nameUser}</Text>
                    <TouchableOpacity onPress={onPressEvaluation}>
                        <Text style={styles.textViewAll}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewListEvaluation}>
                    {DATA2.map((item, i) => i < 5 ?
                        <TouchableOpacity key={i} style={styles.styleItem}>
                            <Text>{item.id}</Text>
                        </TouchableOpacity> : null)
                    }
                </View>

            </View>
        </View>
    );
}