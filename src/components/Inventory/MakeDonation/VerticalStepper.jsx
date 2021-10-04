import { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// slices
import { useSelector, useDispatch } from "react-redux";
import { next, back, reset } from "../../../store/Inventory/stepper";
import { setDefault } from "../../../store/Inventory/details";
import { uncheck } from "../../../store/Inventory/guidelines";
// components
import { DisplaySnackbar } from "../../Shared/Snackbar";

// import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Donating Guidelines", "Donation Details", "Confirm Donation"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Acknowledgement of guidelines for the compliance of food safety and security.`;
    case 1:
      return "Details of the donations including the item details and pickup details";
    case 2:
      return `Preview to show what your donation looks like. Do double check the details you included before confirming.`;
    default:
      return "Unknown step";
  }
}

export default function VerticalStepper() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stepper = useSelector((state) => state.stepper.value);
  const guidelines = useSelector((state) => state.guidelines.value);
  const details = useSelector((state) => state.details.value);
  const categories = useSelector((state) => state.details.value.categories);
  const errorSnackbarRef = useRef(null);
  const warningSnackbarRef = useRef(null);
  const successSnackbarRef = useRef(null);

  const steps = getSteps();

  return (
    <>
      <div className={classes.root}>
        <Stepper activeStep={stepper} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={stepper === 0}
                      onClick={() => {
                        dispatch(back());
                      }}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        if (stepper === 0) {
                          guidelines.every((val) => val)
                            ? dispatch(next())
                            : errorSnackbarRef.current.displaySnackbar();
                        } else if (stepper === 1) {
                          Object.values(details).every((val) => val) &&
                          Object.values(categories).some((val) => val)
                            ? dispatch(next())
                            : warningSnackbarRef.current.displaySnackbar();
                        } else if (stepper === 2) {
                          successSnackbarRef.current.displaySnackbar();

                          setTimeout(() => {
                            window.location = "/account/mydonations";
                            dispatch(reset());
                            dispatch(setDefault());
                            dispatch(uncheck());
                          }, 3000);
                        }
                      }}
                      className={classes.button}
                    >
                      {stepper === steps.length - 1 ? "Confirm" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {/* {stepper === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )} */}
      </div>
      <DisplaySnackbar
        ref={errorSnackbarRef}
        message="You should acknowledge the guidelines first."
        severity="error"
      />
      <DisplaySnackbar
        ref={warningSnackbarRef}
        message="You need to fill up the details first."
        severity="warning"
      />
      <DisplaySnackbar
        ref={successSnackbarRef}
        message="Thank you for your donation! You will now be redirected."
        severity="success"
      />
    </>
  );
}
