import { Grid, makeStyles, Typography } from "@material-ui/core";

function RightCount() {
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
          <Typography variant="h5" className={classes.count}>
            50
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.container}>
          {" "}
          <Typography className={classes.title}>User Count</Typography>
          <Typography variant="h5" className={classes.count}>
            50
          </Typography>
          <Typography variant="caption" style={{ color: "green" }}>
            ↑ 10% than last month
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

function LeftCount() {
  const classes = useStyles();
  return (
    <Grid container item spacing={3}>
      <Grid item xs={12}>
        <div className={classes.container}>
          <Typography
            className={classes.title}
            style={{ marginBottom: "10px" }}
          >
            Pending
          </Typography>
          <Typography variant="h5" className={classes.count}>
            50
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.container}>
          {" "}
          <Typography className={classes.title}>Visitor Count</Typography>
          <Typography variant="h5" className={classes.count}>
            50
          </Typography>
          <Typography variant="caption" style={{ color: "red" }}>
            ↓ 3% than last month
          </Typography>
        </div>
      </Grid>
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
}));
