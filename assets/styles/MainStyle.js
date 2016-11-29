'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 5,
    right: 5
  },
  all: {
    flex: 1,
  },
  view:{
    padding: 0
  },
  buttonImage: {
    width: 50,
    height: 50
  }
});
