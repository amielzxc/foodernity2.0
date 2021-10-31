import { Hidden, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Admin/NavBar";
import NavTab from "../../components/Admin/CallForDonations/NavTab";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCta } from "../../store/cta";
import Axios from "axios";
import Loading from "../../components/Shared/Loading";

function CallForDonations() {
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.post(
      "https://foodernity.herokuapp.com/donations/getCallForDonations"
    ).then((response, err) => {
      if (err) {
        console.log("error: " + err);
      }
      dispatch(setCta(response.data));
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Call For Donations | Foodernity</title>
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

export default CallForDonations;
