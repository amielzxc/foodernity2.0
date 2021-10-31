import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
  Hidden,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
// import { useAdminStore } from "../../store/AdminStore";

const useStyles = makeStyles((theme) => ({
  navbar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
  },
  heading: {
    fontFamily: "Work Sans",
    color: "#A6CB3C",
  },
  heading__container: {
    flex: "1",
    color: "black",
  },
  heading__container_wrap: {
    display: "inline-block",
  },
  heading__link: {
    textDecoration: "none",
  },
  navbar__actions: {
    width: "45rem",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: theme.spacing(2),
  },

  avatar__color_orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));
function NavBar() {
  const classes = useStyles();

  return (
    <AppBar elevation={1} position="fixed" className={classes.navbar}>
      <Toolbar>
        <div className={classes.heading__container}>
          <div className={classes.heading__container_wrap}>
            <Link to="/admin/donations" className={classes.heading__link}>
              <Typography
                variant="h4"
                component="h1"
                className={classes.heading}
              >
                Foodernity
              </Typography>
            </Link>
          </div>
        </div>
        <MenuButton />
        <NavigationButtons />
      </Toolbar>
    </AppBar>
  );
}
// returns the navigation buttons of the website
function NavigationButtons() {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <div className={classes.navbar__actions}>
        <Button component={Link} to="/admin/donations">
          Receive Donations
        </Button>
        <Button component={Link} to="/admin/callfordonations">
          Call for donations
        </Button>

        <Button component={Link} to="/admin/inventory">
          Inventory
        </Button>
        {/* <Button component={Link} to="/admin/records">
          Records
        </Button> */}
        <Button component={Link} to="/admin/users">
          Users
        </Button>
        <Button>Logout</Button>
      </div>
    </Hidden>
  );
}
// returns the menu button when the page reaches the responsive layout
function MenuButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Hidden mdUp>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="menuButton"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/admin/donations">
          Receive Donations
        </MenuItem>
        <MenuItem component={Link} to="/admin/callfordonations">
          Call for donations
        </MenuItem>
        <MenuItem component={Link} to="/admin/inventory">
          Inventory
        </MenuItem>
        {/* <MenuItem component={Link} to="/admin/records">
          Records
        </MenuItem> */}
        <MenuItem to="/admin/users">Users</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Hidden>
  );
}
export default NavBar;
