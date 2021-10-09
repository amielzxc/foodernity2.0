import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { forwardRef, useImperativeHandle, useState } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PasswordMismatchAlert = forwardRef((props, ref) => {
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
    <Snackbar open={toggle} autoHideDuration={3000} onClose={setToggle}>
      <Alert onClose={handleClose} severity="error">
        Password and confirm password did not match.
      </Alert>
    </Snackbar>
  );
});

const InvalidPasswordAlert = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const message = "Password must only contain letters and numbers.";

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
        {message}
      </Alert>
    </Snackbar>
  );
});

const ShortPasswordAlert = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const message =
    "Password too short. Please make it at least 8 characters long.";

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
      <Alert onClose={toggle} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
});

const InvalidInputAlert = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const message =
    "Numbers and special characters are not allowed in the last name field.";

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
      <Alert onClose={toggle} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
});

const EmailTakenAlert = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const message =
    "Numbers and special characters are not allowed in the last name field.";

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
      <Alert onClose={toggle} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
});

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
