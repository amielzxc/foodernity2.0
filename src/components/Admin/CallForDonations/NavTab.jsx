import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useRef, useState } from "react";
import Item from "./Item";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box width="100%" pt={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

function NavTab() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const openFormRef = useRef(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Box boxShadow={1} borderRadius={5} bgcolor="white">
          <Box p={2} display="flex" justifyContent="space-between">
            <Typography variant="h5" className={classes.text_bold}>
              Call For Donations
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => {
                openFormRef.current.openForm();
              }}
            >
              Create a Call for Donation
            </Button>
          </Box>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appbar}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Active Requests" />
              <Tab label="To be claimed" />
              <Tab label="Fulfilled Requests" />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}>
          <div className={classes.grid}>
            {requestData.map((item, index) => (
              <Item
                key={index}
                pubmat={item.pubmat}
                title={item.title}
                description={item.description}
                donationCount={item.donationCount}
                date={item.date}
                categories={item.categories}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          2
        </TabPanel>
        <TabPanel value={value} index={2}>
          3
        </TabPanel>
      </div>
      <Form ref={openFormRef} />
    </>
  );
}

export default NavTab;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: "5px",
  },
  appbar: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  text_bold: {
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: "1rem",
  },
}));

const requestData = [
  {
    title: "Call for donations for the victims of Typhoon Rolly",
    description:
      "In support of the disaster relief efforts of the Ateneo Graduate School of Business",
    pubmat: "http://gsb.ateneo.edu/wp-content/uploads/2020/11/Rolly-1.jpg",
    donationCount: 123,
    // status: 'Fulfilled',
    date: "June 22, 2021",
    categories: ["Instant Noodles", "Vegetables"],
  },
  {
    title: "Call for Donations for Mindanao Earthquake Survivors",
    description:
      " The maryknoll//Miriam College Alumni Association appeals for in kind donations for victims of recent earthquakes in Mindanao.",
    pubmat:
      "https://www.mc.edu.ph/Portals/21/xBlog/uploads/2019/11/19/MMCAADonations1.jpg",
    donationCount: 89,

    date: "June 27, 2021",
    categories: ["Canned Goods"],
  },
  {
    title:
      "Help us raise funds and relief goods for the victims of fire in Jolo, Sulu",
    description:
      "Help us raise funds and relief goods for the 3,500 families affected by the July 25, 2018 fire in Jolo, Sulu",
    pubmat:
      "https://iisupd.files.wordpress.com/2018/07/social-card-jolo-fire.jpg",
    donationCount: 81,
    status: "Active",
    date: "June 29, 2021",
    categories: ["Vegetables", "Canned Goods"],
  },
];
