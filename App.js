/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './src/screens/Login'
import HomeScreen from './src/screens/Home'
import AddCustomerScreen from './src/screens/AddCustomer'

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    AddCustomer: AddCustomerScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {

  render() {
    // return <Text />
    return <AppContainer />;
  }
}