import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <Link to="/dashboard">
          <button>Home</button>
        </Link>

        <Link to="/post/:postid">
          <button>New Post</button>
        </Link>

        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}
export default withRouter(Nav);
