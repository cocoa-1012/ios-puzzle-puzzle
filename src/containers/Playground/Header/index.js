import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { MainButton } from "../../../components/MainButton";
import { StatsButton } from "../../../components/StatsButton";
import LinearGradient from "react-native-linear-gradient";
export const HeaderSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <MainButton />
                <StatsButton />
            </View>
            
            <View style={styles.currentScores}>
                <LinearGradient colors={['#262626', '#383838']} style={styles.linearGradient}>
                    <Text style={styles.levelText}>
                        Level : 10
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.scoreText}>$304,505</Text>
                </LinearGradient>
            </View>
            <View style={styles.highScores}>
                <LinearGradient colors={['#262626', '#383838']} style={styles.linearGradient}>
                    <Text style={styles.levelText}>
                        High Score
                    </Text>
                    <Text style={styles.scoreText}>$255.340</Text>
                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    currentScores: {
        height: 55,
        width: 150,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 6,
        borderColor: "#4d4d4d",
        borderWidth: 2
    },
    highScores: {
        height: 55,
        width: 105
    },
    linearGradient: {
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    levelText: {
        fontSize: 10,
        fontWeight: "700",
        color: "#ffc14c"
    },
    divider: {
        height: 2,
        width: "100%",
        backgroundColor: "#4d4d4d"
    },
    scoreText: {
        fontSize: 22,
        fontWeight: "700",
        color: "#fff",
    }
})