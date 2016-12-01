import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

var s = require('../../assets/styles/partials/HeaderStyle');

module.exports = {
  LeftButton(route, navigator, index, navState) {
    return (
      <View
        style={s.view}
        onPress={() => this.props.navigator.push({id: 'MainPage'})}
      >
      <Image
        style={s.logo}
        source={require('../../assets/images/ej_app_icon_small_B.png')}
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

