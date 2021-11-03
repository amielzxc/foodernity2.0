import { Hidden, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Admin/NavBar";
import NavTab from "../../components/Admin/Inventory/NavTab";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setInventory } from "../../store/inventory";
import Loading from "../../components/Shared/Loading";
import { Redirect, withRouter } from "react-router";
import bcryptjs from "bcryptjs";

function StockInventory() {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.post("https://foodernity.herokuapp.com/stocks/getStocks").then(
      (res) => {
        // if err dito?
        dispatch(setInventory(res.data));
        setLoading(false);
      }
    );
  }, [dispatch]);

  return bcryptjs.compareSync(
    "MHTPadmin2021@gmail.com",
    localStorage.getItem("vh") || ""
  ) ? (
    <>
      <Helmet>
        <title>Stocks &amp; Inventory | Foodernity</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
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

export default withRouter(StockInventory);
