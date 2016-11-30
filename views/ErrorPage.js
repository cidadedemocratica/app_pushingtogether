'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';

var NavigationBarRouteMapper = require('./partials/HeaderBar');
var s = require('../assets/styles/LoginStyle.js');


export default class ErrorPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, backgroundColor: '#FFB380', alignItems: 'flex-start', paddingTop: 50, paddingLeft: 20}}>
       <Image
          style={{ }}
          source={require('../assets/images/ej_404_01_graphic.png')}
        />
        <View style={{marginTop: 50, paddingLeft: 30, paddingRight: 30}}>
          <Text style={s.text}>Oups, sorry for that!!!{"\n"}(I just got started and I make sometimes errors.)</Text>
          <Text style={s.text}>Please try again (later) or</Text>
          <View>
          <TouchableOpacity
             onPress={ () =>{
               Linking.openURL("https://github.com/cidadedemocratica/app_pushingtogether")
               .catch(err => console.error('An error occurred', err)); }}
          >
           <Text style={s.textLink}>
              or file a bug report at our GitHub page.
           </Text>
          </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'Main Page',
    });
  }
}

