import { makeStyles, Typography } from "@material-ui/core";
import { CallReceived } from "@material-ui/icons";
import { useSelector } from "react-redux";

function Statistics() {
  const classes = useStyles();
  const donationsReceived = useSelector(
    (state) => state.dashboard.donationsReceived
  );
  const donationsDistributed = useSelector(
    (state) => state.dashboard.donationsDistributed
  );
  const currentStocks = useSelector((state) => state.dashboard.currentStocks);
  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Statistics
      </Typography>
      <div className={classes.counts_container}>
        <Count
          title="Donations Received"
          icon={<CallReceived style={{ color: "blue" }} />}
          count={`${donationsReceived}`}
        />
        <Count
          title="Donations Distributed"
          icon={<CallReceived style={{ color: "green" }} />}
          count={`${donationsDistributed}`}
        />
        <Count
          title="Current Donation Stocks"
          icon={<CallReceived style={{ color: "red" }} />}
          count={`${currentStocks}`}
        />
        <Count
          title="Active Call for Donations"
          icon={<CallReceived style={{ color: "orange" }} />}
          count="3"
        />
      </div>
    </div>
  );
}

export default Statistics;

function Count({ title, icon, count }) {
  const classes = useStyles();
  return (
    <div className={classes.count}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.details}>
        <Typography variant="h6" className={classes.details_count}>
          {count}
        </Typography>
        <Typography variant="body2" className={classes.details_title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    padding: "20px 40px",
    background: "white",
    borderRadius: "5px",
    boxShadow: "0 0 5px 1px rgba(0,0,0,.05)",
  },
  title: {
    fontWeight: "bold",
    letterSpacing: ".3px",
    marginBottom: "15px",
  },
  counts_container: {
    display: "flex",

    flexWrap: "wrap",
  },
  count: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    minWidth: "200px",
    marginBottom: "15px",
  },
  icon: {
    background: "rgba(0,0,0,.04)",
    padding: "15px",
    borderRadius: "50%",
    height: "55px",
    color: "red",
  },
  details: {
    display: "flex",
    margin: "0 15px",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  details_count: {
    fontWeight: "bold",
  },
  details_title: {
    color: "rgba(0,0,0,.7)",
    letterSpacing: ".4px",
  },
}));
