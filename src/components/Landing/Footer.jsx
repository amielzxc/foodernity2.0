import { Grid, Typography, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Grid
      container
      justifyContent="center"
      item
      xs={12}
      spacing={5}
      style={{ backgroundColor: "#0B0D17" }}
      direction="row"
    >
      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{
            fontFamily: "Inter",
            fontWeight: "600",
            marginRight: "1rem",
            color: "white",
            textAlign: "center",
          }}
        >
          Foodernity
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          component={Link}
          to="/ourgoal"
          style={{
            color: "white",
            fontFamily: "Inter",
            fontWeight: "300",
            textDecoration: "none",
          }}
        >
          Our Goal
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          component={Link}
          to="/getinvolved"
          style={{
            color: "white",
            fontFamily: "Inter",
            fontWeight: "300",
            textDecoration: "none",
          }}
        >
          Get Involved
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          component={Link}
          to="/contactus"
          style={{
            color: "white",
            fontFamily: "Inter",
            fontWeight: "300",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Divider style={{ backgroundColor: "#343434" }} />
      </Grid>
      <Grid item>
        <Typography
          style={{
            color: "white",
            fontFamily: "Inter",
            fontWeight: "300",
          }}
        >
          © 2021 Foodernity. All rights reserved
        </Typography>
      </Grid>
      {/* <Grid item xs={12}>
            <Divider style={{ backgroundColor: '#343434' }} />
         </Grid>
         <Grid item>
            <div style={{ color: 'white' }}>
               Icons made by{' '}
               <a href="https://www.freepik.com" title="Freepik">
                  Freepik
               </a>{' '}
               from{' '}
               <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
               </a>
            </div>

            <div style={{ color: 'white' }}>
               Icons made by{' '}
               <a href="https://www.freepik.com" title="Freepik">
                  Freepik
               </a>{' '}
               from{' '}
               <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
               </a>
            </div>

            <div style={{ color: 'white' }}>
               Icons made by{' '}
               <a href="https://www.freepik.com" title="Freepik">
                  Freepik
               </a>{' '}
               from{' '}
               <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
               </a>
            </div>
         </Grid> */}
    </Grid>
  );
}
