import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { forwardRef, useImperativeHandle, useState } from "react";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// function PasswordMismatchAlert(props) {
//   const { close, open } = props;
//   const message = "Password and confirm password did not match.";

//   return (
//     <>
//       <Snackbar open={open} autoHideDuration={2000} onClose={close}>
//         <Alert onClose={close} severity="error">
//           {message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }

const PasswordMismatchAlert = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const message = "Password and confirm password did not match.";

  useImperativeHandle(
    (ref,
    (bool) => ({
      setDisplay() {
        setToggle(bool);
      },
    }))
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToggle(false);
  };

  return (
    <>
      <Snackbar open={toggle} autoHideDuration={2000} onClose={setToggle}>
        <Alert onClose={handleClose} severity="error">
          {" "}
          {message}{" "}
        </Alert>
      </Snackbar>
    </>
  );
});

function InvalidPasswordAlert(props) {
  const { close, open } = props;
  const message =
    "Password too short. Please make it at least 8 characters long.";

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={close}>
        <Alert onClose={close} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

function EmailTakenAlert(props) {
  const { close, open } = props;
  const message = "Email is already taken.";

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={close}>
        <Alert onClose={close} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

function SuccessfulAlert(props) {
  const { close, open } = props;
  const message = "New user added successfully.";

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={close}>
        <Alert onClose={close} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export {
  PasswordMismatchAlert,
  InvalidPasswordAlert,
  EmailTakenAlert,
  SuccessfulAlert,
};
