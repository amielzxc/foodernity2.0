import {
  Divider,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setClaimingMethod,
  setClaimingDate,
  setClaimingLocation,
} from "../../../store/Inventory/details";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function Pickup() {
  const classes = useStyles();
  const claimingMethod = useSelector(
    (state) => state.details.value.claimingMethod
  );
  const dispatch = useDispatch();

  const handleSelected = (event) => {
    dispatch(setClaimingMethod(event.target.value));
  };

  return (
    <Grid
      container
      className={classes.root}
      item
      xs={12}
      lg={6}
      direction="column"
    >
      <Typography variant="h6" className={classes.title}>
        Pickup Details
      </Typography>
      <Paper className={classes.container}>
        <Typography variant="body1" className={classes.text_bold}>
          How will you donate your donation?
        </Typography>
        <RadioGroup value={claimingMethod} onChange={handleSelected}>
          <FormControlLabel
            value="Pickup"
            control={<Radio />}
            label="Thru Pickup"
          />
          <FormControlLabel
            value="Deliver"
            control={<Radio />}
            label="Thru Deliver"
          />
        </RadioGroup>
        {getAddress(claimingMethod)}
        <Divider className={classes.divider_margin} />
        <PickupDate />
      </Paper>
    </Grid>
  );
}
function getAddress(selected) {
  switch (selected) {
    case "Pickup":
      return (
        <Typography>
          Set the address where the donation will be picked up.
        </Typography>
      );

    case "Deliver":
      return <DeliverAddress />;

    default:
      return;
  }
}

function DeliverAddress() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setClaimingLocation(
        "National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila"
      )
    );
  }, []);
  return (
    <Typography>
      The address for deliver is{" "}
      <span style={{ color: "#2196F3" }}>
        National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro
        Manila
      </span>
    </Typography>
  );
}

function PickupDate() {
  const classes = useStyles();
  const claimingDate = useSelector((state) => state.details.value.claimingDate);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setClaimingDate(Date.parse(event._d)));
  };

  return (
    <>
      <Typography variant="body1" className={classes.text_bold}>
        Pick up date
      </Typography>

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          disablePast
          margin="normal"
          autoOk
          fullWidth
          inputVariant="outlined"
          format="L"
          value={claimingDate}
          InputAdornmentProps={{ position: "end" }}
          onChange={onChange}
          InputProps={{ readOnly: true }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default Pickup;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "700px",
    height: "100%",
    padding: theme.spacing(1, 3),
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  container: {
    padding: theme.spacing(2.5),
  },
  text_bold: {
    fontWeight: "bold",
  },
  divider_margin: {
    margin: "20px 0",
  },
}));
