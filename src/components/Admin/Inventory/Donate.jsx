import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@material-ui/core";
import { AddCircleOutlineRounded } from "@material-ui/icons";

import { forwardRef, useImperativeHandle, useState } from "react";
const initialQuantities = {
  "Canned Goods": 0,
  "Instant Noodles": 0,
};
const Donate = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const [donee, setDonee] = useState("");
  const [address, setAddress] = useState("");
  const [quantities, setQuantities] = useState(initialQuantities);
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState(false);

  useImperativeHandle(ref, () => ({
    openForm() {
      setToggle(true);
    },
  }));

  const handleClose = () => {
    setToggle(false);
  };

  const handleReleaseClick = () => {
    if (!donee) return setAlert(true);
    if (!address) return setAlert(true);
    if (Object.values(quantities).every((value) => !value))
      return setAlert(true);
    console.log(donee);
    console.log(address);
    console.log(quantities);
    // post here
    setDonee("");
    setAddress("");
    setQuantities(initialQuantities);
    setItems([]);
    setAlert(false);
    handleClose();
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
            <Button
              color="primary"
              startIcon={<AddCircleOutlineRounded />}
              onClick={() => {
                setItems([
                  ...items,
                  <QuantityInput
                    quantities={quantities}
                    setQuantities={setQuantities}
                  />,
                ]);
              }}
            >
              Add Item
            </Button>
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
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
      label="Name of Donee"
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

// function DateInput({date, setDate}) {
//    return <
// }

function QuantityInput({ quantities, setQuantities }) {
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const onQuantityChange = (e) => {
    if (!category) return;

    const value = e.target.value;
    if (isNaN(value)) return;

    setQuantity(value);

    setQuantities({
      ...quantities,
      [category]: Number(quantities[category]) + Number(value),
    });
  };

  return (
    <Box boxShadow={1} p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Item</InputLabel>
            <Select
              value={category}
              label="Item"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="Canned Goods">Canned Goods</MenuItem>
              <MenuItem value="Instant Noodles">Instant Noodles</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={11} sm={6}>
          <TextField
            value={quantity}
            label="Quantity"
            onChange={(e) => onQuantityChange(e)}
            fullWidth
            required
            error={category ? false : true}
            helperText={category ? "" : "Please choose item first."}
          />
        </Grid>
        {/* <Grid item xs={1}>
          <IconButton>
            <RemoveCircleOutlineRounded />
          </IconButton>
        </Grid> */}
      </Grid>
    </Box>
  );
}
