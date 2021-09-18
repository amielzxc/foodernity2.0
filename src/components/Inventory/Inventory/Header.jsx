import { Button, Typography, makeStyles, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box>
        <Typography variant="h5" style={{ fontWeight: "600" }}>
          Maginhawa Community Pantry Current Inventory Count
        </Typography>
        <Typography variant="body2">
          * The stocks are counted as per pieces except for rice which is
          counted as per serving of 90g
        </Typography>
      </Box>
      <Button
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
        component={Link}
        to="/makeadonation"
      >
        Make a donation
      </Button>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
export default Header;
