import React, { useState } from "react";
import { Grid, Toolbar } from "@material-ui/core";
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
      <Grid container justifyContent="center">
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
