import React from "react";
import { Image, Text, View } from "react-native";

import HeartIcon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export  function HeaderDetails({ Cartaz, Director, Nota, Votes, Year, Duration, TitleFilm }) {
    return (
        <View style={styles.containerCartazAndTitle}>
            <View style={styles.styleViewCartaz}>
                <Image
                    source={{ uri: Cartaz }}
                    style={styles.styleImgCartaz}
                />
            </View>
            <View style={styles.containerInfoFilm}>

                <View style={styles.containerTitleFilm}>
                    <View style={styles.titleFilm}>
                        <Text style={styles.titleFilmView}>{TitleFilm}</Text>
                       
                    </View>

                    <View style={styles.containerYearAndDuration}>
                        <Text style={styles.textYear}>{Year}</Text>
                        <Text style={styles.textDurantion}>{Duration}</Text>
                    </View>
                </View>
                 <View style={{ paddingHorizontal:10}}>
                 <Text style={styles.directorName}>Direção por <Text style={{ fontWeight: 'bold' }}>{Director}</Text></Text>
                 </View>
                <View style={styles.containerIconAndNote}>
                    <Text style={styles.styleNota}>{Nota}</Text>
                    <View style={styles.heart}>
                        <HeartIcon name="heart" size={30} color={'red'} />
                        <Text style={styles.votes}>{Votes}k</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}
