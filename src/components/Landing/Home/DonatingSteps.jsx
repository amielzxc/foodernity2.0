import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import device_mockup from "../../../assets/Landing/device_mockup.png";
function DonatingSteps() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      item
      xs={12}
      spacing={10}
      direction={sm ? "column-reverse" : "row"}
      style={{ marginBottom: "5rem" }}
    >
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
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
            }}
          >
            Acknowledge the donating guidelines
          </Typography>
          <Typography
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            To protect the safety of everyone, several guidelines are implem
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
            Fill up the donation details
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            Simply fill up the name, category, expiry date, and an optional
            notes of your donation. You can also set the pickup location, date,
            and time for your own convenience.
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
            Post it right away
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            You can get to take a look at what your donation looks like to
            others. This helps confirm if there are incorrect details. If
            everything is right, all it takes is to post it and everything is
            done!
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={5} justify="center">
        <Grid item>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Inter",
              fontWeight: "800",
              textAlign: sm ? "center" : "left",
            }}
          >
            ...so does sharing a donation.
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
    </Grid>
  );
}

export default DonatingSteps;
