import React, { Component } from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class SignUp extends Component<{}> {

  signin() {
    Actions.signin()
  }

  render() {
    return(
      <View style={styles.container}>
        <Logo />
        <Form type="SignUp"/>
        <View style={styles.footer}>
          <Text>Robo is cool</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.signin}>
              <Text style={styles.link}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  link: {
    bottom: 5,
    fontWeight: '500',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  footer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
});
