import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
function Partner() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      item
      xs={12}
      style={{
        backgroundColor: "#66BB6A",
        padding: "5rem 0 5rem 0",
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            fontFamily: "Inter",
            fontWeight: "800",
            color: "white",
            marginBottom: "2rem",
          }}
        >
          Become a Food Bank Partner!
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography
          variant="body1"
          style={{
            fontFamily: "Inter",
            color: "white",
            textAlign: "center",
            fontWeight: "300",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          nec adipiscing netus suspendisse eget elit dictum congue. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ornare urna nec
          adipiscing netus suspendisse eget elit dictum congue. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ornare urna nec
          adipiscing netus suspendisse eget elit dictum congue.
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        style={{ marginTop: "4.5rem" }}
      >
        <Button
          component={Link}
          to="/contactus"
          variant="contained"
          className={classes.button_white}
          disableElevation
          disableRipple
        >
          Contact Us
        </Button>
      </Grid>
    </Grid>
  );
}

export default Partner;

const useStyles = makeStyles((theme) => ({
  button_white: {
    fontFamily: "Inter",
    fontWeight: "600",
    padding: theme.spacing(1.5, 3),
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#E5E5E5",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "white",
      },
    },
  },
}));
