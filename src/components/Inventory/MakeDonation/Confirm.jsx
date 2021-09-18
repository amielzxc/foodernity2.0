import { Chip, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

function Confirm() {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid
        container
        item
        xs={12}
        lg={6}
        direction="column"
        className={classes.container}
      >
        <Typography variant="h6" className={classes.title}>
          Donation Image
        </Typography>
        <Image />
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={6}
        direction="column"
        className={classes.container}
      >
        <Typography variant="h6" className={classes.title}>
          Item Details
        </Typography>
        <Details />
      </Grid>
    </Grid>
  );
}

function Image() {
  const image = useSelector((state) => state.details.value.image);
  const classes = useStyles();
  return (
    <>
      <Paper elevation={2} className={classes.container__paper}>
        <div
          style={{
            //backgroundImage: `url(${convertedImage})`,
            backgroundSize: "contain",
            zIndex: "0",
            //filter: 'blur(5px)',
            height: "450px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              //backdropFilter: 'blur(10px)',
              //zIndex: '1',
              maxWidth: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={image}
            alt="donation"
          />
          {/* </div> */}
        </div>
      </Paper>
    </>
  );
}

function Details() {
  const classes = useStyles();
  const {
    name,
    category,
    expiry,
    notes,
    claimingMethod,
    claimingLocation,
    claimingDate,
  } = useSelector((state) => state.details.value);

  return (
    <Paper elevation={2} className={classes.container__paper}>
      <Typography variant="h5" className={classes.text_bold}>
        {name}
      </Typography>
      <div className={classes.container__chipCategory}>
        <Chip label={category} color="primary" />
      </div>
      <div style={{ margin: "5px 0" }}>
        <Typography>
          The expiry date is on{" "}
          <span className={classes.text_bold}>{getFormattedDate(expiry)} </span>
          .
        </Typography>
      </div>
      <div className={classes.container__margin}>
        <Typography variant="h6" className={classes.text_bold}>
          Donation Notes
        </Typography>
        <Typography>{notes === "" ? <em>none</em> : notes}</Typography>
      </div>
      <div className={classes.container__margin}>
        <Typography variant="h6" className={classes.text_bold}>
          Claiming Instruction
        </Typography>
        <Typography>Thru {claimingMethod}</Typography>
      </div>
      <div className={classes.container__margin}>
        <Typography variant="h6" className={classes.text_bold}>
          Claiming Instruction
        </Typography>
        <ClaimingInstruction
          method={claimingMethod}
          date={claimingDate}
          location={claimingLocation}
        />
      </div>
    </Paper>
  );
}

function ClaimingInstruction({ method, date, location }) {
  const classes = useStyles();

  if (method === "Pickup") {
    return (
      <Typography>
        The organization will pickup your donation at{" "}
        <span className={classes.text_blue}>{location}</span> on{" "}
        <span className={classes.text_blue}>{getFormattedDate(date)}</span>.
      </Typography>
    );
  } else if (method === "Deliver") {
    return (
      <Typography>
        The organization will wait for you to deliver the donations on their
        address at <span className={classes.text_blue}>{location}</span> on{" "}
        <span className={classes.text_blue}>{getFormattedDate(date)}</span>.
      </Typography>
    );
  }
}

function getFormattedDate(ms) {
  let date = new Date(ms);
  let months = [
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
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
export default Confirm;
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "700px",
    height: "100%",
    padding: theme.spacing(1, 3),
  },
  container__paper: {
    padding: theme.spacing(2.5),
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  container__chipCategory: {
    display: "flex",
    margin: "10px 0",
  },
  text_bold: {
    fontWeight: "bold",
  },
  text_blue: {
    color: "#2196F3",
    fontWeight: "bold",
  },
  container__margin: {
    margin: "10px 0",
  },
}));
