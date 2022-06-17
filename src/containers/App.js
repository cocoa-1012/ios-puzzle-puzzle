/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { MainButton } from '../components/MainButton';
import { StatsButton } from '../components/StatsButton';
import rootReducer from '../redux/reducers';
import { Playground } from './Playground';
import { Board } from './Playground/Board';
import { Footer } from './Playground/Footer';
import { HeaderSection } from './Playground/Header';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.container}>
          <HeaderSection />
          <Board />
          <Footer />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: '#404040',
    padding: 20
  },
  sectionContainer: {
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
