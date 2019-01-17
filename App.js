/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  _onPressLoginButton() {
    Alert.alert('You tapped the Login!')
  }

  _onPressRegisterButton() {
    Alert.alert('You tapped the Register!')
  }

  _onPressForgetPasswordButton() {
    Alert.alert('You tapped the Forget Password!')
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (

      <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
        <Image source={pic} style={{width: 193, height: 110}}/>
        <View style={styles.alternativeLayoutContainer}>
          <Text style={styles.label}>User Name</Text>
          <TextInput style={styles.textField} placeholder="User Name" onChangeText={(text) => this.setState({text})}/>
        </View>

        <View style={styles.alternativeLayoutContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.textField} placeholder="Password" onChangeText={(text) => this.setState({text})}/>
        </View>

        <Button onPress={this._onPressLoginButton} title="Login"/>
        <Button onPress={this._onPressRegisterButton} title="Register"/>
        <Button onPress={this._onPressForgetPasswordButton} title="Forget Password"/>
        {/* </ScrollView> */}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textField: {
    fontSize: 20,
    height: 40,
  },
  alternativeLayoutContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
