import React, { Component } from 'react';
import LogoGoogle from '../images/icon_google.png';
import LogoFacebook from '../images/icon_facebook.png';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default class SignInForm extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>

        <TextInput
          style={styles.inputBox}
          placeholder="Username or Email"/>

          <TextInput
            style={styles.inputBox}
            secureTextEntry={true}
            placeholder="Password"/>

        <View style={styles.containerSub}>
            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>
                  Sign In with <Image
                    style={styles.logo}
                    source={ require('../images/icon_google.png') } />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>
                  Sign In with <Image
                    style={styles.logo}
                    source={ require('../images/icon_facebook.png') } />
                </Text>
            </TouchableOpacity>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#E0E0E0',
  },
  containerSub: {
    flex: 2,
    backgroundColor: '#E0E0E0',
    marginVertical: 25,
  },
  logo: {
    height: 50,
    width: 50,
  },
  inputBox: {
    backgroundColor: '#F5FCFF',
    marginVertical: 5,
    width: 300,
  },
  button: {
    backgroundColor: '#757575',
    borderRadius: 5,
    marginVertical: 5,
    paddingVertical: 10,
    width: 300,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
});
