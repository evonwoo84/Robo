import React, { Component } from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Logo from '../components/Logo';
import SignInForm from '../components/SignInForm';

export default class SignIn extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>
        <Logo />

        <SignInForm />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
});
