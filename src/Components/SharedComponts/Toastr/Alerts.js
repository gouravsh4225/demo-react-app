import React from "react";

// Material Components
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab";

function Alerts(props) {
  return (
    <React.Fragment>
      <Snackbar
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
      >
        <MuiAlert elevation={6} variant="filled" {...props} />
        {/* <Alert onClose={props.handleClose} severity={props.type}>
          {props.message}
        </Alert> */}
      </Snackbar>
    </React.Fragment>
  );
}

export default Alerts;
