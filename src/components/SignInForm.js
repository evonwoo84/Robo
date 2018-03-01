import React, { Component } from 'react';
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

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>Sign In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>Sign In with Facebook</Text>
            </TouchableOpacity>

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
  inputBox: {
    backgroundColor: '#F5FCFF',
    borderRadius: 25,
    width: 300,
  },
  button: {
    backgroundColor: '#afdde9',
    borderRadius: 5,
    marginVertical: 5,
    paddingVertical: 10,
    width: 300,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
