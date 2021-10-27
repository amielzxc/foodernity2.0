import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useRef, useState } from "react";
import InventoryTable from "./InventoryTable";
import Stocks from "./Stocks";
import { Button } from "@material-ui/core";
import Donate from "./Donate";
// import Item from "./Item";

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
  const formRef = useRef(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box boxShadow={1} borderRadius={5} bgcolor="white">
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Typography variant="h5" className={classes.text_bold}>
            Inventory
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => formRef.current.openForm()}
          >
            Release Donation
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
            <Tab label="Items on hand" />
            {/* <Tab label="Stocks per category" /> */}
          </Tabs>
        </AppBar>
      </Box>
      <TabPanel value={value} index={0}>
        <InventoryTable />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <Stocks />
      </TabPanel> */}
      <Donate ref={formRef} />
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
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1rem",
  },
}));
