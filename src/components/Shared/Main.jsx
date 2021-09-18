import React from "react";
import { Hidden, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Main(props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Hidden smDown>
        <Toolbar />
      </Hidden>

      {props.children}
    </main>
  );
}

export default Main;
