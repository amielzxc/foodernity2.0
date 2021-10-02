import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import phone_mockup from "../../../assets/Landing/phone_mockup.png";

function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justifyContent="center"
      style={{ padding: "3rem 0", height: sm ? "auto" : "94vh" }}
    >
      <Grid item xs={false} md={1} />
      <Grid
        container
        item
        xs={11}
        md={6}
        justifyContent={sm ? "center" : "flex-start"}
      >
        <Grid item>
          <div
            style={{
              position: "absolute",
              top: -100,
              zIndex: -1,
              left: -200,
              height: "400px",
              width: "400px",
              borderRadius: "350px",
              backgroundColor: "#C8E6C9",
            }}
          />
        </Grid>

        <Grid item>
          <div
            style={{
              position: "absolute",
              top: -70,
              zIndex: -1,
              right: 500,
              height: "200px",
              width: "200px",
              borderRadius: "350px",
              backgroundColor: "#BBDEFB",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
          />
        </Grid>

        <Grid item>
          <div
            style={{
              position: "absolute",
              bottom: -120,
              zIndex: -1,
              left: 200,
              height: "200px",
              width: "200px",
              borderRadius: "350px",
              backgroundColor: "#BBDEFB",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
          />
        </Grid>

        <Grid item>
          <div
            style={{
              position: "absolute",
              bottom: -200,
              zIndex: -1,
              right: 0,
              height: "400px",
              width: "400px",
              borderRadius: "400px",
              backgroundColor: "#C8E6C9",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
          />
        </Grid>

        <Grid item>
          <Typography
            component="h1"
            style={{
              textAlign: sm ? "center" : "left",
              fontFamily: "Inter",
              fontWeight: "800",
              marginBottom: "1.5rem",
              marginTop: "3rem",
            }}
            variant={xs ? "h3" : "h2"}
          >
            Join the #1 local free food sharing app
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="h5"
            style={{
              textAlign: sm ? "center" : "left",
              fontFamily: "Inter",
              fontWeight: "500",
              marginBottom: "1rem",
              display: "block",
            }}
          >
            Fight waste. Help your neighbors. Save our planet. Feel Amazing!
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent={sm ? "center" : "flex-start"}
        >
          <Button
            variant="contained"
            disableElevation
            disableRipple
            className={classes.button_green}
            style={{ margin: sm ? "1.5rem" : "0" }}
          >
            Download now
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={false} lg={1} />
      <Grid container item xs={12} md={4} justifyContent="center">
        <img
          src={phone_mockup}
          alt="phone-mockup"
          style={{ marginLeft: "1rem", marginTop: xs ? "1rem" : "none" }}
        />
      </Grid>
    </Grid>
  );
}
export default Hero;

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
