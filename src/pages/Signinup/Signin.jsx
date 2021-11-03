import { useState } from "react";
import { Grid, CssBaseline, makeStyles, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import BackgroundImage from "../../assets/Signinup/signin.png";
//components
import {
  EmailInput,
  PasswordInput,
} from "../../components/Signinup/Signin/Inputs";
import { SignInButton } from "../../components/Signinup/Signin/Buttons";
import {
  WrongCredentialsAlert,
  NoAccountAlert,
} from "../../components/Signinup/Signin/Alerts";

function Signin() {
  const { handleSubmit, control } = useForm();
  const history = useHistory();
  const classes = useStyles();
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [noAccount, setNoAccount] = useState(false);

  function onSubmit(data) {
    const obj = {
      email: data.emailAddress,
      password: data.password,
    };

    console.log(obj);
    Axios.post("https://foodernity.herokuapp.com/loginAdmin/loginAdmin", obj)
      .then((res) => {
        if (res.data === "Wrong email/password.") {
          setWrongCredentials(true);
          console.log("Wrong email/password.");
        } else if (res.data === "No existing account.") {
          setNoAccount(true);
          console.log("No existing account.");
        } else {
          setWrongCredentials(false);
          setNoAccount(false);
          console.log("hello");
          console.log(res.data);
          history.replace("/admin/donations");
          console.log("token: " + res.data.changePasswordCode);
          localStorage.setItem("token", res.data.changePasswordCode);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWrongCredentials(false);
    setNoAccount(false);
  };
  return (
    <>
      <Helmet>
        <title>Sign In | Foodernity</title>
      </Helmet>
      <Grid container className={classes.container__main} component="main">
        <CssBaseline />
        <Grid
          container
          item
          xs={false}
          md={5}
          lg={6}
          className={classes.container__left}
          direction="column"
        >
          <Grid item xs={1} />
          <Grid item>
            <Typography variant="h2" className={classes.heading} component="h2">
              Foodernity.
            </Typography>
            <Typography variant="h6" className={classes.slogan}>
              Magbigay ayon sa kakayahan, <br /> Kumuha batay sa pangangailangan
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={7} lg={6} direction="column">
          <div className={classes.container__form}>
            <Typography variant="h3" component="h1" className={classes.title}>
              Welcome to Foodernity
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <EmailInput control={control} />
              <PasswordInput control={control} />
              <SignInButton className={classes.button__signin} />
            </form>
          </div>
        </Grid>
      </Grid>
      <WrongCredentialsAlert open={wrongCredentials} close={handleClose} />
      <NoAccountAlert open={noAccount} close={handleClose} />
    </>
  );
}

export default Signin;

const useStyles = makeStyles((theme) => ({
  container__main: {
    height: "100vh",
  },
  container__left: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
  },
  heading: {
    marginLeft: theme.spacing(5),
    fontWeight: "bold",
    color: "white",
  },
  slogan: {
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(3),
    fontWeight: "500",
    color: "white",
  },
  container__form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5, 10),

    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(5, 17),
    },
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(5, 5),
    },
  },
  title: {
    color: "#2196F3",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(12),
      marginTop: theme.spacing(5),
    },
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    width: "100%",
    maxWidth: "600px",
  },
  button__signin: {
    marginTop: theme.spacing(4),
  },
  text: {
    color: "#8B8B8B",
    textAlign: "center",
  },
  text__or: {
    margin: theme.spacing(2.5, 0),
  },
  text__register: {
    marginTop: theme.spacing(10),
  },
  text__register_signup: {
    color: "#2196F3",
    fontWeight: "bold",
  },
  text__forgotpassword: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
  },
}));
