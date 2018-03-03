import React, { Component } from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="signin" component={SignIn} title="SignIn" initial/>
          <Scene key="signup" component={SignUp} title="SignUp"/>
        </Stack>
      </Router>
    );
  }
}
