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
  Image,
} from 'react-native';

var HeaderBar = require('./HeaderBar');
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => onButtonPressFacebook(this.props.navigator)} accessibilityLabel="Login to facebook" >
          Login with Facebook
        </Icon.Button>
        <Text style={s.text}>If you enter with facebook you agree with our terms of use</Text>
        <Icon.Button name="google" backgroundColor="#4285f4" onPress={() => onButtonPressGoogle(this.props.navigator)} accessibilityLabel="Login to google" >
          Sign in with Google
        </Icon.Button>
        <Text style={s.text}>If you enter with google you agree with our terms of use</Text>
        <Text style={s.text}>If you click 'Sign in with Facebook' and are not a pol.is user, you will be registered and you agree to the pol.is terms and privacy policy</Text>
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
    return (
      <View style={{padding:0, width: 250, height: 150}}>
      <Image
        style={{width: 150, height: 100}}
        source={require('./assets/images/ej_icon_03large.png')}
      />
      </View>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return null;
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
    margin: 20
  },
  text:{
    padding: 10,
  }

});
module.exports = LoginPage;
