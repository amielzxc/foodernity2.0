import {
  Divider,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setDeliverDate,
  setContactNumber,
  setNotes,
} from "../../../store/Inventory/details";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ContactPhoneRoundedIcon from "@material-ui/icons/ContactPhoneRounded";
import MomentUtils from "@date-io/moment";

function Pickup() {
  const classes = useStyles();

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
        Deliver &amp; Contact Details
      </Typography>
      <Paper className={classes.container}>
        <Typography variant="body1" className={classes.text_bold}>
          Deliver Address
        </Typography>
        <Typography>National University - Manila</Typography>
        {/* <Divider className={classes.divider_margin} /> */}
        <DeliverDate />
        {/* <Divider className={classes.divider_margin} /> */}
        <ContactDetails />
        {/* <Divider className={classes.divider_margin} /> */}
        <Notes />
      </Paper>
    </Grid>
  );
}

function DeliverDate() {
  const classes = useStyles();
  const deliverDate = useSelector((state) => state.details.value.deliverDate);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setDeliverDate(Date.parse(event._d)));
  };

  return (
    <>
      <Typography variant="body1" className={classes.text_bold}>
        Deliver date
      </Typography>

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          disablePast
          margin="normal"
          autoOk
          fullWidth
          inputVariant="outlined"
          format="L"
          value={deliverDate}
          InputAdornmentProps={{ position: "end" }}
          onChange={onChange}
          InputProps={{ readOnly: true }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}

function ContactDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contactNumber = useSelector(
    (state) => state.details.value.contactNumber
  );
  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setContactNumber(""));
    } else {
      dispatch(setContactNumber(value));
    }
  };
  return (
    <>
      <Typography variant="body1" className={classes.text_bold}>
        Contact Number
      </Typography>
      <TextField
        type="tel"
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="Please enter your contact number"
        onChange={onChange}
        value={contactNumber}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <ContactPhoneRoundedIcon
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
              />{" "}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}

function Notes() {
  const classes = useStyles();
  const notes = useSelector((state) => state.details.value.notes);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setNotes(event.target.value));
  };
  return (
    <>
      <Typography variant="body1" className={classes.text_bold}>
        Notes
      </Typography>
      <TextField
        margin="normal"
        variant="outlined"
        fullWidth
        id="donationNotes"
        multiline
        rows={2}
        value={notes}
        required
        onChange={onChange}
        placeholder="e.g. deliver time"
      />
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
    // marginTop: "10px",
  },
  divider_margin: {
    margin: "20px 0",
  },
}));
