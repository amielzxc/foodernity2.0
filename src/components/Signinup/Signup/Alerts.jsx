import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { forwardRef, useImperativeHandle, useState } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorAlert = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    setDisplay() {
      setToggle(true);
    },
  }));

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToggle(false);
  };

  return (
    <Snackbar open={toggle} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {props.message}
      </Alert>
    </Snackbar>
  );
});

const SuccessAlert = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    setDisplay() {
      setToggle(true);
    },
  }));

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToggle(false);
  };

  return (
    <Snackbar open={toggle} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="Success">
        {props.message}
      </Alert>
    </Snackbar>
  );
});

export { ErrorAlert, SuccessAlert };
