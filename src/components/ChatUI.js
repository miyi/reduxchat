import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { makeGenericClientConstructor } from 'grpc';


class ChatUI extends Component {
	constructor(props) {
		this.state = {
			messages: [],
			inputValue: '',
		}
	}

	render() {

		return(
			<View>
				<Header
					centerComponent={{ text: 'Global Chat', style: { color: '#fff' } }}
				/>
				<KeyboardAwareScrollView>
					<Messages />
					<ChatInput />
				</KeyboardAwareScrollView>
			</View>
		)
	}
}

export default ChatUI;