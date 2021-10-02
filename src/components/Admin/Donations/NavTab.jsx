import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import Item from "./Item";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box boxShadow={1} borderRadius={5} bgcolor="white">
        <Box p={2}>
          <Typography variant="h5" className={classes.text_bold}>
            Donations
          </Typography>
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
            <Tab label="Available" />
            <Tab label="To be claimed" />
          </Tabs>
        </AppBar>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={classes.grid}>
          {data
            .filter((value) => value.status === "Available")
            .map((value, index) => (
              <Item
                key={index}
                donor={value.donor}
                image={value.image}
                name={value.name}
                quantity={value.quantity}
                category={value.category}
                expiry={value.expiry}
                notes={value.notes}
                claimingMethod={value.claimingMethod}
                claimingLocation={value.claimingLocation}
                claimingDate={value.claimingDate}
                status={value.status}
              />
            ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.grid}>
          {data
            .filter((value) => value.status === "Accepted")
            .map((value, index) => (
              <Item
                key={index}
                donor={value.donor}
                image={value.image}
                name={value.name}
                quantity={value.quantity}
                category={value.category}
                expiry={value.expiry}
                notes={value.notes}
                claimingMethod={value.claimingMethod}
                claimingLocation={value.claimingLocation}
                claimingDate={value.claimingDate}
                status={value.status}
              />
            ))}
        </div>
      </TabPanel>
    </div>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
    gap: "1rem",
  },
}));

const data = [
  {
    donor: "Fhillip Bagsic",
    image: "https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg",
    name: "Pancit Canton Noodles",
    quantity: 7,
    category: "Instant Noodles",
    expiry: "10/05/2021",
    notes: "notes",
    claimingMethod: "Deliver",
    claimingLocation:
      "National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila",
    claimingDate: "October 10, 2021",
    status: "Available",
  },
  {
    donor: "Fhillip Bagsic",
    image: "https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg",
    name: "Pancit Canton Noodles",
    quantity: 7,
    category: "Instant Noodles",
    expiry: "10/05/2021",
    notes: "notes",
    claimingMethod: "Deliver",
    claimingLocation:
      "National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila",
    claimingDate: "October 10, 2021",
    status: "Accepted",
  },
];
