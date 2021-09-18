import DialogDrawer from "../../Shared/Dialog";
import LeftDrawer from "../../Shared/Drawer";
import { makeStyles, Typography } from "@material-ui/core";
import VerticalStepper from "./VerticalStepper";

function StepperDrawer() {
  return (
    <>
      <LeftDrawer>
        <Title />
        <VerticalStepper />
      </LeftDrawer>
      <DialogDrawer buttonName="Steps">
        <VerticalStepper />
      </DialogDrawer>
    </>
  );
}

function Title() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        Make a Donation
      </Typography>
    </div>
  );
}

export default StepperDrawer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    zIndex: "0",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },

  container__actions: {
    marginBottom: theme.spacing(2),
  },
  divider__margin: {
    margin: "20px 0",
  },
  title: {
    fontWeight: "bold",
    marginTop: "5px",
  },
  button_green: {
    color: "white",
    backgroundColor: "#66BB6A",
    "&:hover": {
      backgroundColor: "#57A05A",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "#66BB6A",
      },
    },
  },
}));
