import { Hidden, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Admin/NavBar";
import NavTab from "../../components/Admin/Inventory/NavTab";
function StockInventory() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Helmet>
        <title>Stocks &amp; Inventory | Foodernity</title>
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
          <NavTab />
        </Main>
      </div>
    </>
  );
}

export default StockInventory;
