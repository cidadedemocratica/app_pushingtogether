'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  all: {
    flex: 1,
    alignItems: 'center',
  },
  view:{
    backgroundColor: '#DAEBF2',
    justifyContent: 'center',
    flex: 1
  },
  sign :{
    fontSize: 30,
    paddingBottom: 15
  },
  text:{
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textNoPadding:{
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 2,
    paddingBottom: 2,
  },
  textSmall: {
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 10
  },
  textLink: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textDecorationLine: 'underline'
  },
  textSmallLink: {
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 10,
    textDecorationLine: 'underline',
    color: '#666'
  },
  button: {
    padding: 50,
    marginBottom: 10
  },
  icon: {
    width: 70,
    height: 50
  },
  gap: {
    paddingTop: 5
  }

});
