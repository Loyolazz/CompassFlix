import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function HeaderSeriesDefault({ nameUser, photoUser, onPress }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress} style={styles.viewPhoto}>
                <Image source={photoUser} style={styles.stylePhoto}></Image>

            </TouchableOpacity>

            <View style={styles.containerText}>


                <View style={styles.containerNameUser}>
                    <View style={styles.viewNameUser}>

                        <View style={styles.containerRow}>
                            <Text style={styles.title}>Olá,</Text>
                            <Text style={styles.label}>{nameUser}</Text>
                            <Text style={styles.title}>!</Text>
                        </View>

                    </View>


                </View>


            </View>
            <Text style={styles.description}>
                Reveja ou acompanhe os séries que você assistiu...
            </Text>
            <Text style={styles.popularSeries}>
                Séries populares este mês
            </Text>
        </View>
    )
}