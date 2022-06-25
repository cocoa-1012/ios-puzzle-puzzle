import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import statsImg from "../../assets/icons/stats.png";
export const StatsButton = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log("Test button")}>
            <LinearGradient colors={['#58dcac', '#39ba93']} style={styles.linearGradient}>
                <Image source={statsImg} style={styles.img} />
                <Text style={styles.text}>Stats</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 88,
        height: 26,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 6,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.18)'
    },
    linearGradient: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    text: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 14,
    }
})