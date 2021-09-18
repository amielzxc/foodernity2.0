import {
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import planet from "../../../assets/Landing/planet-earth.png";
function Overview() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justify="center"
      direction={sm ? "column-reverse" : "row"}
      style={{ padding: "3rem 0", height: sm ? "auto" : "94vh" }}
    >
      <Grid item xs={false} md={1} />
      <Grid container item xs={11} md={7}>
        <Grid item>
          <Hidden smDown>
            <div
              style={{
                marginLeft: "-1rem",
                marginTop: "3rem",
                position: "absolute",
                width: "315px",
                height: "40px",
                // top: '200',
                // left: '100',
                background: "#7BDB80",
                zIndex: "-1",
              }}
            />
          </Hidden>
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
            Our Mission, Goals, &amp; Values
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
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
            viverra arcu, amet lobortis donec nibh. Feugiat nisl quis velit
            pharetra mattis.
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          spacing={3}
          justify={sm ? "center" : "flex-start"}
        >
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Inter",
                color: "#66BB6A",
                fontWeight: "600",
                textAlign: sm ? "center" : "start",
              }}
            >
              Mission
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                textAlign: sm ? "center" : "start",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              quisque habitasse
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Typography
              item
              xs={4}
              variant="h5"
              style={{
                fontFamily: "Inter",
                color: "#66BB6A",
                fontWeight: "600",
                textAlign: sm ? "center" : "start",
              }}
            >
              Goals
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                textAlign: sm ? "center" : "start",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              quisque habitasse
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Inter",
                color: "#66BB6A",
                fontWeight: "600",
                textAlign: sm ? "center" : "start",
              }}
            >
              Values
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                textAlign: sm ? "center" : "start",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              quisque habitasse
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={false} md={1} /> */}
      <Hidden smDown>
        <Grid container item xs={12} md={4} justify="center">
          <img
            src={planet}
            alt="phone-mockup"
            style={{
              marginLeft: "1rem",
              marginTop: xs ? "1rem" : "none",
              width: sm ? "200px" : "350px",
            }}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Overview;
