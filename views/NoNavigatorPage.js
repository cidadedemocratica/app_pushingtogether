import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

var s = require('../assets/styles/NoNavigatorStyle');

class NoNavigatorPage extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <View style={s.all}>
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text>Erro 404</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = NoNavigatorPage;
