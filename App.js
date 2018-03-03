import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './src/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <Routes/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
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
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
