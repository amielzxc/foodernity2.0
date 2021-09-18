import React, { useState } from "react";
import { Grid, makeStyles, Toolbar } from "@material-ui/core";
import { Helmet } from "react-helmet";

// Components
import { NavBar, Menu } from "../../components/Landing/NavBar";
import Hero from "../../components/Landing/Home/Hero";
import Goal from "../../components/Landing/Home/Goal";
import RequestingSteps from "../../components/Landing/Home/RequestingSteps";
import DonatingSteps from "../../components/Landing/Home/DonatingSteps";
import Partner from "../../components/Landing/Home/Partner";
import Footer from "../../components/Landing/Footer";

function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Helmet>
        <title>Foodernity</title>
      </Helmet>
      <Grid container justify="center">
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Toolbar />
        {openMenu && <Menu />}
        <Hero />
        <Goal />
        <RequestingSteps />
        <DonatingSteps />
        <Partner />
        <Footer />
      </Grid>
    </>
  );
}

export default Home;

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
