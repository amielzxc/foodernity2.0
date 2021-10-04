import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useRef } from "react";

function Item({
  donor,
  image,
  name,
  quantity,
  category,
  expiry,
  notes,
  contactNumber,
  deliverDate,
  status,
}) {
  const classes = useStyles();
  const dialogRef = useRef(null);

  const handleItemClick = (event) => {
    const el = event.target;

    if (el.closest("button")) {
      console.log("accept");
    } else if (el.closest("div")) {
      console.log("display details");
    } else {
      return;
    }
  };

  return (
    <>
      <Box
        p={1}
        bgcolor="white"
        boxShadow={1}
        borderRadius={5}
        onClick={handleItemClick}
      >
        <div className={classes.item}>
          <img src={image} alt="" className={classes.item__image} />
          <Box
            pl={2}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            width="100%"
          >
            <Details
              donor={donor}
              name={name}
              contactNumber={contactNumber}
              quantity={quantity}
              deliverDate={deliverDate}
            />
            <GetButton status={status} />
          </Box>
        </div>
      </Box>
      {/* <Details /> */}
    </>
  );
}

function Details({ donor, name, contactNumber, quantity, deliverDate }) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.text_bold}>{name}</Typography>

      <Typography variant="body2">
        {" "}
        <span style={{ fontWeight: "200" }}>Donor:</span> {donor}
      </Typography>
      <Typography variant="body2">
        <span style={{ fontWeight: "200" }}>Contact Number:</span>{" "}
        {contactNumber}
      </Typography>
      <Typography variant="body2" style={{ fontWeight: "200" }}>
        Date:
        <span style={{ fontWeight: "500" }}> {deliverDate}</span>
      </Typography>

      <Typography
        variant="body2"
        style={{ fontWeight: "200", marginBottom: ".5rem" }}
      >
        Quantity: <span style={{ fontWeight: "500" }}>{quantity} piece/s</span>
      </Typography>
    </>
  );
}

function GetButton({ status }) {
  if (status === "Available") {
    return <AcceptButton />;
  } else {
    return <ClaimButton />;
  }
}

function AcceptButton() {
  return (
    <Box alignSelf="flex-end">
      <Button variant="contained" color="primary" disableElevation>
        Accept Donation
      </Button>
    </Box>
  );
}

function ClaimButton() {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="flex-end">
      {/* <Button variant="contained" className={classes.button_lightblue}>
        <ChatIcon />
      </Button> */}
      <Button
        disableElevation
        variant="contained"
        className={classes.button_green}
      >
        Mark as claimed
      </Button>
    </Box>
  );
}
export default Item;

const useStyles = makeStyles((theme) => ({
  item: {
    background: "white",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 450px)": {
      flexDirection: "column",
    },
  },
  item__image: {
    background: "rgb(245,245,245)",
    width: "100px",
    height: "100px",
    objectFit: "contain",
    borderRadius: "5px",
  },
  text_bold: {
    fontWeight: "bold",
  },
  button_green: {
    color: "white",
    backgroundColor: "#66BB6A",
    "&:hover": {
      backgroundColor: "#57A05A",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "#66BB6A",
      },
    },
  },
  button_lightblue: {
    marginRight: theme.spacing(1),
    color: "#2196F3",
    backgroundColor: "#E3F2FD",
    "&:hover": {
      backgroundColor: "#BEE4FF",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "#2196F3",
      },
    },
  },
}));
