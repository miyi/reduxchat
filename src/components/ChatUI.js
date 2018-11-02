import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { makeGenericClientConstructor } from 'grpc';


class ChatUI extends Component {
	constructor(props) {
		this.state = {
			messages: [],
			chatInputValue: '',
			inputHeight: 0,
			scrollViewHeight: 0,
			
		}
	}

	onChatInputChange = (text) => {
		this.setState({chatInputValue: text || ''});
	}

	render() {

		return(
			<View>
				<Header
					centerComponent={{ text: 'Global Chat', style: { color: '#fff' } }}
				/>
				<KeyboardAwareScrollView>
					<ChatMessages />
					<ChatInput />
				</KeyboardAwareScrollView>
			</View>
		)
	}
}

export default ChatUI;