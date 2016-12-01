'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Bounceable from "react-native-bounceable";

var NavigationBarRouteMapper = require('./partials/HeaderBar');
var s = require('../assets/styles/PushStyle');

export default class PushPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={s.view}>
        <ScrollView style={{paddingTop:15, paddingLeft: 10, paddingRight: 10}}>

          <View style={{flex: 1, flexDirection: 'row', paddingTop: 10,paddingLeft: 20, paddingRight: 20, paddingBottom: 20,justifyContent: 'center' }}>
              <Image style={s.imageHeader} source={require('../assets/images/headers/ej_header_push_B_01b.png')} />
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingTop: 0,paddingLeft: 20, paddingRight: 20, paddingBottom: 20,justifyContent: 'center' }}>
            <View style={{}}>
              <Text style={s.textCenter}>
                You can push your
                arguments and comments
                deeper into the conversation.
              </Text>
              <Text style={s.textSmallCenter}>
                This ability expires in 3 hours.
              </Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', paddingTop: 10, paddingLeft: 20, paddingRight: 10, backgroundColor: '#FFFFFF' }}>
            <View style={{width: 50, height: 50, justifyContent: 'center'}}>


              <Bounceable
              onPress={() => navigator.push({id: 'TalkPage'}) }
              level={1.1}>
                <View>
                  <Image style={s.buttonImage} source={require('../assets/images/buttons/ej_button_send_A_01.png')} />
                </View>
              </Bounceable>
            </View>
            <View style={{width: 200, height: 130}}>
                <Text style={s.title}>
                   Talk!
                </Text>
                <Text style={s.text}>
                   Send a comment to people, that are close to comments, you've wrote before.
                </Text>
                <Text style={s.textSmall}>
                    You can reach up to 27 people.
                </Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', paddingTop: 10, paddingLeft: 20, paddingRight: 10, marginTop:10, backgroundColor: '#FFFFFF'}}>
            <View style={{width: 50, height: 50, justifyContent: 'center'}}>

              <Bounceable
              onPress={() => navigator.push({id: 'EventPage'}) }
              level={1.1}>
                <View>
                  <Image style={s.buttonImage} source={require('../assets/images/buttons/ej_button_event_A_01.png')} />
                </View>
              </Bounceable>


            </View>
            <View style={{width: 200, height: 140}}>
                <Text style={s.title}>
                   Meet!
                </Text>
                <Text style={s.text}>
                   Create an Event and send an invitation to people, that are agreed to your comments before.
                </Text>
                <Text style={s.textSmall}>
                  You can invite up to 27 people.
                </Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
  gotoPersonPage() {
    this.props.navigator.push({
      id: 'PersonPage',
      name: 'Person Page',
    });
  }
}
var onButtonPressPushSave= function(navigator){
  /* TODO: send comment for backend if ok go to MainPage else call a alert and stay in this page */
  navigator.push({id: 'MainPage'})
}
