'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  Image,
  WebView,
} from 'react-native';
import Bounceable from "react-native-bounceable";

var NavigationBarRouteMapper = require('./partials/HeaderBar');
var s = require('../assets/styles/MainStyle');
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MainPage extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
     <View style={s.all}>

        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{flex: 1, backgroundColor: 'rgba(100, 100, 100, 0.6)'}}>
           <View style={{marginTop: 15, marginLeft: 20, marginRight: 20}}>


              <ScrollView style={{ padding: 20, backgroundColor: '#DAEBF2' }}>

                <View style={{marginBottom: 10 }}>
                  <Bounceable
                onPress={() => this.setModalVisible(!this.state.modalVisible) }
                level={1.1}>

                    <Text style={{ textAlign: 'right' }} >
                      <Icon name="close" size={24} />
                    </Text>
                  </Bounceable>
                </View>
                <TextInput
                  multiline={true}
                  numberOfLines={40}
                  autoFocus = {true}
                  maxLength={400}
                  style={s.input}
                  placeholder="Contribute to the discussion with your comment....."
                  placeholderTextColor="silver"
                  onChangeText={(text) => this.setState({text})}
                />
                <View style={{paddingLeft: 10, paddingRight: 30 }}>
                  <Button onPress={() => onButtonPressCommentSave(this.props.navigator) } title="Comment" accessibilityLabel="Send a comment to the conversation" />
                </View>
              </ScrollView>
           </View>
          </View>
        </Modal>

        <WebView
          javaScriptEnabled={true}
          source={require('../test.html')}
          style={{marginTop: 50}}
          scalesPageToFit={true}
        />
        <View style={s.buttons}>

          <Bounceable
            onPress={() => onButtonPressPush(this.props.navigator) }
            level={1.1}>
            <View style={s.view}>
              <TouchableHighlight onPress={() => onButtonPressPush(this.props.navigator) }>
              <Image style={s.buttonImage} source={require('../assets/images/buttons/ej_button_push_B_01.png')} />
              </TouchableHighlight>
            </View>
          </Bounceable>
          <Bounceable
            onPress={() => this.setModalVisible(true) }
            level={1.1}>

            <View style={s.view}>
              <Image style={s.buttonImage} source={require('../assets/images/buttons/ej_button_comment_B_01.png')}/>
            </View>
          </Bounceable>
        </View>
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

var onButtonPressPush = function(navigator) {
    navigator.push({id: 'PushPage'})
};

var onButtonPressComment = function(navigator) {
    navigator.push({id: 'CommentPage'})
};
