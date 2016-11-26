import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#00abd7', alignItems: 'center'}}>
       <Image
          source={require('./assets/images/ej_icon_03splash.png')}
        />
      </View>
    );
  }
}

module.exports = SplashPage;
