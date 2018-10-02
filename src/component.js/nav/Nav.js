import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    console.log(this.props);
    console.log(this.state);
    // <div>
    //   let new =
    //   {this.props.location.pathname === '/'
    //     ? " "
    //     : this.props.location.pathname == '/dashboard'}
    // </div>;
    return (
      <div>
        {this.props.location.pathname === "/" ? (
          " "
        ) : this.props.location.pathname == "/dashboard" ? (
          <Link to="/dashboard">
            <button>Home</button>
          </Link>
        ) : this.props.location.pathname == "/post/post:id" ? (
          <Link to="/post/post:id">
            <button>New Post</button>
          </Link>
        ) : this.props.location.pathname == "/auth" ? (
          <Link to="/auth">
            <button>Logout</button>
          </Link>
        ) : (
          " "
        )}
      </div>
    );
  }
}
export default withRouter(Nav);
