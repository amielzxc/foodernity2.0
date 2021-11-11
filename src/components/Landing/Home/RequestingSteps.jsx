import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import post_donation_page from "../../../assets/Landing/post_donation_page.png";
import donation_pending from "../../../assets/Landing/donation_pending.png";

function RequestingSteps() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container item xs={12} spacing={10} style={{ marginBottom: "5rem" }}>
      <Grid container item xs={12} md={5} justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Inter",
              fontWeight: "800",
              textAlign: sm ? "center" : "left",
            }}
          >
            Making a donation is an easy step.
          </Typography>
          <Grid item xs={12}>
            <img
              src={post_donation_page}
              alt="device-mockup"
              style={{ width: "50%", marginTop: "2rem" }}
            />
            <img
              src={donation_pending}
              alt="device-mockup"
              style={{ width: "50%", marginTop: "2rem" }}
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
            Post a Donation
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            Just provide your donation image, the name of your donation, and the
            food categories included.
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
            Double check your donation
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            Make sure that all your inputs are correct before proceeding.
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
            Wait for your donation to be accepted by the organization
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            The organization will review your donation before it gets accepted.
            You will be notified once you can proceed to delivering it to a
            designated drop-off location.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RequestingSteps;
