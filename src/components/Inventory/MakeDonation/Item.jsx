import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  Paper,
  InputAdornment,
  Divider,
} from "@material-ui/core";
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
  setExpiry,
  setInstantNoodles,
  setCannedGoods,
  setEggs,
  setUncookedRice,
  setSnacksBiscuits,
  setVegetables,
  setBreadPastry,
  setOthers,
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
            <Expiry />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text_bold}>Categories</Typography>
            <Typography variant="caption">
              Only fill in the necessary
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategoryOne />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategoryTwo />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategoryThree />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategoryFour />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategoryFive />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategorySix />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategorySeven />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CategoryOthers />
          </Grid>
        </Grid>
        {/* <Notes /> */}
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
      // margin="normal"
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

// function Quantity() {
//   const theme = useTheme();
//   //  used to determine whether the page should use components intended for responsive layout
//   const responsiveLayout = useMediaQuery(theme.breakpoints.down("xs"));

//   const quantity = useSelector((state) => state.details.value.quantity);
//   const dispatch = useDispatch();

//   const onChange = (event) => {
//     dispatch(setQuantity(event.target.value));
//   };
//   return (
//     <TextField
//       margin={responsiveLayout ? "none" : "normal"}
//       type="text"
//       variant="outlined"
//       id="donationQuantity"
//       label="Quantity"
//       required
//       fullWidth
//       value={quantity}
//       onChange={onChange}
//       InputProps={{
//         endAdornment: <InputAdornment position="end">piece(s)</InputAdornment>,
//       }}
//     />
//   );
// }

// function Category() {
//   const theme = useTheme();
//   const responsiveLayout = useMediaQuery(theme.breakpoints.down("xs"));

//   const category = useSelector((state) => state.details.value.category);
//   const dispatch = useDispatch();

//   const onChange = (event) => {
//     dispatch(setCategory(event.target.value));
//     // console.log(event.target.value);
//   };

//   return (
//     <FormControl
//       variant="outlined"
//       fullWidth
//       required
//       margin={responsiveLayout ? "normal" : "none"}
//     >
//       <InputLabel id="donationCategory">Category</InputLabel>

//       <Select
//         defaultValue={category}
//         labelId="donationRecipient"
//         //id="demo-simple-select-outlined"
//         value={category}
//         onChange={onChange}
//         label="Category"
//       >
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         <MenuItem value={"Canned Goods"}>Canned Goods</MenuItem>
//         <MenuItem value={"Instant Noodles"}>Instant Noodles</MenuItem>
//         <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
//         <MenuItem value={"Eggs"}>Eggs</MenuItem>
//         <MenuItem value={"Uncooked Rice"}>Uncooked Rice</MenuItem>
//         <MenuItem value={"Bread"}>Bread &amp; Pastry</MenuItem>
//         <MenuItem value={"Fruits"}>Fruits</MenuItem>
//         <MenuItem value={"Biscuits"}>Biscuits &amp; Snacks</MenuItem>
//         <MenuItem value={"Beverages"}>Beverages</MenuItem>
//         <MenuItem value={"Others"}>Others</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }

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

function CategoryOne() {
  const instantNoodles = useSelector(
    (state) => state.details.value.categories.instantNoodles
  );
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setInstantNoodles(""));
    } else {
      dispatch(setInstantNoodles(value));
    }
  };

  return (
    <TextField
      type="text"
      label="Instant Noodles"
      value={instantNoodles}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
    />
  );
}

function CategoryTwo() {
  const cannedGoods = useSelector(
    (state) => state.details.value.categories.cannedGoods
  );
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setCannedGoods(""));
    } else {
      dispatch(setCannedGoods(value));
    }
  };

  return (
    <TextField
      label="Canned Goods"
      value={cannedGoods}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
    />
  );
}

function CategoryThree() {
  const eggs = useSelector((state) => state.details.value.categories.eggs);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setEggs(""));
    } else {
      dispatch(setEggs(value));
    }
  };

  return (
    <TextField
      label="Eggs"
      value={eggs}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
    />
  );
}

function CategoryFour() {
  const uncookedRice = useSelector(
    (state) => state.details.value.categories.uncookedRice
  );
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setUncookedRice(""));
    } else {
      dispatch(setUncookedRice(value));
    }
  };
  return (
    <TextField
      label="Uncooked rice"
      value={uncookedRice}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
    />
  );
}

function CategoryFive() {
  const snacksBiscuits = useSelector(
    (state) => state.details.value.categories.snacksBiscuits
  );
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setSnacksBiscuits(""));
    } else {
      dispatch(setSnacksBiscuits(value));
    }
  };
  return (
    <TextField
      label="Snacks &amp; Biscuits"
      value={snacksBiscuits}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
    />
  );
}

function CategorySix() {
  const vegetables = useSelector(
    (state) => state.details.value.categories.vegetables
  );
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setVegetables(""));
    } else {
      dispatch(setVegetables(value));
    }
  };
  return (
    <TextField
      label="Vegetables"
      value={vegetables}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
    />
  );
}

function CategorySeven() {
  const breadPastry = useSelector(
    (state) => state.details.value.categories.breadPastry
  );
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setBreadPastry(""));
    } else {
      dispatch(setBreadPastry(value));
    }
  };
  return (
    <TextField
      label="Bread &amp; Pastry"
      value={breadPastry}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
    />
  );
}

function CategoryOthers() {
  const others = useSelector((state) => state.details.value.categories.others);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      dispatch(setOthers(""));
    } else {
      dispatch(setOthers(value));
    }
  };
  return (
    <TextField
      label="Others"
      value={others}
      onChange={onChange}
      InputProps={{
        inputProps: { maxLength: 4 },
        startAdornment: <InputAdornment position="start">Pcs:</InputAdornment>,
      }}
      variant="outlined"
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
  text_bold: {
    fontWeight: "bold",
  },
}));
export default Item;
