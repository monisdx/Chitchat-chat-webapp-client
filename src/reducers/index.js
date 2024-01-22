import { combineReducers } from "redux";
// import posts from './posts';
import auth from './auth';
import chats from './chat';
import users from './user';

export default combineReducers({ auth, chats, users })