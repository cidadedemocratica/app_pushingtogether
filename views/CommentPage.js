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

export default class CommentPage extends Component {
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
          <TextInput
            multiline={true}
            numberOfLines={40}
            maxLength={400}
            style={s.input}
            placeholder="Contribute to the discussion with your comment....."
            placeholderTextColor="silver"
            onChangeText={(text) => this.setState({text})}
          />
          <Button onPress={() => onButtonPressCommentSave(this.props.navigator) } title="Comment" accessibilityLabel="Send a comment to the conversation" />
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
