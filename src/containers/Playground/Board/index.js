import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import sortImg from '../../../../assets/icons/sort-drop.png';
import mainBoardImg from '../../../../assets/icons/main-board.png';
import InsetShadow from 'react-native-inset-shadow';
import reducers from '../../../redux/reducers';
import numImg1 from '../../../../assets/icons/number-1.png';
import numImg2 from '../../../../assets/icons/number-2.png';
import numImg3 from '../../../../assets/icons/number-3.png';
import numImg4 from '../../../../assets/icons/number-4.png';
import numImg5 from '../../../../assets/icons/number-5.png';
import numImg6 from '../../../../assets/icons/number-6.png';
import numImg7 from '../../../../assets/icons/number-7.png';
import numImg8 from '../../../../assets/icons/lock-alt.png';
import numImg9 from '../../../../assets/icons/lock.png';
const tempImgNum = [
  numImg1,
  numImg2,
  numImg3,
  numImg4,
  numImg5,
  numImg6,
  numImg7,
  numImg8,
  numImg9,
];

export const Board = () => {
  const [levelCount, setLevelCount] = useState(5);
  const [nextImg, setNextImg] = useState(
    tempImgNum[Math.floor(Math.random() * 9)],
  );
  const countArry = [1, 1, 1, 1, 1];

  const handleClickBoard = () => {
    if (levelCount > 1) {
      setLevelCount(levelCount - 1);
    } else {
      setLevelCount(5);
    }
    setNextImg(tempImgNum[Math.floor(Math.random() * 9)]);
  };
  return (
    <View style={styles.container}>
      {/* Counter */}
      <View style={styles.levelCounter}>
        {/* <InsetShadow top={false} right={false} style={styles.insetShadow}> */}
        {countArry.map((item, i) => (
          <View style={styles.sortContainer} key={i}>
            {i < levelCount ? (
              <Image source={sortImg} style={styles.img} />
            ) : (
              <Text></Text>
            )}
          </View>
        ))}
        {/* </InsetShadow> */}
      </View>
      {/* Pattern Number */}
      <View style={styles.patternNumber}>
        <Image source={nextImg} />
      </View>
      {/* Board */}
      <TouchableOpacity
        style={styles.mainBoard}
        onPress={() => handleClickBoard()}>
        <Image
          source={mainBoardImg}
          style={styles.imgBoard}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          height: 35,
          width: 120,
          borderRadius: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => handleClickBoard()}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: '700'}}>
          Click
        </Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#292929',
    borderRadius: 4,
    height: 26,
    shadowColor: 'rgba(0, 0, 0, 0.18)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 16,
    width: '100%',
    marginTop: 5,
  },
  insetShadow: {
    width: '100%',
    height: 26,
    backgroundColor: 'red',
  },
  sortContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: (Dimensions.get('window').width - 40) / 5,
  },
  patternNumber: {
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBoard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginTop: -25,
  },
  imgBoard: {
    alignItems: 'flex-start',
    margin: 0,
    width: '100%',
  },
});
