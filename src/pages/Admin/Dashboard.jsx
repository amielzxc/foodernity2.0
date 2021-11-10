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
import {
  setUserCount,
  setAcceptedDonations,
  setPendingDonations,
  setDonationsReceived,
  setDonationsDistributed,
  setCurrentStocks,
  setCategoriesArray,
  setDistributedDonationsArray,
  setReceivedDonationsArray,
} from "../../store/dashboard";
function Dashboard() {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.post("https://foodernity.herokuapp.com/user/getUsers").then(
      (response, err) => {
        if (err) {
          return console.log("error: " + err);
        }

        dispatch(setUserCount(response.data.length));

        Axios.post(
          "https://foodernity.herokuapp.com/donations/getDonations"
        ).then((response, err) => {
          if (err) {
            return console.log("err " + err);
          }
          let pendingCount = 0;
          let acceptedCount = 0;

          for (let data of response.data) {
            if (data.status === "accepted") {
              acceptedCount++;
            } else {
              pendingCount++;
            }
          }
          console.log(pendingCount);
          console.log(acceptedCount);
          dispatch(setPendingDonations(pendingCount));
          dispatch(setAcceptedDonations(acceptedCount));

          Axios.post("https://foodernity.herokuapp.com/stocks/getStocks").then(
            (response, err) => {
              // if err dito?
              if (err) {
                return console.log("err " + err);
              }
              let donationsReceivedCount = 0;
              let donationsDistributedCount = 0;
              let categoriesArray = [];
              let receivedDonationsArray = [];
              let distributedDonationsArray = [];

              for (let category of response.data) {
                console.log(category);
                donationsReceivedCount += category["receivedDonations"];
                donationsDistributedCount += category["donatedDonations"];
                categoriesArray.push(category["categories"]);
                receivedDonationsArray.push(category["receivedDonations"]);
                distributedDonationsArray.push(category["donatedDonations"]);
              }

              dispatch(setDonationsReceived(donationsReceivedCount));
              dispatch(setDonationsDistributed(donationsDistributedCount));
              dispatch(
                setCurrentStocks(
                  donationsReceivedCount - donationsDistributedCount
                )
              );
              dispatch(setCategoriesArray(categoriesArray));
              dispatch(setReceivedDonationsArray(receivedDonationsArray));
              dispatch(setDistributedDonationsArray(distributedDonationsArray));
              setLoading(false);
            }
          );
        });
      }
    );
  }, [dispatch]);

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
