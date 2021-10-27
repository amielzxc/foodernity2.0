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

function Item({
  id,
  title,
  description,
  pubmat,
  donationCount,
  date,
  categories,
}) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        action={
          <Tooltip title="Mark as fulfilled">
            <IconButton
              onClick={() => {
                if (window.confirm("Are you sure to mark it as fulfilled?")) {
                  // post here and fetch
                }
              }}
            >
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
  text_bold: {
    fontWeight: "bold",
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
