import { combineReducers } from "redux";
// import posts from './posts';
import auth from './auth';
import chats from './chat';

export default combineReducers({ auth, chats })