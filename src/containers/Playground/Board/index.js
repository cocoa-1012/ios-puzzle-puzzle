import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import sortImg from '../../../../assets/icons/sort-drop.png';
import mainBoardImg from '../../../../assets/icons/main-board.png';

export const Board = () => {
  const [levelCount, setLevelCount] = useState(4);
  const countArry = [1, 1, 1, 1, 1];
  return (
    <View style={styles.container}>
      <View style={styles.levelCounter}>
        {countArry.map((item, i) => (
          <View style={styles.sortContainer} key={i}>
            {i < levelCount ? (
              <Image source={sortImg} style={styles.img}/>
            ) : (
              <Text></Text>
            )}
          </View>
        ))}
      </View>
      <View style={styles.mainBoard}>
        <Image source={mainBoardImg} style={styles.imgBoard} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  levelCounter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#292929',
    borderRadius: 4,
    height: 26,
    width: '100%',
  },
  sortContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get('window').width - 40) / 5,
  },
  mainBoard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: -20
  },
  imgBoard: {
    width: "100%",
  }

});
