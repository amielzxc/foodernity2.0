import {
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DialogDrawer from "../Shared/Dialog";
import LeftDrawer from "../Shared/Drawer";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import { Link } from "react-router-dom";

const DonationItems = [
  {
    label: "My Donations",
    link: "mydonations",
  },
];

const ProfileItems = [
  {
    label: "My Profile",
    link: "myprofile",
  },
  {
    label: "Edit Profile",
    link: "editprofile",
  },
];

function Sidebar() {
  return (
    <>
      <LeftDrawer>
        <Contents />
      </LeftDrawer>

      <DialogDrawer buttonName="Account">
        <Contents />
      </DialogDrawer>
    </>
  );
}

function Contents() {
  const classes = useStyles();
  return (
    <>
      <Title />
      <Divider className={classes.divider_margin} />
      <Subtitle
        title="Donations"
        icon={<AccountBoxRoundedIcon style={{ color: "#66BB6A" }} />}
        color="#66BB6A"
      />
      <Tabs items={DonationItems} />
      <Subtitle
        title="Profile"
        icon={<AccountBoxRoundedIcon style={{ color: "#2196F3" }} />}
        color="#2196F3"
      />
      <Tabs items={ProfileItems} />
    </>
  );
}

function Title() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={`${classes.title} ${classes.text_bold}`}
        gutterBottom
        variant="h5"
        component="h2"
      >
        My Account
      </Typography>
    </div>
  );
}

function Subtitle(props) {
  const { title, icon, color } = props;
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // backgroundColor: 'yellow',
      }}
    >
      {icon}
      <Typography
        className={`${classes.subtitle} ${classes.text_bold}`}
        gutterBottom
        variant="h6"
        // component="h2"
        style={{
          color: color,
          // backgroundColor: 'red',
          marginTop: "7px",
          marginLeft: ".5rem",
        }}
      >
        {title}
      </Typography>
    </div>
  );
}

function Tabs({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ListItem
          button
          key={item.label}
          component={Link}
          to={`/account/${item.link}`}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;

const useStyles = makeStyles((theme) => ({
  text_bold: {
    fontWeight: "bold",
  },
  title: {
    margin: theme.spacing(0.5, 0),
  },
  divider_margin: {
    margin: theme.spacing(1.5, 0),
  },
  container__tab: {
    width: "auto",
    cursor: "pointer",
    padding: "10px 10px 10px 10px",
    textDecoration: "none",
  },
  hover: {
    "&:hover": {
      backgroundColor: "#F5F5F5",
      borderRadius: "5px",
    },
  },
}));
