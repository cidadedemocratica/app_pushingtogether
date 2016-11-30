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
    flex: 1
  },
  view:{
    paddingLeft: 10
  },
  buttonImage: {
    width: 50,
    height: 50
  },
  input: {
    height: 100,
    width: 200,
    backgroundColor: 'white',
    margin: 10

  },
});
