import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./component.js/auth/Auth";
import Dashboard from "./component.js/dashboard/Dashboard";
import Form from "./component.js/form/Form";
import Post from "./component.js/post/Post";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/post/:postid" component={Post} />
    <Route path="/new" component={Form} />
  </Switch>
);
