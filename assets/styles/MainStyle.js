'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  buttons:{
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5
  },
  all: {
    flex: 1
  },
  view:{
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 5
  },
  buttonImage: {
    width: 50,
    height: 50
  },
  imageHeader: {
    width: 75,
    height: 75
  },
  input: {
    height: 100,
    width: 200,
    backgroundColor: 'white',
    margin: 10

  },
  textCenter: {
    textAlign: 'center'
  },
  text: {
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  textSmall: {
    paddingTop: 0,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 10
  },
  textSmallCenter: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 10,
    textAlign: 'center'
  },
});
