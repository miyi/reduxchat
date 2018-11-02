import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from 'react-native-elements/src/input/Input';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
	Button,
  Dimensions,
  LayoutAnimation,
  UIManager,
  StyleSheet,
  View,
  ActivityIndicator,
	Text,
	TouchableOpacity
} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const IOS_GRAY = '#7d7d7d';

// TODO: add height adjustment logic to the input component as props 
// props are then passed to textInput component that will handle the onChangeText

// constructor(props) {
// 	super(props);
// 	this.state = {text: '', height: 0};
// }
// render() {
// 	return (
// 		<TextInput
// 			{...this.props}
// 			multiline={true}
// 			onChangeText={(text) => {
// 					this.setState({ text })
// 			}}
// 			onContentSizeChange={(event) => {
// 					this.setState({ height: event.nativeEvent.contentSize.height })
// 			}}
// 			style={[styles.default, {height: Math.max(35, this.state.height)}]}
// 			value={this.state.text}
// 		/>
// 	);
// }

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
	
	send = () => {
		this.blur();
		this.props.onSend();
	}

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
	
	render() {
    const {
      cancelButtonTitle,
      clearIcon,
      containerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      noIcon,
      placeholderTextColor,
      showLoading,
      loadingProps,
      ...attributes
    } = this.props;
    const { hasFocus, isEmpty } = this.state;
    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;
    const searchIcon = (
      <Ionicon size={20} name={'ios-search'} color={IOS_GRAY} />
    );
    return (
      <View style={[styles.container, containerStyle]}>
        <Input
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => (this.input = input)}
          inputStyle={[styles.input, inputStyle]}
          inputContainerStyle={[
            styles.inputContainer,
            !hasFocus && { width: SCREEN_WIDTH - 32, marginRight: 15 },
            inputContainerStyle,
          ]}
          leftIconContainerStyle={[
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ]}
          placeholderTextColor={placeholderTextColor}
        />
				<TouchableOpacity onPress={this.send} style={styles.button}>
					<Ionicon name='md-send' size={40}/>
				</TouchableOpacity>
      </View>
    );
  }

}

ChatInput.propTypes = {
  rightButtonTitle: PropTypes.string,
  clearIcon: PropTypes.bool,
  loadingProps: PropTypes.object,
  noIcon: PropTypes.bool,
  showLoading: PropTypes.bool,
  onClear: PropTypes.func,
	onCancel: PropTypes.func,
	onSend: PropTypes.func,
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
  rightButtonTitle: 'Send',
  clearIcon: true,
  loadingProps: {},
  noIcon: false,
  showLoading: false,
  onClear: () => null,
	onCancel: () => null,
	onSend: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
  placeholderTextColor: IOS_GRAY,
};

const styles = StyleSheet.create({
	button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 13,
  },
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

class DummyChatInput extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
	//this should all be in the ChatUI component but i'm putting them in here for now
  onInputChange = text => {
    console.log('value : ', text)
    this.setState({value: text || ""});   
  }
  onInputCancel = () => this.onInputChange('');
	onInputClear = () => this.onInputChange('');
	
	render() {
		return(
			<SearchBar placeholder="iOS searchbar" noIcon clearIcon platform="ios" {...dummySearchBarProps} 
				onChangeText={this.onInputChange}
				onClear={this.onInputClear}
				onCancel={this.onInputCancel}
				value={this.state.value}
			/>
		)
	}

}

export default ChatInput