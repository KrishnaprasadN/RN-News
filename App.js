/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsProvider from './src/network/NewsProvider';
import HomeComponent from './src/components/HomeComponent'
import NewsDetailComponent from './src/components/NewsDetailComponent'

//const App: () => React$Node = () => {
class App extends Component {
  async getnews() {
    // get the top news
    var newsItems = await NewsProvider.getTopNews();
    console.log(JSON.stringify(newsItems))

    // get the news details
    var newsDetail = await NewsProvider.getNewsDetail(1);
    console.log(JSON.stringify(newsDetail))
  }

  render() {
    SplashScreen.hide();
    this.getnews()

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <SafeAreaView>
            <HomeComponent title="Home Screen"/>
        </SafeAreaView>
      </View>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
