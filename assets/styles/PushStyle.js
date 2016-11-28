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
    justifyContent:'center'
  },
  content: {
    padding: 10
  },
  title: {
    fontSize: 30,
    paddingLeft: 10,
  }
});
