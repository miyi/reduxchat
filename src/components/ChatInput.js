import PropTypes from 'prop-types';
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

class ChatInput extends components {
	focus = () => {
    this.input.focus();
  };

  blur = () => {
    this.input.blur();
  };

  clear = () => {
    this.input.clear();
    this.onChangeText('');
    this.props.onClear();
  };

  cancel = () => {
    this.blur();
    this.props.onCancel();
  };

  onFocus = () => {
    this.props.onFocus();
    UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
    this.setState({ hasFocus: true });
  };

  onBlur = () => {
    this.props.onBlur();
    UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
    this.setState({ hasFocus: false });
  };

  onChangeText = text => {
    this.props.onChangeText(text);
    this.setState({ isEmpty: text === '' });
  };

}

ChatInput.propTypes = {
  cancelButtonTitle: PropTypes.string,
  clearIcon: PropTypes.bool,
  loadingProps: PropTypes.object,
  noIcon: PropTypes.bool,
  showLoading: PropTypes.bool,
  onClear: PropTypes.func,
  onCancel: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  leftIcon: PropTypes.object,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: Text.propTypes.style,
  placeholderTextColor: PropTypes.string,
};

ChatInput.defaultProps = {
  cancelButtonTitle: 'Cancel',
  clearIcon: true,
  loadingProps: {},
  noIcon: false,
  showLoading: false,
  onClear: () => null,
  onCancel: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
  placeholderTextColor: IOS_GRAY,
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    backgroundColor: '#f5f5f5',
    paddingBottom: 13,
    paddingTop: 13,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginLeft: 6,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#dcdce1',
    borderRadius: 9,
    height: 36,
    marginLeft: 15,
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
});

export default ChatInput