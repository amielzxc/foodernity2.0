import { Hidden, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Admin/NavBar";
import NavTab from "../../components/Admin/Dashboard/NavTab";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Axios from "axios";
import Loading from "../../components/Shared/Loading";
import { Redirect, withRouter } from "react-router";
import bcryptjs from "bcryptjs";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  return bcryptjs.compareSync(
    "MHTPadmin2021@gmail.com",
    localStorage.getItem("vh") || ""
  ) ? (
    <>
      <Helmet>
        <title>Dashboard | Foodernity</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "column" : "row",
        }}
      >
        <Main>
          <Hidden mdUp>
            <Toolbar />
          </Hidden>
          <NavBar />
          {loading ? <Loading /> : <NavTab />}
        </Main>
      </div>
    </>
  ) : (
    <Redirect to="/signin" />
  );
}

export default withRouter(Dashboard);
