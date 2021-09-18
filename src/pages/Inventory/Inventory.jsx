import { Helmet } from "react-helmet";
import {
  Divider,
  Hidden,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import NavBar from "../../components/Shared/NavBar";
import Main from "../../components/Shared/Main";
import Header from "../../components/Inventory/Inventory/Header";
import InventoryCount from "../../components/Inventory/Inventory/InventoryCount";
import DonorCount from "../../components/Inventory/Inventory/DonorCount";
import ScrollTop from "../../components/Shared/ScrollTop";
function Inventory() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Helmet>
        <title>Inventory | Foodernity</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "column" : "row",
        }}
      >
        <NavBar />
        <Main>
          <Hidden mdUp>
            <Toolbar />
          </Hidden>
          <Header />
          <InventoryCount />
          <Divider />
          <DonorCount />
        </Main>
      </div>
      <ScrollTop />
    </>
  );
}

export default Inventory;
