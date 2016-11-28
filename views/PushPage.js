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

class PushPage extends Component {
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
            In this we put the iframe from pol.is
            Mussum Ipsum, cacilds vidis litro abertis. 
            Atirei o pau no gatis, per gatis num morreus. 
            Copo furadis é disculpa de bebadis, arcu quam 
            euismod magna. Si num tem leite então bota uma 
            pinga aí cumpadi! Nec orci ornare consequat. 
            Praesent lacinia ultrices consectetur. Sed non 
            ipsum felis. 
          </Text>
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

module.exports = PushPage;
