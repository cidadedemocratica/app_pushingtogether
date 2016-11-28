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
    bottom: 10,
    right:0
  },
  all: {
    flex: 1,
  },
  view:{
    padding: 10
  },
  buttonImage: {
    width: 75, 
    height: 75
  }
});
