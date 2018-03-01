import React, { Component } from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './src/pages/SignIn';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

      	<StatusBar
      	  style={styles.statusBar} />

        <SignIn />

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
  statusBar: {
    backgroundColor: '#F5FCFF',
  },
  welcomeLogo: {
    height: '20%',
    width: '40%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
