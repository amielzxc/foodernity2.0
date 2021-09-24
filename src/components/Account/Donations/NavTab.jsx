import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import CheckIcon from "@material-ui/icons/Check";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
            My Donations
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
            <Tab label="To be accepted" />
            <Tab label="To be collected" />
            <Tab label="Claimed" />
            <Tab label="Donated" />
          </Tabs>
        </AppBar>
      </Box>
      <TabPanel value={value} index={0}>
        <Label
          icon={messages.accepted.icon}
          label={messages.accepted.message}
        />
        <div className={classes.grid}>{console.log("1")}</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Label
          icon={messages.collected.icon}
          label={messages.collected.message}
        />
        <div className={classes.grid}>{console.log("2")}</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Label icon={messages.claimed.icon} label={messages.claimed.message} />
        <div className={classes.grid}></div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Label icon={messages.donated.icon} label={messages.donated.message} />
        <div className={classes.grid}></div>
      </TabPanel>
    </div>
  );
}

export default NavTab;

function Label({ icon, label }) {
  return (
    <Box
      bgcolor="white"
      boxShadow={1}
      p={2}
      borderRadius={5}
      display="flex"
      width="100%"
      alignItems="center"
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Box>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
  },
}));

const messages = {
  accepted: {
    icon: (
      <HourglassFullIcon style={{ color: "#2196F3", marginRight: "10px" }} />
    ),
    message: `We request for your patience while your donations are being reviewed by the organization.`,
  },
  collected: {
    icon: <PriorityHighIcon style={{ color: "red", marginRight: "10px" }} />,
    message: `You might get messages from the organization regarding the
   further arrangements (such as the pickup time) for collecting your donations.`,
  },
  claimed: {
    icon: <CheckIcon style={{ color: "#66BB6A", marginRight: "10px" }} />,
    message: `Your donations have been claimed by the organization.
    You will be notified once your donation has been donated to people in need.`,
  },
  donated: {
    icon: <FavoriteIcon style={{ color: "#E53935", marginRight: "10px" }} />,
    message: `Your donations have already been been received by our
    beneficiaries! We would like to extend our sincere gratitude
    and appreciation for all of the donations you have
    provided for the people in need. It means everything to
    us. Together, we can fight food hunger.`,
  },
};
