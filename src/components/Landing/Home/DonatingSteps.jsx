import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import donation_accepted from "../../../assets/Landing/donation_accepted.png";
import donation_received from "../../../assets/Landing/donation_received.png";

function DonatingSteps() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container item xs={12} spacing={10} style={{ marginBottom: "5rem" }}>
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
              4
            </Typography>
          </div>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
            }}
          >
            When your donation gets accepted
          </Typography>
          <Typography
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Once your donation has been accepted by the organization, you can
            now proceed to deliver your donations to a designated drop-off
            location.
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
              5
            </Typography>
          </div>
          <Typography
            variant="h5"
            style={{ fontFamily: "Inter", fontWeight: "600" }}
          >
            When your donation has been received
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            You will be notified once your donation has been received by the
            organization.
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
              6
            </Typography>
          </div>
          <Typography
            variant="h5"
            style={{ fontFamily: "Inter", fontWeight: "600" }}
          >
            Where are the donations headed to
          </Typography>
          <Typography style={{ fontFamily: "Inter", fontWeight: "400" }}>
            The organizations makes a post in announcement page where all of the
            donation drives to beneficiaries are posted. You can check all of
            the details as well as remarks for the donors coming from the
            organization.
          </Typography>
        </Grid>
      </Grid>
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
            Get updated about the status of your donation.
          </Typography>
          <Grid item>
            <img
              src={donation_accepted}
              alt="device-mockup"
              style={{ width: "50%", marginTop: "2rem" }}
            />
            <img
              src={donation_received}
              alt="device-mockup"
              style={{ width: "50%", marginTop: "2rem" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DonatingSteps;
