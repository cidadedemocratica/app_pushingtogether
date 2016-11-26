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
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <ScrollView style={{paddingTop:70}}>
          <Text>
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
        <View>
          <Button onPress={() => onButtonPressPush(this.props.navigator) } style={{left:0}}title="Push" color="#841584" accessibilityLabel="Push Notification" />
          <Button onPress={() => onButtonPressComment(this.props.navigator) } title="Comment" color="#841584" accessibilityLabel="Comment on the" />
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
      <View style={{padding:0}}>
      <Image
        style={{width: 70, height: 50}}
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

module.exports = MainPage;
