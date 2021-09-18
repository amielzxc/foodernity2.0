import { Helmet } from "react-helmet";
import { useTheme, useMediaQuery } from "@material-ui/core";
import NavBar from "../../components/Shared/NavBar";
import Stepper from "../../components/Inventory/MakeDonation/Stepper";
import Main from "../../components/Shared/Main";
import Guidelines from "../../components/Inventory/MakeDonation/Guidelines";
import { useSelector } from "react-redux";
import Details from "../../components/Inventory/MakeDonation/Details";
import Confirm from "../../components/Inventory/MakeDonation/Confirm";
import ScrollTop from "../../components/Shared/ScrollTop";

function MakeDonation() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const stepper = useSelector((state) => state.stepper.value);
  return (
    <>
      <Helmet>
        <title>Make a Donation | Foodernity</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: responsive ? "column" : "row",
        }}
      >
        <NavBar />
        <Stepper />
        <Main>{getContent(stepper)}</Main>
      </div>
      <ScrollTop />
    </>
  );
}

function getContent(stepper) {
  switch (stepper) {
    case 0:
      return <Guidelines />;
    case 1:
      return <Details />;
    case 2:
      return <Confirm />;
    default:
      return <p>404</p>;
  }
}
export default MakeDonation;
