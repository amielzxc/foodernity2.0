import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useRef } from "react";
import InventoryTable from "./InventoryTable";
import { Button } from "@material-ui/core";
import Donate from "./Donate";
import Loading from "../Loading";
function NavTab() {
  const classes = useStyles();
  const formRef = useRef(null);
  const loadingRef = useRef(null);

  const onButtonClick = (e) => {
    const buttonElement = e.target.closest("button");

    if (!buttonElement || buttonElement.tagName !== "BUTTON") return;
    if (!buttonElement.classList.contains("actionButton")) return;

    // console.log(buttonElement);
    loadingRef.current.openLoading();
  };

  return (
    <div className={classes.root} onClick={onButtonClick}>
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
          {/* <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Items on hand" />
          </Tabs> */}
        </AppBar>
      </Box>
      <TabPanel value={0} index={0}>
        <InventoryTable />
      </TabPanel>
      <Donate ref={formRef} />
      <Loading ref={loadingRef} />
    </div>
  );
}

export default NavTab;

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
