import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

function Item({ title, description, pubmat, donationCount, date, categories }) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        action={
          <Tooltip title="Mark as fulfilled">
            <IconButton>
              <DoneIcon />
            </IconButton>
          </Tooltip>
        }
        title={`Posted on ${date}`}
        subheader={`Donation count: ${donationCount}`}
        titleTypographyProps={{ variant: "body1" }}
        subheaderTypographyProps={{ variant: "body2" }}
      />
      <CardMedia className={classes.media} image={pubmat} title="pubmat" />
      <CardContent>
        <Typography variant="body1" className={classes.text_bold} noWrap>
          {title}
        </Typography>

        <Typography variant="body2">{description}</Typography>
        <Box my={1}>
          {categories.map((item, index) => (
            <Chip
              key={index}
              color="primary"
              label={item}
              size="small"
              style={{ marginRight: "5px" }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Item;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: "5px",
  },
  appbar: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  container__search: {
    borderRadius: "5px",
    width: "auto",
    backgroundColor: "white",
    padding: "15px 15px 10px 20px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  text_bold: {
    fontWeight: "bold",
  },

  container__listingitem: {
    margin: ".5rem",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    padding: "15px",
    borderRadius: "5px",
  },
  image__listingitem: {
    // width: '200px',
    height: "200px",
    borderRadius: "5px",
    marginRight: "15px",
  },
  container__listingdetail: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container__button: {
    alignSelf: "flex-end",
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
  button_lightblue: {
    marginRight: theme.spacing(1),
    color: "#2196F3",
    backgroundColor: "#E3F2FD",
    "&:hover": {
      backgroundColor: "#BEE4FF",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "#2196F3",
      },
    },
  },
  button_green: {
    color: "white",
    backgroundColor: "#66BB6A",
    "&:hover": {
      backgroundColor: "#57A05A",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "#66BB6A",
      },
    },
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
