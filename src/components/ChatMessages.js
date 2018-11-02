import React, { Component } from 'react';
import Input from 'react-native-elements/src/input/Input';
import {
  Button,
  Dimensions,
  LayoutAnimation,
  UIManager,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IOS_GRAY = '#7d7d7d';


class ChatMessages extends Component {
  render() {
    <View styles={styles.container}>
      <Text>Chat Messages Component</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})