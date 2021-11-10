import { Grid, Toolbar } from "@material-ui/core";
import { useState } from "react";
import { Helmet } from "react-helmet";

// Components
import { NavBar, Menu } from "../../components/Landing/NavBar";
import Footer from "../../components/Landing/Footer";
import Form from "../../components/Landing/ContactUs/Form";
function ContactUs() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Helmet>
        <title>Contact Us - Foodernity</title>
      </Helmet>
      <Grid container justifyContent="center">
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        {openMenu && <Menu />}
        <Toolbar />
        <Form />
        <Footer />
      </Grid>
    </>
  );
}

export default ContactUs;
