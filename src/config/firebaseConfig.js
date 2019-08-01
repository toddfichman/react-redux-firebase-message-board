import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsOn4gOdhK9bnkPcGGCLJxrtYvWvl_8pQ",
  authDomain: "react-redux-message-board.firebaseapp.com",
  databaseURL: "https://react-redux-message-board.firebaseio.com",
  projectId: "react-redux-message-board",
  storageBucket: "",
  messagingSenderId: "620335317735",
  appId: "1:620335317735:web:ed134d5e0d6a63c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firestore in firebase's database
firebase.firestore().settings({ timestampsInSnapshots: true });

// this allows us to interact with firebase
// functionality elsewhere in the app
export default firebase;