import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ChatIcon from "@material-ui/icons/Chat";

function Item({
  donor,
  image,
  name,
  quantity,
  category,
  expiry,
  notes,
  claimingMethod,
  claimingLocation,
  claimingDate,
  status,
}) {
  const classes = useStyles();
  return (
    <Box p={1} bgcolor="white" boxShadow={1} borderRadius={5}>
      <div className={classes.item}>
        <img src={image} alt="" className={classes.item__image} />
        <Box
          pl={2}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          {/* <Typography>{claimingLocation}</Typography> */}
          <Details
            donor={donor}
            name={name}
            quantity={quantity}
            claimingMethod={claimingMethod}
            claimingLocation={claimingLocation}
            claimingDate={claimingDate}
          />
          <GetButton status={status} />
        </Box>
      </div>
    </Box>
  );
}

function Details({
  donor,
  name,
  quantity,
  claimingMethod,
  claimingLocation,
  claimingDate,
}) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.text_bold}>{name}</Typography>
      <Box display="flex" alignItems="center" style={{ marginLeft: "-5px" }}>
        <LocationOnIcon
          style={{ color: "red", width: "1.1rem", marginRight: "3px" }}
        />
        <Typography
          variant="body2"
          style={{ fontWeight: "500", color: "#2196F3", width: "50%" }}
          noWrap={true}
        >
          {claimingLocation}
        </Typography>
      </Box>
      <Typography variant="body2">
        {" "}
        <span style={{ fontWeight: "200" }}>Donor:</span> {donor}
      </Typography>
      <Typography variant="body2" style={{ fontWeight: "200" }}>
        {claimingMethod} on{" "}
        <span style={{ fontWeight: "500" }}>{claimingDate}</span>
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
      <Button variant="contained" className={classes.button_lightblue}>
        <ChatIcon />
      </Button>
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
    // width: "93%",
    background: "white",
    display: "flex",
    alignItems: "center",

    // flexFlow: "row wrap",
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
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
