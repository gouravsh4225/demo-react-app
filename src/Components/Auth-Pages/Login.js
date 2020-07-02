import React, { Component, Fragment } from "react";

/// Components

import { validateEmail } from "../../utlis/utils";
import AuthPageServices from "../../Services/AuthPageServices/AuthPages";
// import API from "../../utlis/HttpMethod/method";

/// Material Imports
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInForm: {
        email: "",
        password: "",
      },
      signInFormError: {
        email: false,
        password: true,
      },
      alertsObject: {
        type: "error",
        message: "All field is required",
        open: false,
      },
    };
  }

  componentDidMount() {
    console.log("--->>>Mod", this.props);
  }

  /* Function */

  formInputHandler = (name) => (event) => {
    let { signInForm, signInFormError } = { ...this.state };

    let value = event.target.value;

    if (name === "email") {
      signInFormError.email = validateEmail(value);
    } else if (name === "password") {
      signInFormError.password = value.length < 6 ? true : false;
    }
    signInForm[name] = value;
    this.setState({ signInForm, signInFormError });
  };

  loginAction = (event) => {
    event.preventDefault();
    let { signInForm, signInFormError } = {
      ...this.state,
    };
    if (signInFormError.email && !signInFormError.password) {
      let formData = {
        email: signInForm.email,
        password: signInForm.password,
      };
      AuthPageServices.Login(formData)
        .then((res) => {
          const {
            data: { data },
          } = { ...res };
          let token = data.accessToken.value;
          let userId = data._id;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          this.props.history.push("/booklists");
        })
        .catch((error) => {
          console.log("error---", error);
        });
    } else {
    }
  };

  closeAlerts = () => {
    let { alertsObject } = { ...this.state };

    alertsObject.open = false;
    this.setState({ alertsObject });
  };

  render() {
    const {
      signInForm: { email, password },
      signInFormError,
    } = { ...this.state };

    return (
      <Fragment>
        <div className="d-flex align-item-center height-100">
          <Container maxWidth="xs">
            <h1 className="text-center mb-1">Sign in </h1>
            <form
              noValidate
              autoComplete="off"
              className="d-flex flex-dir-col"
              onClick={this.loginAction}
            >
              <TextField
                error={!signInFormError.email ? true : false}
                name="email"
                id="emailElementId"
                label="Email"
                variant="outlined"
                type="email"
                className="mb-1"
                placeholder="Email"
                value={email}
                onChange={this.formInputHandler("email")}
                autoComplete="off"
                helperText={`${
                  !signInFormError.email ? `Please enter email` : ``
                }`}
              />
              <TextField
                error={signInFormError.password}
                name="password"
                id="passElementId"
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Password"
                className="mb-1"
                value={password}
                onChange={this.formInputHandler("password")}
                autoComplete="off"
                helperText={`${
                  signInFormError.password
                    ? `Password length should be greater 6`
                    : ``
                }`}
              />
              <div className="login-btns">
                <Button
                  variant="contained"
                  color="primary"
                  className="width-100"
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Login;
