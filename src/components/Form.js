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

export default class Form extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba( 0, 0, 0, 0)'
          placeholder="Username or Email"/>

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid='rgba( 0, 0, 0, 0)'
            secureTextEntry={true}
            placeholder="Password"/>


            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>
                  {this.props.type} with <Image
                    style={styles.logo}
                    source={ require('../images/icon_google.png') } />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this._onPressButton}>
                <Text style={styles.buttonText}>
                  {this.props.type} with <Image
                    style={styles.logo}
                    source={ require('../images/icon_facebook.png') } />
                </Text>
            </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#E0E0E0',
  },
  logo: {
    height: 50,
    width: 50,
  },
  inputBox: {
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
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
