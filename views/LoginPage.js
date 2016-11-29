'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';

var NavigationBarRouteMapper = require('./partials/HeaderBar');
var s = require('../assets/styles/LoginStyle.js');
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={{}}>
        <Image
          style={{ }}
          source={require('../assets/images/ej_icon_03extra_1.png')}

        />
        <ScrollView style={{paddingLeft:40,paddingTop: 20, paddingRight: 40}}>
          <Text style={s.sign} >
            <Icon name="sign-in" size={35} /> Sign In
          </Text>
          <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => onButtonPressFacebook(this.props.navigator)} accessibilityLabel="Login to facebook" >
            Login with Facebook
          </Icon.Button>
          <Text style={s.text}>If you enter with facebook you agree with our terms of use</Text>
          <Icon.Button name="google" backgroundColor="#4285f4" onPress={() => onButtonPressGoogle(this.props.navigator)} accessibilityLabel="Login to google" >
            Sign in with Google
          </Icon.Button>
          <Text style={s.text}>If you enter with google you agree with our terms of use</Text>
          <Text style={s.text}>If you click 'Sign in with Facebook' and are not a pol.is user, you will be registered and you agree to the pol.is terms and privacy policy</Text>
        </ScrollView>
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

var onButtonPressFacebook = function(navigator) {
    navigator.push({id: 'MainPage'})
};
var onButtonPressGoogle = function(navigator) {
    navigator.push({id: 'Google'})
};
