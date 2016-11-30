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
  TextInput,
  Image,
} from 'react-native';


var NavigationBarRouteMapper = require('./partials/HeaderBar');
var s = require('../assets/styles/PushStyle');

export default class PushPage extends Component {
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
      <View style={s.view}>
        <ScrollView style={{paddingTop:50}}>
          <Text style={s.title}>
            Title
          </Text>
          <Text style={s.content}>
                          Push!
              Here you can push your
              arguments and comments
              deeper into the conversation
          </Text>
          <View style={{flex: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>
        </ScrollView>
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
var onButtonPressPushSave= function(navigator){
  /* TODO: send comment for backend if ok go to MainPage else call a alert and stay in this page */
  navigator.push({id: 'MainPage'})
}
