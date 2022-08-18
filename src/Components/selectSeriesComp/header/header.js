import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function HeaderSeries ({nameUser}) {
    return (
        <View style={styles.header}>
            <View style={styles.containerRow}>
                <Text style={styles.title}>Olá,</Text>
                <Text style={styles.label}>{nameUser}</Text>
                <Text style={styles.title}>!</Text>
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