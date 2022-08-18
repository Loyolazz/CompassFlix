import React from "react";
import { View, Text} from "react-native";
import HeaderSeries from "../../Components/selectSeriesComp/header/header";
import styles from "./styles";

export default function SelectionSeries() {
    return(
     <View  style={styles.container}>
        <View style={styles.section}>
            <HeaderSeries/>
        </View>
     </View>
    )
}