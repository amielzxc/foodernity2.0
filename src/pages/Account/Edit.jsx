import { Helmet } from "react-helmet";
import { useMediaQuery, useTheme } from "@material-ui/core";
import NavBar from "../../components/Shared/NavBar";
import Sidebar from "../../components/Account/Sidebar";
import Main from "../../components/Shared/Main";

function Edit() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Helmet>
        <title>Edit Profile | Foodernity</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "column" : "row",
        }}
      >
        <NavBar />
        <Sidebar />
        <Main></Main>
      </div>
    </>
  );
}

export default Edit;
