import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { forwardRef, useImperativeHandle, useState } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DisplaySnackbar = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    displaySnackbar() {
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
    <>
      <Snackbar open={toggle} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
});

export { DisplaySnackbar };

// severity
// error - red
// warning - yellow
// info - blue
// success - green
