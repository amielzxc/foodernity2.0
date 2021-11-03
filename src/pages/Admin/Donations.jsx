import { Hidden, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Admin/NavBar";
import NavTab from "../../components/Admin/Donations/NavTab";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setDonations } from "../../store/donations";
import Loading from "../../components/Shared/Loading";

function Donations() {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.post("https://foodernity.herokuapp.com/donations/getDonations")
      .then((res) => {
        dispatch(setDonations(res.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Donations | Foodernity</title>
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
  );
}

export default Donations;
