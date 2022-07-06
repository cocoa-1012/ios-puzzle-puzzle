/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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
import {MainButton} from '../components/MainButton';
import {StatsButton} from '../components/StatsButton';
import rootReducer from '../redux/reducers';
import {Playground} from './Playground';
import {Board} from './Playground/Board';
import {Footer} from './Playground/Footer';
import {HeaderSection} from './Playground/Header';
import {MenuModal} from './Modal/menuModal';
const store = createStore(rootReducer);

const App = () => {
  const [isModalVisible, setModalVisible] = useState(true);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.container}>
          <HeaderSection submit={setModalVisible} />
          <Board submit={setModalVisible} />
          <Footer />
          <MenuModal isVisible={isModalVisible} submit={setModalVisible} />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#404040',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
