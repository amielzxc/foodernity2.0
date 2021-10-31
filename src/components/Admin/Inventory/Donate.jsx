import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Typography,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { forwardRef, useImperativeHandle, useState } from "react";
import turnToObject from "../../../services/arrToObject";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import Axios from "axios";

const initialQuantities = {
  Beverages: "",
  Biscuits: "",
  "Canned goods": "",
  Cereals: "",
  "Condiments and sauces": "",
  Eggs: "",
  "Instant Noodles": "",
  Rice: "",
  Snacks: "",
  "Tea/Coffee/Milk/Sugar": "",
};

const Donate = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const inventory = useSelector((state) => state.inventory.value);
  const [alert, setAlert] = useState(false);
  const limit = turnToObject(inventory);

  const [donee, setDonee] = useState("");
  const [address, setAddress] = useState("");
  const [quantities, setQuantities] = useState(initialQuantities);
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const [remarks, setRemarks] = useState("");

  useImperativeHandle(ref, () => ({
    openForm() {
      setToggle(true);
    },
  }));

  const handleClose = () => {
    setToggle(false);
  };

  const handleReleaseClick = () => {
    if (Object.values(quantities).every((value) => !value))
      return setAlert(true);
    if (!donee || !address || !date || !image || !remarks)
      return setAlert(true);

    let categArr = [];
    let quantityArr = [];

    for (let category of Object.entries(quantities)) {
      if (category[1] > 0) {
        categArr.push(category[0]);
        quantityArr.push(category[1]);
      }
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "b4jy8nar");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dftq12ab0/image/upload",
      formData
    ).then(async (response, err) => {
      if (!err) {
        let obj = {
          donationImage: response.data.secure_url,
          donationCategory: categArr.toString(),
          donationQuantity: quantityArr.toString(),
          donationRecipient: donee,
          recipientLocation: address,
          donationRemarks: remarks,
          date: moment(date).format("L"),
        };

        Axios.post(
          "https://foodernity.herokuapp.com/donations/distributeDonations",
          obj
        ).then((response, err) => {
          if (err) {
            return console.log("error: " + err);
          }
        });

        Axios.post("https://foodernity.herokuapp.com/stocks/removeStocks", {
          categArr: categArr,
          qtyArr: quantityArr,
        }).then((response, err) => {
          if (err) {
            return console.log("error: " + err);
          }
          console.log("saved");
          setTimeout(() => window.location.reload(), 0);
        });
      } else {
        console.log(err);
      }
    });
  };

  return (
    <>
      {toggle && (
        <Dialog open={toggle}>
          <DialogTitle>Release Donation</DialogTitle>
          <DialogContent dividers>
            {alert && <Typography>Please fill up details</Typography>}
            <DoneeInput donee={donee} setDonee={setDonee} />
            <AddressInput address={address} setAddress={setAddress} />
            <Divider style={{ margin: "5px 0" }} />
            {/* <Box my={1}>
              <Typography variant="h6">Categories</Typography>
            </Box> */}
            <Grid container spacing={2}>
              {Object.entries(quantities).map((category, index) => {
                return (
                  <Grid item xs={6} sm={4} key={index}>
                    <QuantityInput
                      label={category[0]}
                      quantities={quantities}
                      setQuantities={setQuantities}
                      limit={limit[category[0]]}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Divider style={{ margin: "5px 0" }} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <DateInput date={date} setDate={setDate} />
              </Grid>
              <Grid
                container
                item
                xs={6}
                justifyContent="center"
                alignItems="center"
              >
                <ImageInput image={image} setImage={setImage} />
              </Grid>
            </Grid>
            <Divider style={{ margin: "5px 0" }} />
            <RemarksInput remarks={remarks} setRemarks={setRemarks} />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleReleaseClick}
            >
              Release
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
});

export default Donate;

function DoneeInput({ donee, setDonee }) {
  return (
    <TextField
      value={donee}
      onChange={(e) => setDonee(e.target.value)}
      label="Beneficiaries"
      fullWidth
      variant="outlined"
      margin="normal"
      required
    />
  );
}

function AddressInput({ address, setAddress }) {
  return (
    <TextField
      value={address}
      onChange={(e) => {
        setAddress(e.target.value);
      }}
      label="Address"
      fullWidth
      multiline
      rows={4}
      variant="outlined"
      margin="normal"
      required
    />
  );
}

function DateInput({ date, setDate }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        autoOk
        fullWidth
        inputVariant="outlined"
        label="Date"
        format="L"
        value={date}
        onChange={(date) => setDate(date)}
        InputProps={{ readOnly: true }}
        margin="normal"
      />
    </MuiPickersUtilsProvider>
  );
}

function ImageInput({ setImage }) {
  return (
    <input
      type="file"
      accept=".jpg,.jpeg,.png"
      onChange={(e) => {
        setImage(e.target.files[0]);
      }}
    />
  );
}

function QuantityInput({ label, quantities, setQuantities, limit }) {
  const [error, setError] = useState(false);

  const onQuantityChange = (e) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    if (Number(value) > limit) {
      return setError(true);
    }
    setError(false);
    setQuantities({
      ...quantities,
      [label]: Number(value),
    });
  };

  return (
    <TextField
      disabled={limit ? false : true}
      label={label}
      InputLabelProps={{ shrink: true }}
      value={quantities[label]}
      variant="outlined"
      fullWidth
      onChange={onQuantityChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">pieces</InputAdornment>,
      }}
      error={error}
      helperText={`Current stock: ${limit}`}
      margin="normal"
    />
  );
}

function RemarksInput({ remarks, setRemarks }) {
  return (
    <TextField
      value={remarks}
      onChange={(e) => {
        setRemarks(e.target.value);
      }}
      label="Remarks"
      fullWidth
      multiline
      rows={4}
      variant="outlined"
      margin="normal"
      required
    />
  );
}
