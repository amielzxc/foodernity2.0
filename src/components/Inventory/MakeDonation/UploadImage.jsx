import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { setImage } from "../../../store/Inventory/details";
import { useSelector, useDispatch } from "react-redux";
import { DisplaySnackbar } from "../../Shared/Snackbar";

const containerStyle = {
  width: "100%",
  height: "250px",
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  //border: '1px solid red',
  maxWidth: "100%",
  //width: 'auto',
  height: "100%",
  objectFit: "contain",
};

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
};

function UploadImage() {
  // const donationImage = useSelector((state) => state.details.value.image);
  const dispatch = useDispatch();
  const donationImage = useSelector((state) => state.details.value.image);
  // const convertedImage =
  //   donationImage === null ? donationImage : URL.createObjectURL(donationImage);
  const useSnackbarRef = useRef(null);
  // var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  const [displayImage, setDisplayImage] = useState(donationImage);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];

      setDisplayImage(URL.createObjectURL(file));
      dispatch(setImage(URL.createObjectURL(file)));
    }
  };

  return (
    <>
      {displayImage !== null && (
        <div style={containerStyle}>
          <img style={imageStyle} src={displayImage} alt="donation" />
        </div>
      )}
      <Button type="file"></Button>

      <div style={buttonStyle}>
        <Button color="primary" variant="contained" component="label">
          Upload Image
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={onImageChange}
            hidden
          />
        </Button>
      </div>
      <DisplaySnackbar
        ref={useSnackbarRef}
        message="Max of 5mb only."
        severity="warning"
      />
    </>
  );
}

export default UploadImage;
