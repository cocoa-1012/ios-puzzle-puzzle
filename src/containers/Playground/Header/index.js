import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MainButton} from '../../../components/MainButton';
import {StatsButton} from '../../../components/StatsButton';
import LinearGradient from 'react-native-linear-gradient';
export const HeaderSection = props => {
  const numberWithSep = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <MainButton submit={props.submit} />
        <StatsButton />
      </View>
      <View style={styles.currentScores}>
        <LinearGradient
          colors={['#262626', '#383838']}
          style={styles.linearGradient}>
          <Text style={styles.levelText}>Level : {props.level}</Text>
          <View style={styles.divider} />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text
              style={{
                ...styles.scoreText,
                fontSize: 12,
                marginTop: 4,
                marginRight: 3,
              }}>
              $
            </Text>
            <Text style={styles.scoreText}>{numberWithSep(props.score)}</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.highScores}>
        <LinearGradient
          colors={['#262626', '#383838']}
          style={styles.linearGradient}>
          <Text style={styles.levelText}>High Score</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text
              style={{
                ...styles.scoreText,
                fontSize: 12,
                marginTop: 4,
                marginRight: 3,
              }}>
              $
            </Text>
            <Text style={styles.scoreText}>
              {numberWithSep(props.highScore)}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  currentScores: {
    height: 55,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 6,
    borderColor: '#4d4d4d',
    borderWidth: 2,
  },
  highScores: {
    height: 55,
    width: 105,
    borderRadius: 6,
    borderColor: '#4d4d4d',
    borderWidth: 2,
  },
  linearGradient: {
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  levelText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffc14c',
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#4d4d4d',
  },
  scoreText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Quicksand',
  },
  sep: {
    display: 'flex',
    padding: 10,
  },
});
