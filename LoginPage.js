'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

var HeaderBar = require('./HeaderBar');

class LoginPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={s.sign} >Sign In</Text>
        <Button onPress={() => onButtonPressFacebook(this.props.navigator) } title="Login with Facebook" color="#841584" accessibilityLabel="Login to facebook" />
        <Text>If you enter with facebook you agree with our terms of use</Text>
        <Button onPress={() => onButtonPressGoogle(this.props.navigator)} title="Login with Google" color="#841584" accessibilityLabel="Login to facebook" />
        <Text>If you enter with google you agree with our terms of use</Text>
        <Text>If you click 'Sign in with Facebook' and are not a pol.is user, you will be registered and you agree to the pol.is terms and privacy policy</Text>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'Main Page',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <HeaderBar 
        navigator={navigator} /> 
    );
  }
};
var onButtonPressFacebook = function(navigator) {
    navigator.push({id: 'MainPage'})
};
var onButtonPressGoogle = function(navigator) {
    navigator.push({id: 'MainPage'})
};

const s = StyleSheet.create({
  sign :{
    fontSize: 35,
  }

});
module.exports = LoginPage;
