import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  DialogActions,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";

const ItemDetails = forwardRef((props, ref) => {
  const donations = useSelector((state) => state.donations.value);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);
  const [id, setId] = useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (id) {
      let donation = donations.find(
        (donation) => donation.donationID === Number(id)
      );

      let formatted = {};

      for (let [key, value] of Object.entries(donation)) {
        if (key === "donationCategories" || key === "donationQuantities") {
          const sliced = value.slice(1, value.length - 1);
          const splitted = sliced.split(", ");
          formatted[key] = splitted;
        } else {
          formatted[key] = value;
        }
      }
      console.log(formatted);
      setDetails(formatted);
    }
  }, [id, donations]);

  useImperativeHandle(ref, () => ({
    showModal(id) {
      setOpen(true);
      setId(id);
    },
    closeModal() {
      setOpen(false);
    },
  }));

  const handleClose = () => {
    setOpen(false);
  };

  return details ? (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle>{"Donation Details"}</DialogTitle>
      <DialogContent dividers>
        <img
          src={details.imgPath}
          alt="donation"
          className={classes.donationImage}
        />

        <Typography variant="h6" className={classes.text_bold}>
          {details.donationName}
        </Typography>
        <Divider className={classes.divider_margin} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DonorName name={details.fullName} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Status status={details.status} />
          </Grid>
        </Grid>
        <Divider className={classes.divider_margin} />
        <Grid container spacing={2} className={classes.grid_margin}>
          {details.donationCategories.map((category, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <DonationItem
                category={category}
                quantity={details.donationQuantities[index]}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    <></>
  );
});

export default ItemDetails;

function DonorName({ name }) {
  const classes = useStyles();
  return (
    <Box className={classes.text_center}>
      <Typography variant="body1" className={classes.text_bold}>
        Donor
      </Typography>
      <Typography>{name}</Typography>
    </Box>
  );
}

function Status({ status }) {
  const classes = useStyles();
  return (
    <Box className={classes.text_center}>
      <Typography className={classes.text_bold}>Status</Typography>
      {status === "pending" ? (
        <Typography className={classes.text_blue}>{status}</Typography>
      ) : (
        <Typography className={classes.text_green}>{status}</Typography>
      )}
    </Box>
  );
}

function DonationItem({ category, quantity }) {
  return (
    <TextField
      label={category}
      value={quantity}
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: <InputAdornment position="end">pieces</InputAdornment>,
      }}
    />
  );
}
const useStyles = makeStyles(() => ({
  donationImage: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  text_bold: {
    fontWeight: "bold",
  },
  text_center: {
    textAlign: "center",
  },
  text_blue: {
    color: "#2196f3",
  },
  text_green: {
    color: "#66BB6A",
  },
  divider_margin: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  grid_margin: {
    marginTop: "10px",
  },
}));
