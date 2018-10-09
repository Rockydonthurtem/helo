import React, { Component } from "react";
import axios from "axios";
import Dashboard from "../dashboard/Dashboard";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: " ",
      password: " ",
      users: []
    };
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/getUser`).then(response => {
      console.log(response);
      this.setState({ users: response });
    });
  }

  handleNewUser(username, password) {
    axios
      .post(`/api/register?username=${username}&password=${password}`)
      .then(response => {
        console.log(response.date);
        this.setState({
          username: response.data.username,
          password: response.data.password
        });
      });
  }
  handleLogin(username, password) {
    axios
      .post(`/api/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.setState({
          username: response.data.username,
          password: response.data.password
        });
      });
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <input
          onChange={e => this.setState({ username: e.target.value })}
          value={this.state.username}
          placeholder="enter username"
          type="text"
        />
        <input
          onChange={e => this.setState({ password: e.target.value })}
          value={this.state.password}
          placeholder=" enter password"
          type="text"
        />
        {/* <button onClick>Login</button> */}
        <Dashboard register={this.handleNewUser} login={this.handleLogin} />
      </div>
    );
  }
}

export default Auth;
