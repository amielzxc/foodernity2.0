import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { useState } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import GraphsGrid from "./GraphsGrid";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box width="100%" pt={4}>
          {children}
        </Box>
      )}
    </div>
  );
}

function NavTab() {
  const classes = useStyles();
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.root}>
        <Box boxShadow={1} borderRadius={5} bgcolor="white">
          <Box
            p={2}
            display="flex"
            justifyContent="space-between"
            flexDirection={responsive ? "column" : "row"}
            alignItems="flex-start"
          >
            <Typography variant="h5" className={classes.text_bold}>
              Dashboard
            </Typography>
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
              <Tab label="" />
            </Tabs> */}
          </AppBar>
        </Box>
        <TabPanel value={0} index={0}>
          <GraphsGrid />
        </TabPanel>
      </div>
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
}));
