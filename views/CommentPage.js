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
var s = require('../assets/styles/CommentStyle');
import Icon from 'react-native-vector-icons/FontAwesome';

var NavigationBarRouteMapper = require('./HeaderBar');
var s = require('./CommentStyle');

class CommentPage extends Component {
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
        <ScrollView style={s.content}>
          <Text style={s.title}>
            Title
          </Text>
          <Text>
            Mussum Ipsum, cacilds vidis litro abertis.
            Atirei o pau no gatis, per gatis num morreus.
            Copo furadis é disculpa de bebadis, arcu quam
            euismod magna. Si num tem leite então bota uma
            pinga aí cumpadi! Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non
            ipsum felis.
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            maxLenght={40}
            style={s.input}
            onChangeText={(text) => this.setState({text})}
          />
          <Icon.Button name="send" onPress={() => onButtonPressCommentSave(this.props.navigator) } accessibilityLabel="Comment" >
            Send
          </Icon.Button>

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
var onButtonPressCommentSave= function(navigator){
  /* TODO: send comment for backend if ok go to MainPage else call a alert and stay in this page */
  navigator.push({id: 'MainPage'})
}

module.exports = CommentPage;
