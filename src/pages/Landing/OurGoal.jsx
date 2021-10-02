import { useState } from "react";
import { Helmet } from "react-helmet";
import { Grid, Toolbar } from "@material-ui/core";
//components
import { NavBar, Menu } from "../../components/Landing/NavBar";

import Overview from "../../components/Landing/OurGoal/Overview";
import {
  GoalOne,
  GoalTwo,
  GoalThree,
} from "../../components/Landing/OurGoal/Goals";
import Footer from "../../components/Landing/Footer";
function OurGoal() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Helmet>
        <title>Our Goal | Foodernity</title>
      </Helmet>
      <Grid container justifyContent="center">
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Toolbar />
        {openMenu && <Menu />}
        <Overview />
        <GoalOne />
        <GoalTwo />
        <GoalThree />
        <Footer />
      </Grid>
    </>
  );
}

export default OurGoal;
