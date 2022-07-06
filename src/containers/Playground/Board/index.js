import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import sortImg from '../../../../assets/icons/sort-drop.png';
import mainBoardImg from '../../../../assets/icons/main-board.png';
import InsetShadow from 'react-native-inset-shadow';
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

export const Board = props => {
  const [levelCount, setLevelCount] = useState(5);
  const [nextImg, setNextImg] = useState(
    tempImgNum[Math.floor(Math.random() * 9)],
  );
  const [started, setStarted] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [tiles, setTiles] = useState([[], [], [], [], [], [], []]);
  const countArry = [1, 1, 1, 1, 1];

  const gameStart = () => {
    if (started) {
      console.log('started', tiles);
      setTiles([[], [], [], [], [], [], []]);
      randomStart();
    } else {
      setStarted(true);
      randomStart();
    }
  };
  const randomStart = () => {
    let _tiles = [[], [], [], [], [], [], []];
    [0, 1, 2, 3, 4, 5, 6, 7].map(item => {
      const randVal = Math.floor(Math.random() * 7);
      console.log('item', item, randVal);
      _tiles[randVal].push(tempImgNum[Math.floor(Math.random() * 7)]);
    });
    setTiles([..._tiles]);
    setLevelCount(5);
  };

  const touchCol = e => {
    // console.log('Touched', e, tiles);
    let _tiles = [];
    if (started) {
      console.log('Tiles', tiles);
      let idleCol = 0;
      tiles.map((tilecol, i) => {
        if (i === e) {
          console.log('_tiles, tilecol', _tiles.length, tilecol.length, i);
          if (tilecol?.length < 7) {
            _tiles.push([...tilecol, nextImg]);
          } else {
            _tiles.push([...tilecol]);
            idleCol = 1;
          }
        } else {
          _tiles.push([...tilecol]);
        }
      });
      if (idleCol === 0) {
        if (levelCount > 1) {
          setLevelCount(levelCount - 1);
          setTiles([..._tiles]);
        } else {
          setLevelCount(5);
          [0, 1, 2, 3, 4, 5, 6].map(item => {
            if (_tiles[item].length < 7) {
              _tiles[item].unshift(tempImgNum[8]);
            } else {
              setStarted(false);
              props.submit(true);
            }
          });
          setTiles([..._tiles]);
        }
        setNextImg(tempImgNum[Math.floor(Math.random() * 9)]);
      }
    }
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
      <ImageBackground
        source={mainBoardImg}
        resizeMode="cover"
        style={styles.mainBoard}>
        {tiles.map((tilecol, i) => (
          <TouchableOpacity onPress={() => touchCol(i)} style={styles.touchCol}>
            {tilecol.map((tile, j) => (
              <Image
                source={tile}
                key={j}
                style={styles.tileItem}
                resizeMode="contain"
              />
            ))}
          </TouchableOpacity>
        ))}
      </ImageBackground>
      {/* Start Button */}
      <TouchableOpacity style={styles.startBtn} onPress={() => gameStart()}>
        {started ? (
          <Text style={styles.startTxt}>Restart</Text>
        ) : (
          <Text style={styles.startTxt}>Start</Text>
        )}
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
    height: 358,
    paddingBottom: 4,
    marginTop: -25,
  },
  touchCol: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: '100%',
    width: (Dimensions.get('window').width - 50) / 7,
  },
  tileItem: {
    width: 50,
    height: 50,
    marginTop: 0,
  },
  imgBoard: {
    alignItems: 'flex-start',
    margin: 0,
    width: '100%',
  },
  startBtn: {
    backgroundColor: 'green',
    height: 35,
    width: 120,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  startTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});
