import { useRef, useState } from "react";
import {
  Grid,
  CssBaseline,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useForm, Controller } from "react-hook-form";
import BackgroundImage from "../../assets/Signinup/signup.png";
//components
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
} from "../../components/Signinup/Signup/Inputs";
import { Agreement } from "../../components/Signinup/Signup/Agreement";
import {
  SignUpButton,
  GoogleSignUpButton,
} from "../../components/Signinup/Signup/Buttons";
import { Link } from "react-router-dom";
import Axios from "axios";
import moment from "moment";
import Snackbar from "../../components/Shared/Snackbar";
import { ErrorAlert, SuccessAlert } from "../../components/Signinup/Signup/Alerts";

function Signup() {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const passwordMismatchRef = useRef(null);
  const invalidPasswordRef = useRef(null);
  const shortPasswordRef = useRef(null);
  const invalidInputRef = useRef(null);
  const emailTakenRef = useRef(null);
  const successRef = useRef(null)
  // function onSubmit(data) {
  //    // console.log(data)

  //    if (String(data.password).length >= 8) {
  //       if (data.password !== data.confirmPassword) {
  //          console.log('Password and confirm password did not match.')
  //          setPasswordMismatch(true)
  //       } else {
  //          const obj = {
  //             email: data.emailAddress,
  //             password: data.password,
  //             firstname: data.firstName,
  //             surname: data.lastName,
  //             dateOfReg: moment(new Date()).format('MM/DD/YYYY'),
  //             userType: 'individual',
  //             userStatus: 'active',
  //          }

  //          // console.log(obj)
  //          Axios.post('http://localhost:3001/user/add', obj)
  //             .then((res) => {
  //                if (String(res.data) === 'email is already taken') {
  //                   setEmailTaken(true)
  //                   //put the notification/alert code here if the email is already taken.
  //                } else if (
  //                   String(res.data) === 'new user added successfully'
  //                ) {
  //                   setSuccessfulRegister(true)
  //                   setEmailTaken(false)
  //                   setPasswordMismatch(false)
  //                   setInvalidPassword(false)

  //                   //put the notification/alert code here if the user successfully registered.
  //                }
  //                console.log(res.data)
  //             })
  //             .catch((error) => {
  //                console.log(error)
  //             })
  //       }
  //    } else {
  //       setInvalidPassword(true)
  //       console.log(
  //          'Password too short. Please make it at least 8 characters long.'
  //       )
  //    }
  // }

  function checkName(name) {
    var letters = /^(?![\s.]+$)[a-zA-Z\s.]*$/;

    if (name.match(letters)) {
      //  console.log("all alphabet");
      return true;
    } else {
      //  alert("contains special characters");
      return false;
    }
  }

  function checkPassword(password) {
    var regex = /^[A-Za-z0-9]*$/;

    if (password.match(regex)) {
      //  console.log("all alphabet");
      return true;
    } else {
      //  alert("contains special characters");
      return false;
    }
  }

  function onSubmit(data) {
    console.log("Hello");

    //if firstname and lastname contains numbers or symbols
    if (checkName(data.firstName) === true) {
      if (checkName(data.lastName) === true) {
        if (String(data.password).length >= 8) {
          if (checkPassword(data.password) === true) {
            if (data.password !== data.confirmPassword) {
              passwordMismatchRef.current.setDisplay();
              //  setPasswordMismatch(true)
            } else {
              // let changePasscode = Math.floor((Math.random() * 888888)+111111); ilagay to sa server side
              const obj = {
                email: data.emailAddress,
                password: data.password,
                givenName: data.firstName,
                surname: data.lastName,
                dateOfReg: moment(new Date()).format("MM/DD/YYYY"),
                loginMethod: "default",
                userType: "user",
                userStatus: "active",
              };

              console.log(obj);
              Axios.post("http://localhost:3001/signup/signup", obj)
                .then((res) => {
                  if (String(res.data) === "email is already taken") {
                    emailTakenRef.current.setDisplay();
                    // setEmailTaken(true)
                    //put the notification/alert code here if the email is already taken.
                  } else {
                    console.log(res.data);
                    localStorage.setItem("vc", res.data);

                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          } else {
            invalidPasswordRef.current.setDisplay();
            console.log("Password must only contain letters and numbers.");
          }
        } else {
          // setInvalidPassword(true)
          shortPasswordRef.current.setDisplay();
          console.log(
            "Password too short. Please make it at least 8 characters long."
          );
        }
      } else {
        invalidInputRef.current.setDisplay();
        console.log(
          "Numbers and special characters are not allowed in the last name field."
        );
      }
    } else {
      invalidInputRef.current.setDisplay();
      console.log(
        "Numbers and special characters are not allowed in the first name field."
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>Sign Up | Foodernity</title>
      </Helmet>
      <Grid container className={classes.root} alignItems="center">
        <CssBaseline />
        <Grid item xs={false} sm={2} lg={3} />
        <Grid container item xs={12} sm={8} lg={6}>
          <Paper className={classes.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography
                variant="h3"
                className={`${classes.text_highlighted} ${classes.title}`}
              >
                Create an Account
              </Typography>
              <Grid
                container
                item
                xs={12}
                className={classes.text__fullName}
                spacing={2}
              >
                <FirstNameInput control={control} />
                <LastNameInput control={control} />
                <EmailInput control={control} />
                <PasswordInput control={control} />
                <ConfirmPasswordInput control={control} />
              </Grid>
              <Agreement
                agreement={`${classes.text} ${classes.text__agreement}`}
                link={classes.text_highlighted}
              />
              <SignUpButton />
              {/* <Typography
                variant="body1"
                className={`${classes.text} ${classes.text__or}`}
              >
                or
              </Typography> */}
              {/* <GoogleSignUpButton className={classes.button__google} /> */}
              <Typography className={classes.text}>
                Already have an account?{" "}
                <Link to="/signin" style={{ textDecoration: "none" }}>
                  <span className={classes.text_highlighted}>Sign in here</span>
                </Link>
              </Typography>
              <br />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={false} md={2} lg={3} />
      </Grid>
      {/* <PasswordMismatchAlert ref={passwordMismatchRef} /> */}
      <ErrorAlert
        ref={passwordMismatchRef}
        message="Password and confirm password did not match."
      />
      <ErrorAlert
        ref={invalidPasswordRef}
        message="Password must only contain letters and numbers."
      />{" "}
      <ErrorAlert
        ref={shortPasswordRef}
        message="Password too short. Please make it at least 8 characters long."
      />
      <ErrorAlert
        ref={invalidInputRef}
        message="Numbers and special characters are not allowed in the first name field."
      />
      <ErrorAlert ref={emailTakenRef} message="Email is already taken." />
      <SuccessAlert ref={successRef} message="" />
    </>
  );
}

export default Signup;

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackgroundImage}) `,
    backgroundSize: "cover",
    height: "100vh",
  },
  container: {
    margin: theme.spacing(5, 0),
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
  title: {
    color: "#2196F3",
    fontWeight: "bold",
    marginBottom: theme.spacing(5),
    textAlign: "center",
  },
  text: {
    color: "#8B8B8B",
    textAlign: "center",
  },
  text_highlighted: {
    color: "#2196F3",
    textAlign: "center",
    fontWeight: "bold",
  },
  text__fullName: {
    margin: "0",
  },
  text__agreement: {
    margin: theme.spacing(4),
  },
  text__or: {
    margin: theme.spacing(2.5, 0),
  },
  button__google: {
    marginBottom: theme.spacing(5),
  },
}));
