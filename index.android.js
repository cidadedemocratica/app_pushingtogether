/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  BackAndroid,
} from 'react-native';

var SplashPage = require('./views/SplashPage');
var LoginPage = require('./views/LoginPage');
var MainPage = require('./views/MainPage');
var PersonPage = require('./views/PersonPage');
var CommentPage = require('./views/CommentPage');
var PushPage = require('./views/PushPage');
var NoNavigatorPage = require('./views/NoNavigatorPage');
var _navigator;
class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    _navigator = navigator;
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'PushPage') {
      return (
        <PushPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'CommentPage') {
      return (
        <CommentPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={s.view}>
        <TouchableOpacity style={s.touchNoRoute}
            onPress={() => navigator.pop()}>
          <Text style={s.textNoRoute}>No existem rotas para este contenido</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


BackAndroid.addEventListener('hardwareBackPress', function() {  
  if (_navigator.getCurrentRoutes().length === 2 ) {
     return false;
  }
  _navigator.pop();
  return true;
});

var s = StyleSheet.create({
  view: {
    flex: 1, 
    alignItems: 'stretch', 
    justifyContent: 'center'
  },
  touchNoRoute: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textNoRoute: {
    color: 'red', 
    fontWeight: 'bold'
  }
    
});

AppRegistry.registerComponent('app_pushingtogether', () => App);
