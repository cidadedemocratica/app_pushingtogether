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

import SplashPage from './views/SplashPage';
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';
import PersonPage from './views/PersonPage';
import CommentPage from './views/CommentPage';
import PushPage from './views/PushPage';
import NoNavigatorPage from './views/NoNavigatorPage';
import ErrorPage from './views/ErrorPage';
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
        <ErrorPage
            navigator={navigator} />
      );
    }
    if (routeId === 'ErrorPage') {
      return (
        <ErrorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <ErrorPage
          navigator={navigator} />
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
