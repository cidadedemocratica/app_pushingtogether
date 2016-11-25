import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class HeaderBar extends Component {
  render() {
    return (
      <TouchableOpacity style={s.header}>
        <Text style={s.label}>
          Empujando Juntos
        </Text>
      </TouchableOpacity>
    );
  }
}

var s = StyleSheet.create({
  header: {
    color: 'white',
  },
  label:{
    fontSize: 20,
  },
});
module.exports = HeaderBar;
