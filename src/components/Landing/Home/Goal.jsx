import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import waste from "../../../assets/Landing/waste.png";
import hunger from "../../../assets/Landing/hunger.png";
import community from "../../../assets/Landing/community.png";

function Goal() {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      justifyContent="center"
      xs={12}
      style={{ backgroundColor: "black", marginBottom: "3rem" }}
    >
      <Grid item>
        <Typography
          variant="h5"
          style={{
            marginTop: "3rem",
            color: "#66BB6A",
            fontFamily: "Inter",
            fontWeight: "700",
          }}
        >
          OUR GOAL
        </Typography>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={10}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            marginTop: "3rem",
            color: "white",
            fontFamily: "Inter",
            fontWeight: "700",
            marginBottom: "4rem",
          }}
        >
          Why Recognizing Food Insecurity Matters to Us
        </Typography>
      </Grid>
      <Grid item xs={12} />
      <Grid container item xs={11} spacing={5} justifyContent="center">
        <Grid
          container
          direction="column"
          alignItems="center"
          item
          xs={12}
          sm={10}
          md={6}
          lg={4}
        >
          <img
            src={waste}
            alt="food-waste"
            style={{ width: "150px", height: "150px" }}
          />

          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Inter",
              margin: "1rem 0",
            }}
          >
            Reduce Food Waste
          </Typography>
          <Typography
            style={{
              color: "white",
              fontFamily: "Inter",
              textAlign: "center",
              fontWeight: "300",
            }}
          >
            Excess supply resources brings opportunity to hungry people.
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          item
          xs={12}
          sm={10}
          md={6}
          lg={4}
        >
          <img
            src={hunger}
            alt="food-waste"
            style={{ width: "150px", height: "150px" }}
          />
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Inter",
              margin: "1rem 0",
            }}
          >
            End Hunger. Help Poverty
          </Typography>
          <Typography
            style={{
              color: "white",
              fontFamily: "Inter",
              textAlign: "center",
              fontWeight: "300",
            }}
          >
            Hunger is caused by poverty, but if we all work together, we can
            make a world where no one sleeps hungry.
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          item
          xs={12}
          sm={10}
          md={6}
          lg={4}
        >
          <img
            src={community}
            alt="food-waste"
            style={{ width: "150px", height: "150px" }}
          />
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Inter",
              margin: "1rem 0",
            }}
          >
            Build Community Connection
          </Typography>
          <Typography
            style={{
              color: "white",
              fontFamily: "Inter",
              textAlign: "center",
              fontWeight: "300",
            }}
          >
            Connecting people with food, organizations serving the community.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <Button
          component={Link}
          to="/ourgoal"
          variant="contained"
          endIcon={<ChevronRightIcon />}
          disableElevation
          disableRipple
          className={classes.button_green}
        >
          View our goal
        </Button>
      </Grid>
    </Grid>
  );
}

export default Goal;

const useStyles = makeStyles((theme) => ({
  button_green: {
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
