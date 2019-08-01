// Combine all reducers here to pass to createStore func

import authReducer from "./authReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";
// firestoreReducer autmoaticlly syncs data
// in firestore collections to our state in background
import { firestoreReducer } from "redux-firestore";
// firebaseReducer syncs info for auth status
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
