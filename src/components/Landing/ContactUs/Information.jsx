import { makeStyles, Typography } from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";

function Information() {
  const classes = useStyles();

  return (
    <address>
      <div style={{ display: "flex", margin: "1rem 0 .2rem 0" }}>
        <LocationOnIcon className={classes.icon__color_green} />
        <Typography variant="body1" style={{ fontFamily: "Inter" }}>
          551 M.F. Jhocson St, Sampaloc, Manila, 1008 Metro Manila
        </Typography>
      </div>
      <div style={{ display: "flex", margin: ".5rem 0 .2rem 0" }}>
        <ScheduleIcon className={classes.icon__color_green} />
        <Typography variant="body1" style={{ fontFamily: "Inter" }}>
          8am - 6pm
        </Typography>
      </div>
      <div style={{ display: "flex", margin: ".5rem 0 .2rem 0" }}>
        <EmailRoundedIcon className={classes.icon__color_green} />
        <Typography variant="body1" style={{ fontFamily: "Inter" }}>
          foodernity@gmail.com
        </Typography>
      </div>
      <div style={{ display: "flex", margin: ".5rem 0 .2rem 0" }}>
        <CallRoundedIcon className={classes.icon__color_green} />
        <Typography variant="body1" style={{ fontFamily: "Inter" }}>
          +63287121900
        </Typography>
      </div>
    </address>
  );
}

export default Information;
const useStyles = makeStyles((theme) => ({
  icon__color_green: {
    color: "#66BB6A",
    fontSize: "1.8rem",
    marginRight: "1rem",
  },
  button_green: {
    margin: "1.3rem 0",
    fontFamily: "Inter",
    fontWeight: "600",
    padding: theme.spacing(1.5, 3),
    color: "white",
    backgroundColor: "#66BB6A",
    "&:hover": {
      backgroundColor: "#5DAC61",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "#66BB6A",
      },
    },
  },
}));
