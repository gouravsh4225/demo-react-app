import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import BookListing from "../Components/Private-Pages/BookListing/BookListing";
import Login from "../Components/Auth-Pages/Login";
import PrivateRoutes from "./PrivateRoutes";

class AppRoutes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route path="/" component={Login} exact {...this.props} />
        <PrivateRoutes
          path="/booklists"
          component={BookListing}
          exact
          {...this.props}
        />
      </Switch>
    );
  }
}

export default withRouter(AppRoutes);
