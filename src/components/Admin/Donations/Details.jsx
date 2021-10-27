import React, { forwardRef, useImperativeHandle, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";

const ItemDetails = forwardRef((props, ref) => {
  console.log(props);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useImperativeHandle(ref, () => ({
    showModal() {
      setOpen(true);
    },
    closeModal() {
      setOpen(false);
    },
  }));

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle>{"Donation Details"}</DialogTitle>
      <DialogContent>
        {/* <Typography></Typography> */}
        {/* <Typography>Donation: {name}</Typography> */}
        {/* <Typography>Expiry Date: {expiry}</Typography> */}
        <Typography>Categories</Typography>
        {/* {categories.map((item, index) => (
          <Chip
            key={index}
            color="primary"
            label={item}
            size="small"
            style={{ marginRight: "5px" }}
          />
        ))}
        <Typography>Donor: {donor}</Typography>
        <Typography>Deliver date: {deliverDate} </Typography>
        <Typography>Contact Number: {contactNumber}</Typography>
        <Typography>Notes: {notes}</Typography> */}
        <Typography></Typography>
      </DialogContent>
      {/* <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          autoFocus
        >
          Accept Donation
        </Button>
      </DialogActions> */}
    </Dialog>
  );
});

export default ItemDetails;
