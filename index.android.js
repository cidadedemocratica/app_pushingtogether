/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

import MyScene from './MyScene';

export default class app_pushingtogether extends Component {
  render() {
    const routes = [
      {title: 'Fisrt Scene', index:0},
      {title: 'Second Scene', index:1},
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator ) => 
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {route.title}! </Text>
          </TouchableHighlight>
        }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                {  
                  if (route.index === 0) { 
                    return null; 
                  } else { 
                    return ( 
                      <TouchableHighlight onPress={() => navigator.pop()}> 
                        <Text>Back</Text>
                      </TouchableHighlight> ); 
                  } 
                },
              RightButton: (route, navigator, index, navState) =>
                { return ( <Text>Done</Text> ); },
              Title: (route, navigator, index, navState) =>
                { return ( <Text>Awesome NavBar</Text> ); },
            }}
            style={{backgroundColor: 'gray'}} 
          />
        }
        style={{ padding: 100 }}
      />
      //<View style={styles.container}>
      //  <Text style={styles.welcome}>
      //    E foi assim que começou a história! 
      //  </Text>
      //</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app_pushingtogether', () => app_pushingtogether);
