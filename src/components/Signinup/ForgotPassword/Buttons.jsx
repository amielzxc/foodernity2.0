import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

// returns send email/reset link button
function SendButton(props) {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      size="large"
      className={classes.button__send}
    >
      SEND PASSWORD RESET LINK
    </Button>
  );
}
// returns sign in button which redirects to signin page
function SignInButton(props) {
  const classes = useStyles();
  return (
    <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        className={classes.button__signin}
        size="large"
      >
        BACK TO SIGN IN
      </Button>
    </Link>
  );
}

export { SendButton, SignInButton };

const useStyles = makeStyles((theme) => ({
  button__send: {
    margin: theme.spacing(3, 0),
  },
  button__signin: {
    marginBottom: theme.spacing(5),
  },
}));
