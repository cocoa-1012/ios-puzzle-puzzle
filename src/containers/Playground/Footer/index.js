import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import backImg from "../../../../assets/icons/black-background.png";

export const Footer = () => {
    return (
        <View>
            <Image source={backImg} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        // width: "100%",
    },
    img: {
        display: "flex",
        // width: "100%"
    }
})