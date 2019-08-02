import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux"; // Provider binds react and redux
// thunk pauses the ditpach of an action
// so you can do async calls
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";
import { tsExternalModuleReference } from "@babel/types";

// pass in root reducer
const store = createStore(
  rootReducer,
  compose(
    // compose allows for mutiple store enhancers
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
      useFirestoreForProfile: true, //connects firebase to firesotre for user info
      userProfile: 'users', // telling firebase which firestore collection to connect for profiles
      attachAuthIsReady: true
    })
  )
);

// waits for firebase auth to complete
// before rendering to DOM
// prevents nav links flickering
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
