import React, { Component } from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>

        <Image
          style={styles.welcomeLogo}
          source={ require('../images/icon_roboapp.png') } />

          <Text style={styles.welcomeLogoText}>RoboApp</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeLogo: {
    height: 120,
    width: 80,
  },
  welcomeLogoText: {
    marginVertical: 5,
    fontSize: 18,
  },
});