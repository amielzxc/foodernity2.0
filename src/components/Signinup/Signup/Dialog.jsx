import React, { forwardRef, useImperativeHandle, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";

const VerificationDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useImperativeHandle(ref, () => ({
    setDisplay() {
      handleClickOpen();
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle>{"Please do not close this window"}</DialogTitle>
      <DialogContent>
        <Typography>Check your email chu chu</Typography>
        <TextField label="Verification Code" variant="outlined" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default VerificationDialog;
