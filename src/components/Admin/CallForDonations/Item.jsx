import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import Axios from "axios";

function Item({ id, title, description, imgPath, date, status }) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        action={
          status === "active" && (
            <Tooltip title="Mark as fulfilled">
              <IconButton
                onClick={() => {
                  if (window.confirm(`Are you sure to mark it as fulfilled?`)) {
                    const obj = { ID: id };
                    Axios.post(
                      "https://foodernity.herokuapp.com/donations/updateCallForDonations",
                      obj
                    )
                      .then((res) => {
                        console.log(res.data);
                        setTimeout(() => window.location.reload(), 0);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }
                }}
              >
                <DoneIcon />
              </IconButton>
            </Tooltip>
          )
        }
        title={`Posted on ${date}`}
        titleTypographyProps={{ variant: "body1" }}
      />
      <CardMedia className={classes.media} image={imgPath} title="pubmat" />
      <CardContent>
        <Typography variant="body1" className={classes.text_bold} noWrap>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
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
