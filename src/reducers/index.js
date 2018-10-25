import { combineReducers } from "redux"
import user from './user'
import chatroom from './chatroom'

const rootReducer = combineReducers({
	chatroom,
	user
})