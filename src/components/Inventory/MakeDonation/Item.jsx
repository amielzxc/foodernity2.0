import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  Paper,
  useMediaQuery,
  InputAdornment,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import UploadImage from "./UploadImage";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  setName,
  setQuantity,
  setCategory,
  setExpiry,
  setNotes,
} from "../../../store/Inventory/details";
function Item() {
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
        Item Details
      </Typography>
      <Paper className={classes.container}>
        <UploadImage />
        <Divider className={classes.divider_margin} />
        <Grid container item spacing={2}>
          <Grid item xs={12} sm={6}>
            <Name />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Quantity />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Category />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Expiry />
          </Grid>
        </Grid>
        <Notes />
      </Paper>
    </Grid>
  );
}

function Name() {
  const name = useSelector((state) => state.details.value.name);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setName(event.target.value));
  };
  return (
    <TextField
      margin="normal"
      type="text"
      variant="outlined"
      id="donationName"
      label="Donation Name"
      required
      fullWidth
      value={name}
      onChange={onChange}
    />
  );
}

function Quantity() {
  const theme = useTheme();
  //  used to determine whether the page should use components intended for responsive layout
  const responsiveLayout = useMediaQuery(theme.breakpoints.down("xs"));

  const quantity = useSelector((state) => state.details.value.quantity);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setQuantity(event.target.value));
  };
  return (
    <TextField
      margin={responsiveLayout ? "none" : "normal"}
      type="text"
      variant="outlined"
      id="donationQuantity"
      label="Quantity"
      required
      fullWidth
      value={quantity}
      onChange={onChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">piece(s)</InputAdornment>,
      }}
    />
  );
}

function Category() {
  const theme = useTheme();
  const responsiveLayout = useMediaQuery(theme.breakpoints.down("xs"));

  const category = useSelector((state) => state.details.value.category);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setCategory(event.target.value));
    // console.log(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      required
      margin={responsiveLayout ? "normal" : "none"}
    >
      <InputLabel id="donationCategory">Category</InputLabel>

      <Select
        defaultValue={category}
        labelId="donationRecipient"
        //id="demo-simple-select-outlined"
        value={category}
        onChange={onChange}
        label="Category"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Canned Goods"}>Canned Goods</MenuItem>
        <MenuItem value={"Instant Noodles"}>Instant Noodles</MenuItem>
        <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
        <MenuItem value={"Eggs"}>Eggs</MenuItem>
        <MenuItem value={"Uncooked Rice"}>Uncooked Rice</MenuItem>
        <MenuItem value={"Bread"}>Bread &amp; Pastry</MenuItem>
        <MenuItem value={"Fruits"}>Fruits</MenuItem>
        <MenuItem value={"Biscuits"}>Biscuits &amp; Snacks</MenuItem>
        <MenuItem value={"Beverages"}>Beverages</MenuItem>
        <MenuItem value={"Others"}>Others</MenuItem>
      </Select>
    </FormControl>
  );
}

function Expiry() {
  const expiry = useSelector((state) => state.details.value.expiry);
  const dispatch = useDispatch();

  const onChange = (date) => {
    dispatch(setExpiry(Date.parse(date._d)));
  };
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        disablePast
        autoOk
        fullWidth
        inputVariant="outlined"
        label="Expiry Date"
        format="L"
        value={expiry}
        InputAdornmentProps={{ position: "end" }}
        onChange={onChange}
        InputProps={{ readOnly: true }}
      />
    </MuiPickersUtilsProvider>
  );
}

function Notes() {
  const notes = useSelector((state) => state.details.value.notes);
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setNotes(event.target.value));
  };
  return (
    <TextField
      margin="normal"
      variant="outlined"
      fullWidth
      id="donationNotes"
      label="Donation Notes"
      multiline
      rows={4}
      value={notes}
      required
      onChange={onChange}
      placeholder="e.g., instructions"
    />
  );
}

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
  divider_margin: {
    margin: "20px 0",
  },
}));
export default Item;
