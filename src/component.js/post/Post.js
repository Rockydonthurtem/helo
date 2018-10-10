import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: " ",
      img: " ",
      content: " ",
      join: []
    };
  }
  componentDidMount = () => {
    axios.get(`/api/join`).then(response => {
      console.log(response);
      this.setState({ join: response });
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ title: e.target.value })}
          type="text"
          placeholder="title"
        />
        <input
          onChange={e => this.setState({ img: e.target.value })}
          type="text"
          placeholder="img"
        />
        <input
          onChange={e => this.setState({ text: e.target.value })}
          type="text"
          placeholder="content"
        />
      </div>
    );
  }
}
export default Post;
