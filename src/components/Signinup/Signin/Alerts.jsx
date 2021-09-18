import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function WrongCredentialsAlert(props) {
  const { close, open } = props;
  const message = "Wrong email/password!";

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

function NoAccountAlert(props) {
  const { close, open } = props;
  const message = "No account matched!";

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

export { WrongCredentialsAlert, NoAccountAlert };
