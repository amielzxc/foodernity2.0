import { Button } from "@material-ui/core";
// import { Icon } from '@iconify/react'

// returns the sign in button
function SignInButton(props) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={props.className}
      fullWidth
      size="large"
    >
      SIGN IN
    </Button>
  );
}
// returns the google sign in button
function GoogleSignInButton() {
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth
      size="large"
      // startIcon={<Icon icon={googleIcon} />}
    >
      SIGN IN WITH GOOGLE
    </Button>
  );
}

export { SignInButton, GoogleSignInButton };
