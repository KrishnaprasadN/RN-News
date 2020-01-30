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
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <HomeComponent />
        </SafeAreaView>
      </>
    );
  };
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
