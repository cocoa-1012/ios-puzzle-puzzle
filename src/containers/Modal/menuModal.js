import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import playImg from "../../../assets/icons/play-again.png";
import shareImg from "../../../assets/icons/share.png";
import menuImg from "../../../assets/icons/main-menu.png";
import backImg from "../../../assets/icons/modal-background.png"

export const MenuModal = props => {
  return (
    <View>
      <Modal
        isVisible={props.isVisible}
        onBackdropPress={() => props.submit(false)}
        >
          <ImageBackground source={backImg} resizeMode="cover" style={styles.image}>
       
          <View style={styles.container}>
            <Text style={styles.highScore}>New High Score!</Text>
            <Text style={styles.score}>$304,505</Text>
            <TouchableOpacity style={styles.button}>
              <Image source={playImg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={menuImg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={shareImg} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 50,
  },
  highScore: {
    color: '#44cac9',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.03,
    textAlign: 'center',
  },
  score: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
  },
  linearGradient: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 39,
  },
  button: {
    display: 'flex',
    alignItems: "center",
   
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
