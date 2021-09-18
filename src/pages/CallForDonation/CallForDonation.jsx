import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Hidden,
  Toolbar,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import Item from "../../components/CallForDonation/Item";
import Main from "../../components/Shared/Main";
import NavBar from "../../components/Shared/NavBar";
import ScrollTop from "../../components/Shared/ScrollTop";

function CallForDonation() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Call for Donations | Foodernity</title>
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
          <div className={classes.container}>
            {requestData.map((item, index) => (
              <Item
                title={item.title}
                description={item.description}
                pubmat={item.pubmat}
                date={item.date}
                categoryNeeded={item.categoryNeeded}
              />
            ))}
          </div>
        </Main>
      </div>
      <ScrollTop />
    </>
  );
}

export default CallForDonation;

const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
    gap: "1rem",
  },
}));

const requestData = [
  {
    title: "Call for donations for the victims of Typhoon Rolly",
    description:
      "In support of the disaster relief efforts of the Ateneo Graduate School of Business",
    pubmat: "http://gsb.ateneo.edu/wp-content/uploads/2020/11/Rolly-1.jpg",
    quantityReceived: 123,
    status: "Fulfilled",
    date: "June 22, 2021",
    categoryNeeded: "Instant Noodles",
  },
  {
    title: "Call for Donations for Mindanao Earthquake Survivors",
    description:
      " The maryknoll//Miriam College Alumni Association appeals for in kind donations for victims of recent earthquakes in Mindanao.",
    pubmat:
      "https://www.mc.edu.ph/Portals/21/xBlog/uploads/2019/11/19/MMCAADonations1.jpg",
    quantityReceived: 89,
    status: "Active",
    date: "June 27, 2021",
    categoryNeeded: "Canned Goods",
  },
];
