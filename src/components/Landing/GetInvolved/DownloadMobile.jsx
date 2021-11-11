import { Grid, useTheme, useMediaQuery, Typography } from "@material-ui/core";

import phoneMockup from "../../../assets/Landing/announcement_page.png";

import gpbadge from "../../../assets/Landing/gpbadge.png";
import apbadge from "../../../assets/Landing/apbadge.png";

function DownloadMobile() {
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
      style={{ padding: "3rem 0" }}
    >
      <Grid item xs={false} md={1} />
      <Grid
        container
        item
        xs={11}
        md={6}
        justify={sm ? "center" : "flex-start"}
      >
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
            variant={xs ? "h4" : "h3"}
          >
            Donate your food donations right at your fingertips.
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
            Instantly make a food donation as easy as one two three. Help make
            your community a sustainable place where no one gets left behind.
          </Typography>
        </Grid>
        <Grid container item xs={12} justify={sm ? "center" : "flex-start"}>
          <img
            src={gpbadge}
            alt="download-googleplaystore"
            style={{ marginRight: ".5rem" }}
          />
          <img src={apbadge} alt="download-applestore" />
        </Grid>
      </Grid>
      <Grid item xs={false} md={1} />
      <Grid container item xs={12} md={4} justify="center">
        <img
          src={phoneMockup}
          alt="phone-mockup"
          style={{
            marginLeft: "1rem",
            marginTop: xs ? "1rem" : "none",
            width: "75%",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default DownloadMobile;
