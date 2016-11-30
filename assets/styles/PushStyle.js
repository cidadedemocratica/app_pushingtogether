'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  icon: {
    width: 70,
    height: 50
  },
  view:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#DAEBF2'
  },
  content: {
    padding: 10
  },
  title: {
    fontSize: 22,
    paddingLeft: 10,
  },
  textCenter: {
    textAlign: 'center'
  },
  text: {
    paddingTop: 10,
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
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 10,
    textAlign: 'center'
  },
  imageHeader: {
    width: 70,
    height: 70
  },
  buttonImageSmall: {
    width: 30,
    height: 30
  },
  buttonImage: {
    width: 50,
    height: 50
  },
  buttonImageLarge: {
    width: 65,
    height: 65
  }
});
