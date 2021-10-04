import {
  Button,
  Typography,
  makeStyles,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.container}>
      <Box flex="1">
        <Typography variant="h5" style={{ fontWeight: "600" }}>
          MHTP - PPC Current Inventory Count
        </Typography>
        <Typography variant="body2">
          * The stocks are counted as per pieces
          {/* except for rice which is
          counted as per serving of 90g */}
        </Typography>
      </Box>
      <Button
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
        component={Link}
        to="/makeadonation"
        fullWidth={responsive ? true : false}
        data-testid="makeDonationButton"
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

    alignItems: "center",
  },
}));
export default Header;
