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

var HeaderBar = require('./HeaderBar');

class MainPage extends Component {
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
        <ScrollView style={s.scroll}>
          <Text>
            Title/Subtitle/Some Text
          </Text>
        </ScrollView>
        <WebView
          javaScriptEnabled={true}
          source={{uri: 'http://www.3plusx.de/idc/test.html'}}
          style={{marginTop: 50}}
          scalesPageToFit={true}
        />
        <View style={s.buttons}>
          <View style={s.view}>
            <TouchableHighlight onPress={() => onButtonPressPush(this.props.navigator) }>
            <Image style={s.buttonImage} source={require('./assets/images/ej_push_button_B_01.png')} />
            </TouchableHighlight>
          </View>
          <View style={s.view}>
            <TouchableHighlight onPress={() => onButtonPressComment(this.props.navigator) }>
            <Image style={s.buttonImage} source={require('./assets/images/ej_comment_button_A_01.png')}/>
            </TouchableHighlight>
          </View>
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

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <View>
      <Image
        style={s.icon}
        source={require('./assets/images/ej_icon_03small.png')}
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

var s = StyleSheet.create({
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    right:0
    
  },
  all: {
    flex: 1,
  },
  view:{
    padding: 10
  },
  icon: {
    width: 70, 
    height: 50
  },
  buttonImage: {
    width: 75, 
    height: 75
  }
});

module.exports = MainPage;
