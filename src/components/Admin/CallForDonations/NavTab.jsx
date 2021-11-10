import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useRef, useState } from "react";
import Item from "./Item";
import { Button, useTheme, useMediaQuery } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";
import { useSelector } from "react-redux";
import Loading from "../Loading";

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
  const ctaList = useSelector((state) => state.cta.value);
  const [value, setValue] = useState(0);
  const openFormRef = useRef(null);
  const loadingRef = useRef(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  const onButtonClick = (e) => {
    const buttonElement = e.target.closest("button");

    if (!buttonElement || buttonElement.tagName !== "BUTTON") return;
    if (!buttonElement.classList.contains("actionButton")) return;

    loadingRef.current.openLoading();
  };
  return (
    <>
      <div className={classes.root} onClick={onButtonClick}>
        <Box boxShadow={1} borderRadius={5} bgcolor="white">
          <Box
            p={2}
            display="flex"
            justifyContent="space-between"
            flexDirection={responsive ? "column" : "row"}
          >
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
              <Tab label="Active " />
              <Tab label="Done" />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}>
          <div className={classes.grid}>
            {ctaList
              .filter((item) => item.status === "unfulfilled")
              .map((item, index) => (
                <Item
                  key={index}
                  id={item.callForDonationID}
                  title={item.title}
                  description={item.description}
                  imgPath={item.imgPath}
                  date={item.date}
                  status={item.status}
                />
              ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={classes.grid}>
            {ctaList
              .filter((item) => item.status === "fulfilled")
              .map((item, index) => (
                <Item
                  key={index}
                  id={item.callForDonationID}
                  title={item.title}
                  description={item.description}
                  imgPath={item.imgPath}
                  date={item.date}
                  status={item.status}
                />
              ))}
          </div>
        </TabPanel>
        <Form ref={openFormRef} />
      </div>
      <Loading ref={loadingRef} />
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
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: "1rem",
  },
}));
