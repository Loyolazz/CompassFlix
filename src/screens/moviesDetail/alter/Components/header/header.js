import React from "react"
import { View, Text, Image } from "react-native"

import styles from "./styles"

export default function HeaderDetails({ batmanBanner, batmanCover, title, year, duration, note, director, votes }) {
    return (

        <View style={styles.bannerBack}>
            <Image style={styles.banner} source={batmanBanner} />
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.cover} source={batmanCover} />
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.year}>{year}</Text>
                </View>
                <Text style={styles.duration}>{duration} min</Text>
            </View>
            <View style={styles.viewDirector}>
                <Text style={styles.director}>Direção por </Text>
                <Text style={styles.director}>{director}</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.imdb}>{note}</Text>
                </View>
                <View>
                    <Text style={styles.likes}>{votes}</Text>
                </View>
            </View>
        </View>


    )


}
