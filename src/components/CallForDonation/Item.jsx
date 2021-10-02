import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRef } from "react";
import { Link } from "react-router-dom";
import PubmatModal from "./Modal";

function Item({ title, description, pubmat, date, categoryNeeded }) {
  const classes = useStyles();
  const pubmatModalRef = useRef(null);
  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar>CP</Avatar>}
          title="MHTP - PPC"
          subheader={`Posted ${date}`}
        />
        <CardActionArea
          onClick={() => {
            pubmatModalRef.current.displayPubmat();
          }}
        >
          <div
            style={{
              backgroundImage: `url(${pubmat})`,
            }}
          >
            <CardMedia
              className={classes.media}
              image={pubmat}
              title="pubmat"
            />
          </div>
        </CardActionArea>
        <CardContent>
          <Typography variant="h6" className={classes.text_bold}>
            {title}
          </Typography>
          <Typography>{description}</Typography>
          {/* <Box my={1}>
            <Typography
              variant="body2"
              style={{
                display: "inline",
                marginRight: "10px",
              }}
            >
              Food category needed:{" "}
              <span style={{ fontWeight: "bold" }}>{categoryNeeded}</span>
            </Typography>
            <Chip color="primary" label={categoryNeeded} size="small" />
          </Box> */}
        </CardContent>
        <CardActions
          component="div"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: ".5rem",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/makeadonation"
          >
            Donate now
          </Button>
        </CardActions>
      </Card>
      <PubmatModal ref={pubmatModalRef} pubmat={pubmat} />
    </>
  );
}

export default Item;

const useStyles = makeStyles((theme) => ({
  media: {
    // backgroundColor: 'grey',
    zIndex: 1,
    backgroundSize: "contain",
    height: 500,
    backdropFilter: "blur(10px)",
    // paddingTop: '56.25%', // 16:9
  },
  text_bold: {
    fontWeight: "bold",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
