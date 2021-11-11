import { Grid, makeStyles, Typography } from "@material-ui/core";
import {
  CallReceivedRounded,
  GroupRounded,
  InboxRounded,
  VisibilityRounded,
} from "@material-ui/icons";
import { useSelector } from "react-redux";

function RightCount() {
  const userCount = useSelector((state) => state.dashboard.userCount);
  const acceptedDonations = useSelector(
    (state) => state.dashboard.acceptedDonations
  );
  const classes = useStyles();
  return (
    <Grid container item spacing={3}>
      <Grid item xs={12}>
        <div className={classes.container}>
          <Typography
            className={classes.title}
            style={{ marginBottom: "10px" }}
          >
            To Receive
          </Typography>
          <div className={classes.count_container}>
            <div className={classes.receive_icon}>
              <CallReceivedRounded />
            </div>
            <Typography variant="h5" className={classes.count}>
              {acceptedDonations}
            </Typography>
          </div>
        </div>
      </Grid>
      {/* <Grid item xs={12}>
        <div className={classes.container}>
          {" "}
          <Typography className={classes.title}>User Count</Typography>
          <div className={classes.count_container}>
            <div className={classes.user_icon}>
              <GroupRounded />
            </div>
            <Typography variant="h5" className={classes.count}>
              {userCount}
            </Typography>
          </div>
         
        </div>
      </Grid> */}
    </Grid>
  );
}

function LeftCount() {
  const pendingDonations = useSelector(
    (state) => state.dashboard.pendingDonations
  );
  const classes = useStyles();
  return (
    <Grid container item spacing={3}>
      <Grid item xs={12}>
        <div className={classes.container}>
          <Typography
            className={classes.title}
            style={{ marginBottom: "10px" }}
          >
            To Accept
          </Typography>
          <div className={classes.count_container}>
            <div className={classes.pending_icon}>
              <InboxRounded />
            </div>
            <Typography variant="h5" className={classes.count}>
              {pendingDonations}
            </Typography>
          </div>
        </div>
      </Grid>
      {/* <Grid item xs={12}>
        <div className={classes.container}>
          <Typography className={classes.title}>Visitor Count</Typography>
          <div className={classes.count_container}>
            <div className={classes.visitor_icon}>
              <VisibilityRounded />
            </div>
            <Typography variant="h5" className={classes.count}>
              50
            </Typography>
          </div>

       
        </div>
      </Grid> */}
    </Grid>
  );
}
export { RightCount, LeftCount };

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    padding: "20px 30px",
    background: "white",
    borderRadius: "5px",
    boxShadow: "0 0 5px 1px rgba(0,0,0,.05)",
  },
  title: {
    fontWeight: "bold",
    letterSpacing: ".3px",
    marginBottom: "15px",
  },
  count: {
    fontWeight: "bold",
    letterSpacing: ".3px",
  },
  count_container: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  user_icon: {
    background: "rgba(0,0,0,.04)",
    padding: "10px",
    borderRadius: "50%",
    height: "44px",
    color: "green",
  },
  visitor_icon: {
    background: "rgba(0,0,0,.04)",
    padding: "10px",
    borderRadius: "50%",
    height: "44px",
    color: "red",
  },
  receive_icon: {
    background: "rgba(0,0,0,.04)",
    padding: "10px",
    borderRadius: "50%",
    height: "44px",
    color: "blue",
  },
  pending_icon: {
    background: "rgba(0,0,0,.04)",
    padding: "10px",
    borderRadius: "50%",
    height: "44px",
    color: "orange",
  },
}));
