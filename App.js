/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import LoginScreen from './src/screens/Login'
import HomeScreen from './src/screens/Home'

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {

  render() {
    return <AppContainer />;
  }
}