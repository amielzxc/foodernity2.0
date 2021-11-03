import { Button } from "@material-ui/core";

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

export { SignInButton };
