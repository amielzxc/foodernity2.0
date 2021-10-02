import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import device_mockup from "../../../assets/Landing/device_mockup.png";
function RequestingSteps() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container item xs={12} spacing={10} style={{ marginBottom: "5rem" }}>
      <Grid container item xs={12} md={5} justifyContent="center">
        <Grid item>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Inter",
              fontWeight: "800",
              textAlign: sm ? "center" : "left",
            }}
          >
            Requesting donations is an easy step.
          </Typography>
          <Grid item>
            <img
              src={device_mockup}
              alt="device-mockup"
              style={{ width: "100%", marginTop: "2rem" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={7}>
        <Grid item>
          <div
            style={{
              backgroundColor: "#66BB6A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "4rem",
              height: "4rem",
              borderRadius: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Inter",
                fontWeight: "800",
                display: "inline-block",
                color: "white",
              }}
            >
              1
            </Typography>
          </div>
          <Typography
            variant="h5"
            style={{ fontFamily: "Inter", fontWeight: "600" }}
          >
            Browse for available donations
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            You can browse through the donations around your community. You can
            even set filters too, to match the preferences you like.
          </Typography>
        </Grid>
        <Grid item>
          <div
            style={{
              backgroundColor: "#66BB6A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "4rem",
              height: "4rem",
              borderRadius: "2rem",
              marginBottom: "1rem",
              marginTop: sm ? "2rem" : "0",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Inter",
                fontWeight: "800",
                display: "inline-block",
                color: "white",
              }}
            >
              2
            </Typography>
          </div>
          <Typography
            variant="h5"
            style={{ fontFamily: "Inter", fontWeight: "600" }}
          >
            Request the donation you want
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            Once you have requested a donation, you can message the donor to
            talk about further arrangements on claiming the donation.
          </Typography>
        </Grid>
        <Grid item>
          <div
            style={{
              backgroundColor: "#66BB6A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "4rem",
              height: "4rem",
              borderRadius: "2rem",
              marginBottom: "1rem",
              marginTop: sm ? "2rem" : "0",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Inter",
                fontWeight: "800",
                display: "inline-block",
                color: "white",
              }}
            >
              3
            </Typography>
          </div>
          <Typography
            variant="h5"
            style={{ fontFamily: "Inter", fontWeight: "600" }}
          >
            Get the donation
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            After setting up your arrangement between the donor, you can now get
            your donation either by pickup or meetup according to the
            arrangement. Do not forget to practice safety protocols!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RequestingSteps;
