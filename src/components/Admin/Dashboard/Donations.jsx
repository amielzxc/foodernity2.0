import { makeStyles, Typography } from "@material-ui/core";

function Donations() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {" "}
      <Typography variant="h6" className={classes.title}>
        Donations
      </Typography>
    </div>
  );
}

export default Donations;

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
}));
