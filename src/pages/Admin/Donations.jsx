import { Hidden, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Helmet } from "react-helmet";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Admin/NavBar";
import NavTab from "../../components/Admin/Donations/NavTab";
import { useEffect } from "react";
import Axios, * as others from 'axios';
import {useDispatch} from 'react-redux'
import {setDonations} from '../../store/donations'
function Donations() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.post('https://foodernity.herokuapp.com/donations/getDonations')
    .then((res) => {
          // setWrongCredentials(false)
          // setNoAccount(false)
          // console.log('hello')
          console.log(res.data)
          dispatch(setDonations(res.data))
          // history.replace('/admin/donations')
          // console.log('token: ' + res.data.changePasswordCode)
          // localStorage.setItem('token', res.data.changePasswordCode)
       
    })
    .catch((error) => {
       console.log(error)

    })

  },[])
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
          <NavTab />
        </Main>
      </div>
    </>
  );
}

export default Donations;
