import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { forwardRef, useImperativeHandle, useState } from "react";

const Form = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    openForm() {
      setToggle(true);
    },
  }));

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      {toggle && (
        <Dialog open={toggle}>
          <DialogTitle>Make a Call for Donation</DialogTitle>
          <DialogContent dividers>
            <TitleInput />
            <DescriptionInput />
            <Divider />
            <CategoriesInput />
            <UploadInput />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="primary" variant="contained">
              Post
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
});

export default Form;

function TitleInput() {
  return <TextField label="Title" fullWidth variant="outlined" />;
}

function DescriptionInput() {
  return (
    <TextField
      label="Description"
      margin="normal"
      fullWidth
      multiline
      rows={4}
      variant="outlined"
    />
  );
}

function CategoriesInput() {
  return (
    <Box mt={1}>
      <Typography variant="h6">Food Categories Needed</Typography>
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
      <FormControlLabel control={<Checkbox checked />} label="Canned Goods" />
    </Box>
  );
}

function UploadInput() {
  return (
    <Box mt={2}>
      <Typography>Upload pubmat</Typography>
      <input type="file" accept=".jpg,.jpeg,.png" />
    </Box>
  );
}
