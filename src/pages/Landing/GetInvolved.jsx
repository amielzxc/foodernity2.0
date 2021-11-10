import React, { useState } from "react";
import { Grid, Toolbar } from "@material-ui/core";
import { Helmet } from "react-helmet";

// Components
import { NavBar, Menu } from "../../components/Landing/NavBar";
import Footer from "../../components/Landing/Footer";
import DownloadMobile from "../../components/Landing/GetInvolved/DownloadMobile";

function GetInvolved() {
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
        <DownloadMobile />
        <Footer />
      </Grid>
    </>
  );
}

export default GetInvolved;
