import React, { Component } from "react";
import Header from "../Components/SharedComponts/Header/Header";
import { Route, Redirect } from "react-router-dom";

class PrivateRoutes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessGrand: localStorage.getItem("token") ? true : false,
    };
  }

  loadPrivateComp = () => {
    return (
      <React.Fragment>
        <Header />
        <Route render={() => <this.props.component {...this.props} />} />
      </React.Fragment>
    );
  };

  redirectToLoginComp = () => {
    return <Redirect to="/" />;
  };

  render() {
    let { accessGrand } = { ...this.state };
    return (
      <React.Fragment>
        {accessGrand && this.loadPrivateComp()}
        {!accessGrand && this.redirectToLoginComp()}
      </React.Fragment>
    );
  }
}

export default PrivateRoutes;
