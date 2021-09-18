import { Button } from "@material-ui/core";

// returns sign up button
function SignUpButton() {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      size="large"
    >
      SIGN UP
    </Button>
  );
}
// returns google sign up button
function GoogleSignUpButton(props) {
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth
      className={props.className}
      size="large"
      // startIcon={<Icon icon={googleIcon} />}
    >
      SIGN UP WITH GOOGLE
    </Button>
  );
}

export { SignUpButton, GoogleSignUpButton };
