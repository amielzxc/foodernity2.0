import {
  Grid,
  CssBaseline,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import BackgroundImage from "../../assets/Signinup/signup.png";
//components
import { EmailInput } from "../../components/Signinup/ForgotPassword/Inputs";
import {
  SendButton,
  SignInButton,
} from "../../components/Signinup/ForgotPassword/Buttons";
function ForgotPassword() {
  const { handleSubmit, control } = useForm();
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Forgot Password | Foodernity</title>
      </Helmet>
      <Grid container className={classes.root} alignItems="center">
        <CssBaseline />
        <Grid item xs={false} sm={2} />
        <Grid item container xs={12} sm={8}>
          <Paper className={classes.container}>
            <form
            // onSubmit={handleSubmit(onSubmit)}
            >
              <Typography variant="h3" className={classes.title}>
                Forgot Password
              </Typography>
              <Typography variant="body1" className={classes.description}>
                Enter your registered email address and you will receive a
                password resend link.
              </Typography>
              <EmailInput control={control} />
              {/* <Captcha className={classes.recaptcha} image={Recaptcha} /> */}
              <SendButton />
              <SignInButton />
              <br />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}

export default ForgotPassword;

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackgroundImage})  no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh",
  },
  title: {
    color: "#2196F3",
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  container: {
    margin: "0 auto",
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(3),
    },
  },
  recaptcha: {
    textAlign: "center",
    margin: theme.spacing(5, 0),
  },
  button__send: {
    margin: theme.spacing(3, 0),
  },
  button__signin: {
    marginBottom: theme.spacing(5),
  },
}));
