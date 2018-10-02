import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Auth from "./component.js/auth/Auth";
import Dashboard from "./component.js/dashboard/Dashboard";
import Form from "./component.js/form/Form";
import Nav from "./component.js/nav/Nav";
import Post from "./component.js/post/Post";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Dashboard />
        <Form />
        <Nav />
        <Post />
      </div>
    );
  }
}

export default App;
