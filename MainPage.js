'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

var HeaderBar = require('./HeaderBar');

class MainPage extends Component {
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
        <TouchableHighlight style={{backgroundColor: 'yellow', padding: 10}}
            onPress={this.gotoPersonPage.bind(this)}>
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
        </TouchableHighlight>
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

module.exports = MainPage;
