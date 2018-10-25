const message = (state, action) => {
	switch(action.type) {
		case 'ADD_MESSAGE':
		//for adding fetched messages into state
			return {
				id: action.id,
				text: action.text,
				time: action.time,
				author: action.user
			}
		case 'SEND_MESSAGE':
			let msg = {
				text: action.text,
				time: Date.now(),
				author: {
					name: action.user.name,
					avatar: action.user.avatar
				}
			}
			const newMsgRef = firebase.database().ref('messages').push();
			msg.id = newMsgRef.key;
			newMsgRef.set(msg);

			return msg
		default:
			return state;
	}
}

const messages = (state, action) => {
	switch(action.type) {
		case 'ADD_MESSAGE':
		//a logic that checks if message already exists
			if(state.map( m => m.id ).includes(action.id)) {
				return state;
			} else {
				return [
					...state,
					message(undefined, action)
				]
			};
		case 'SEND_MESSAGE':
			return [
				...state,
				message(undefined, action)
			];
		default: 
			return state
	}
}

export default messages