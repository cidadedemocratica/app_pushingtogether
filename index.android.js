/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  BackAndroid,
} from 'react-native';


import FCM from 'react-native-fcm';


import SplashPage from './views/SplashPage';
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';
import PersonPage from './views/PersonPage';
import CommentPage from './views/CommentPage';
import PushPage from './views/PushPage';
import NoNavigatorPage from './views/NoNavigatorPage';
import ErrorPage from './views/ErrorPage';
var _navigator;

class App extends Component {

  componentDidMount() {
    FCM.getFCMToken().then(token => {
      console.log("Token FCM: "+token)
      // store fcm token in your server
    });
    
    this.notificationUnsubscribe = FCM.on('notification', (notif) => {
      // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
      console.log('notification: '+notif);
    });
    this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
      console.log('refresh subscribe: '+token)
      // fcm token may not be available on first load, catch it here
    });

    //FCM.subscribeToTopic('/topics/foo-bar');
    //FCM.unsubscribeFromTopic('/topics/foo-bar');
    FCM.getInitialNotification().then(notif=>console.log(notif));
    FCM.presentLocalNotification({
        id: "UNIQ_ID_STRING",                               // (optional for instant notification)
        title: "My Notification Title",                     // as FCM payload
        body: "My Notification Message",                    // as FCM payload (required)
        sound: "default",                                   // as FCM payload
        priority: "high",                                   // as FCM payload
        click_action: "ACTION",                             // as FCM payload
        badge: 10,                                          // as FCM payload IOS only, set 0 to clear badges
        number: 10,                                         // Android only
        ticker: "My Notification Ticker",                   // Android only
        auto_cancel: true,                                  // Android only (default true)
        large_icon: "ic_launcher",                           // Android only
        icon: "ic_notification",                            // as FCM payload
        big_text: "Show when notification is expanded",     // Android only
        sub_text: "This is a subText",                      // Android only
        color: "red",                                       // Android only
        vibrate: 300,                                       // Android only default: 300, no vibration if you pass null
        tag: 'some_tag',                                    // Android only
        group: "group",                                     // Android only
        my_custom_data:'my_custom_field_value',             // extra data you want to throw
        lights: true,                                       // Android only, LED blinking (default false)
    });
    FCM.scheduleLocalNotification({
        fire_date: new Date().getTime(),      //RN's converter is used, accept epoch time and whatever that converter supports
        id: "UNIQ_ID_STRING",    //REQUIRED! this is what you use to lookup and delete notification. In android notification with same ID will override each other
        body: "from future past",
        repeat_interval: "week" //day, hour
    })
  }
  componentWillUnmount() {
    // prevent leaking
    this.refreshUnsubscribe();
    this.notificationUnsubscribe();
  }



  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    _navigator = navigator;
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'PushPage') {
      return (
        <PushPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'CommentPage') {
      return (
        <CommentPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <ErrorPage
            navigator={navigator} />
      );
    }
    if (routeId === 'ErrorPage') {
      return (
        <ErrorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <ErrorPage
          navigator={navigator} />
    );
  }
}


BackAndroid.addEventListener('hardwareBackPress', function() {
  if (_navigator.getCurrentRoutes().length === 2 ) {
     return false;
  }
  _navigator.pop();
  return true;
});

var s = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  touchNoRoute: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNoRoute: {
    color: 'red',
    fontWeight: 'bold'
  }

});

AppRegistry.registerComponent('app_pushingtogether', () => App);
