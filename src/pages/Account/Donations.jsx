import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery, makeStyles } from "@material-ui/core";
import NavBar from "../../components/Shared/NavBar";
import Sidebar from "../../components/Account/Sidebar";
import NavTab from "../../components/Account/Donations/NavTab";
import Main from "../../components/Shared/Main";
function Donations() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Helmet>
        <title>My Donations | Foodernity</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "column" : "row",
        }}
      >
        <NavBar />
        <Sidebar />
        <Main>
          <NavTab />
        </Main>
      </div>
    </>
  );
}

export default Donations;
