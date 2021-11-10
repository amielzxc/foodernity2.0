import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { forwardRef, useImperativeHandle, useState } from "react";
import Axios from "axios";

const Form = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const [alert, setAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const classes = useStyles();

  useImperativeHandle(ref, () => ({
    openForm() {
      setToggle(true);
    },
  }));

  const handleClose = () => {
    setToggle(false);
  };

  const onPostClick = (e) => {
    if (!title || !description || !image) {
      setAlert(true);
      e.stopPropagation();
      return;
    }
    setAlert(false);
    setToggle(false);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "b4jy8nar");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dftq12ab0/image/upload",
      formData
    ).then(async (response, err) => {
      if (!err) {
        const obj = {
          title: title,
          description: description,
          imgPath: response.data.secure_url,
          status: "unfulfilled",
          date: getDate(),
        };

        Axios.post(
          "https://foodernity.herokuapp.com/donations/addCallForDonations",
          obj
        ).then((response, err) => {
          if (err) {
            console.log("error: " + err);
          }

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
          <DialogTitle>Make a Call for Donation</DialogTitle>
          <DialogContent dividers>
            {alert && (
              <Typography className={classes.error_text}>
                Please fill up all of the inputs.
              </Typography>
            )}
            <TitleInput title={title} setTitle={setTitle} />
            <DescriptionInput
              description={description}
              setDescription={setDescription}
            />
            <Divider />
            <UploadInput setImage={setImage} />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={(e) => onPostClick(e)}
              className="actionButton"
            >
              Post
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
});

export default Form;

function TitleInput({ title, setTitle }) {
  return (
    <TextField
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
      }}
      label="Title"
      fullWidth
      variant="outlined"
      required
    />
  );
}

function DescriptionInput({ description, setDescription }) {
  return (
    <TextField
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
      }}
      label="Description"
      margin="normal"
      fullWidth
      multiline
      rows={4}
      variant="outlined"
      required
    />
  );
}

function UploadInput({ setImage }) {
  return (
    <Box mt={2}>
      <Typography>Upload pubmat</Typography>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
    </Box>
  );
}

const useStyles = makeStyles(() => ({
  error_text: {
    textAlign: "center",
    color: "red",
  },
}));

function getDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return `${months[month]} ${day}, ${year}`;
}
