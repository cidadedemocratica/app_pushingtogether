import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    //if (loged) { open the Main Page
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#00abd7', alignItems: 'flex-start'}}>
       <Image
          style={{ }}
          source={require('../assets/images/ej_icon_03splash_2.png')}
        />
      </View>
    );
  }
}

