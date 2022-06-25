import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import menuImg from "../../assets/icons/menu.png";
export const MainButton = (props) => {
    console.log("MainButton Props:::", props.submit)
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.submit(true)}>
            <LinearGradient colors={['#44cac9', '#3c85d6']} style={styles.linearGradient}>
                <Image source={menuImg} style={styles.img} />
                <Text style={styles.text}>Menu</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 88,
        height: 26,
        borderRadius: 6,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.1)",
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