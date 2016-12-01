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
  imageHeader: {
    width: 70,
    height: 70
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
