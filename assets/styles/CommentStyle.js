'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  all: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
    backgroundColor: '#DAEBF2'
  },
  content: {
    paddingTop: 50
  },
  input: {
    height: 100,
    width: 200,
    backgroundColor: 'white',
    margin: 10

  },
  logo: {
    width:70,
    height: 50
  },
  title: {
    fontSize:30
  }
});
