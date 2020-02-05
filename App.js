import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeComponent from './src/components/HomeComponent'
import NewsDetailComponent from './src/components/NewsDetailComponent'

import 'react-native-gesture-handler';

// create the Stack Navigator
const AppStackNavigator = createStackNavigator(
  // Route Config
  {
    Home: {
      screen: HomeComponent,
    },
    NewsDetails: {
      screen: NewsDetailComponent,
    },
  },
  // Stack Navigator Config
  {
    initialRouteName: 'Home',
  }
);

// Create App container by passing navigator.
export default createAppContainer(AppStackNavigator);



