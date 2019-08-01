import React from "react";
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePost from './components/posts/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/posts/:id" component={PostDetails}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/new-post" component={CreatePost}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
