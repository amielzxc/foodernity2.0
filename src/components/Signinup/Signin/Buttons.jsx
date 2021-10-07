import { Button } from "@material-ui/core";
// import { Icon } from '@iconify/react'
import GoogleLogin from "react-google-login";
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
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId=""
      buttonText="Login with google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
    // <Button
    //   variant="outlined"
    //   color="primary"
    //   fullWidth
    //   size="large"
    //   // startIcon={<Icon icon={googleIcon} />}
    // >
    //   SIGN IN WITH GOOGLE
    // </Button>
  );
}

export { SignInButton, GoogleSignInButton };
