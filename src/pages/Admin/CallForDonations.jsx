import { Hidden, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Admin/NavBar";
import NavTab from "../../components/Admin/CallForDonations/NavTab";
import { useEffect } from "react";
import {useDispatch} from'react-redux';
import {setCta} from '../../store/cta'
import Axios, * as others from 'axios';
function CallForDonations() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch()
  useEffect(() => {
    Axios.post('https://foodernity.herokuapp.com/donations/getCallForDonations').then(
             (response, err) => {
                if (err) {
                   console.log('error: ' + err)
                }
                dispatch(setCta(response.data))
                console.log(response.data);
                // setTimeout(() => window.location.reload(), 0)
             }
          )
  },[])
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
          <NavTab />
        </Main>
      </div>
    </>
  );
}

export default CallForDonations;
