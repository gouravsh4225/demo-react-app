import React, { Component } from "react";
import AppRoutes from "./routers/routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderState: false,
    };
  }

  render() {
    const { loaderState } = { ...this.state };

    return (
      <Router>
        <div className="d-flex flex-dir-col flex-grow-1">
          <AppRoutes {...this.props} />
        </div>
      </Router>
    );
  }
}

export default App;
