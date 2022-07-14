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
// import InsetShadow from 'react-native-inset-shadow';
import numImg1 from '../../../../assets/icons/number-1.png';
import numImg2 from '../../../../assets/icons/number-2.png';
import numImg3 from '../../../../assets/icons/number-3.png';
import numImg4 from '../../../../assets/icons/number-4.png';
import numImg5 from '../../../../assets/icons/number-5.png';
import numImg6 from '../../../../assets/icons/number-6.png';
import numImg7 from '../../../../assets/icons/number-7.png';
import numImg8 from '../../../../assets/icons/lock-alt.png';
import numImg9 from '../../../../assets/icons/lock.png';
const imageArray = [
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
  const [nextImg, setNextImg] = useState(Math.floor(Math.random() * 9));
  const [started, setStarted] = useState(false);
  const [tiles, setTiles] = useState([[], [], [], [], [], [], []]);
  const countArry = [1, 1, 1, 1, 1];
  const BLOCK = 10;

  useEffect(() => {
    const func = async () => {
      if (!started) return;
      await new Promise(r => setTimeout(r, 500));
      let _tiles = [...tiles];
      const bChanged = operateTiles(_tiles);
      if (bChanged) {
        setTiles([..._tiles]);
      } else {
        if (levelCount > 1) {
          setLevelCount(levelCount - 1);
        } else {
          setLevelCount(5);
          let bEnd = false;
          [0, 1, 2, 3, 4, 5, 6].map(item => {
            if (_tiles[item].length < 7) {
              _tiles[item].unshift(8);
            } else {
              bEnd = true;
            }
          });
          if (bEnd) {
            props.handleHighScore(
              props.score > props.highScore ? props.score : props.highScore,
            );
            setStarted(false);
            props.submit(true);
          } else {
            props.handleLevel(props.level + 1);
            props.handleScore(props.score + 700);
          }
          setTiles([..._tiles]);
        }
      }
    };
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiles]);

  const gameStart = () => {
    props.handleLevel(1);
    props.handleScore(0);
    // if (started) {
    //   console.log('started', tiles);
    //   setTiles([[], [], [], [], [], [], []]);
    // } else {
    setStarted(true);
    // }
    randomStart();
  };

  const randomStart = () => {
    let _tiles = [[], [], [], [], [], [], []];
    [0, 1, 2, 3, 4, 5, 6, 7].map(item => {
      const randVal = Math.floor(Math.random() * 7);
      console.log('item', item, randVal);
      _tiles[randVal].push(Math.floor(Math.random() * 7));
    });
    setTiles([..._tiles]);
    setLevelCount(5);
  };

  const connectCnt = (tile, i, j, ii, jj) => {
    const len = 7;
    let ci = i;
    let cj = j;
    let cnt = 0;
    while (ci >= 0 && cj >= 0 && cj < tile[ci].length) {
      ci -= ii;
      cj -= jj;
      cnt++;
    }
    ci = i + ii;
    cj = j + jj;
    while (ci < len && cj < tile[ci].length) {
      ci += ii;
      cj += jj;
      cnt++;
    }
    return cnt - 1;
  };

  const operateStone = (tile, i, j) => {
    const len = 7;
    const ii = [1, -1, 0, 0];
    const jj = [0, 0, 1, -1];
    for (let t = 0; t < 4; t++) {
      const ni = i + ii[t];
      const nj = j + jj[t];
      if (ni >= 0 && ni < len && nj >= 0 && nj < len) {
        if (tile[ni][nj] === 8) tile[ni][nj] = 7;
        else if (tile[ni][nj] === 7)
          tile[ni][nj] = Math.floor(Math.random() * 7);
      }
    }
  };

  const operateTiles = tile => {
    const len = 7;
    let bChanged = false;
    console.log('Operate Tile', tile);
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < tile[i].length; j++) {
        const rowCnt = connectCnt(tile, i, j, 1, 0);
        const colCnt = connectCnt(tile, i, j, 0, 1);
        if (
          tile[i][j] % BLOCK < 7 &&
          (tile[i][j] % BLOCK === rowCnt || tile[i][j] % BLOCK === colCnt)
        ) {
          bChanged = true;
          tile[i][j] += BLOCK;
          operateStone(tile, i, j); // Block should be ...
        }
      }
    }
    for (let i = 0; i < len; i++) {
      let j = 0;
      while (j < tile[i].length) {
        if (tile[i][j] >= BLOCK * 6) {
          tile[i].splice(j, 1);
        } else {
          j++;
        }
      }
    }
    return bChanged;
  };

  const touchCol = e => {
    // console.log('Touched', e, tiles);
    if (!started) return;

    console.log('Tiles', tiles);
    let _tiles = [];

    tiles.map((tilecol, i) => {
      if (i === e) {
        console.log('_tiles, tilecol', _tiles.length, tilecol.length, i);
        if (tilecol?.length < 7) {
          _tiles.push([...tilecol, nextImg]);
        } else {
          _tiles.push([...tilecol]);
        }
      } else {
        _tiles.push([...tilecol]);
      }
    });

    setTiles([..._tiles]);
    setNextImg(Math.floor(Math.random() * 9));
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
              <Text />
            )}
          </View>
        ))}
        {/* </InsetShadow> */}
      </View>
      {/* Pattern Number */}
      <View style={styles.patternNumber}>
        <Image source={imageArray[nextImg]} />
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
                source={imageArray[tile % BLOCK]}
                key={j}
                style={
                  Math.floor(tile / BLOCK) % 2 === 1
                    ? styles.tileItemRed
                    : styles.tileItem
                }
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
  tileItemRed: {
    width: 50,
    height: 50,
    marginTop: 0,
    backgroundColor: 'red',
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
