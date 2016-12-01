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
  Linking
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
      <View style={s.view}>
        <Image
          style={{ }}
          source={require('../assets/images/ej_app_icon_large_w.png')}

        />
        <ScrollView style={{paddingLeft:50,paddingTop: 20, paddingRight: 40}}>
          {/*
          // <Text style={s.sign} >
          //  <Icon name="sign-in" size={30} /> Sign In
          //  </Text>
           */}
          <Text style={s.sign} >
            Sign In
          </Text>
          <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => onButtonPressFacebook(this.props.navigator)} accessibilityLabel="Login to Facebook" >
            Login with Facebook
          </Icon.Button>
          <Text style={s.gap} >
          </Text>
          <Icon.Button name="google" backgroundColor="#4285f4" onPress={() => onButtonPressGoogle(this.props.navigator)} accessibilityLabel="Login to Google" >
            Sign in with Google
          </Icon.Button>
          <Text style={s.text}>If you sign in here and are not a pol.is user, you will be registered and you agree to the pol.is terms and privacy policy</Text>
          <TouchableOpacity
             onPress={ () =>{
               Linking.openURL("http://medialab-prado.es/article/madrid-inteligencia-colectiva-para-la-democracia")
               .catch(err => console.error('An error occurred', err)); }}
          >
           <Text style={s.textSmallLink} >Application made by Empujando Juntos Workshop @ IDC, Medialab Prado, Madrid, 2016</Text>

          </TouchableOpacity>
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
