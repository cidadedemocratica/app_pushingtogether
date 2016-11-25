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
} from 'react-native';

var HeaderBar = require('./HeaderBar');

class CommentPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <ScrollView style={{paddingTop:50}}>
          <Text style={{backgrondColor: 'yellow', color: 'green'}}>
            In this we put the iframe from pol.is
            Mussum Ipsum, cacilds vidis litro abertis. 
            Atirei o pau no gatis, per gatis num morreus. 
            Copo furadis é disculpa de bebadis, arcu quam 
            euismod magna. Si num tem leite então bota uma 
            pinga aí cumpadi! Nec orci ornare consequat. 
            Praesent lacinia ultrices consectetur. Sed non 
            ipsum felis. 
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
          />
          <Button 
            onPress={() => onButtonPressCommentSave(this.props.navigator) } 
            style={{left:0}}title="Send" color="#841584" accessibilityLabel="Push Notification" 
          />
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
var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
         Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <HeaderBar 
        navigator={navigator} /> 
    );
  }
};

module.exports = CommentPage;
