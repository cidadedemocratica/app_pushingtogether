'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
  WebView,
} from 'react-native';
import Bounceable from "react-native-bounceable";

var NavigationBarRouteMapper = require('./partials/HeaderBar');
var s = require('../assets/styles/MainStyle');

export default class MainPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
     <View style={s.all}>
        <WebView
          javaScriptEnabled={true}
          source={require('../test.html')}
          style={{marginTop: 50}}
          scalesPageToFit={true}
        />
        <View style={s.buttons}>

          <Bounceable
            onPress={() => onButtonPressPush(this.props.navigator) }
            level={1.1}>
            <View style={s.view}>
              <TouchableHighlight onPress={() => onButtonPressPush(this.props.navigator) }>
              <Image style={s.buttonImage} source={require('../assets/images/buttons/ej_button_push_B_01.png')} />
              </TouchableHighlight>
            </View>
          </Bounceable>
          <Bounceable
            onPress={() => onButtonPressComment(this.props.navigator) }
            level={1.1}>

            <View style={s.view}>
              <TouchableHighlight onPress={() => onButtonPressComment(this.props.navigator) }>
              <Image style={s.buttonImage} source={require('../assets/images/buttons/ej_button_comment_B_01.png')}/>
              </TouchableHighlight>
            </View>
          </Bounceable>
        </View>
      </View>
    );
  }
  gotoPersonPage() {
    this.props.navigator.push({
      id: 'PersonPage',
      name: 'Person Page',
    });
  }
}

var onButtonPressPush = function(navigator) {
    navigator.push({id: 'PushPage'})
};

var onButtonPressComment = function(navigator) {
    navigator.push({id: 'CommentPage'})
};
