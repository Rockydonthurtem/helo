import React, { Component } from "react";
import axios from "axios";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: " ",
      password: " "
    };
    this.handleNewUser = this.handleNewUser.bind(this);
  }
  componentDidMount() {}
  handleNewUser(username, password) {
    axios
      .post(`/api/postNewUser?username={username}&password={password}`)
      .then(response => {
        console.log(response.date);
        this.setState({
          username: response.data.username,
          password: response.data.password
        });
      });
  }
  render() {
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
        <button>Login</button>
        <button>Register</button>
      </div>
    );
  }
}

export default Auth;
