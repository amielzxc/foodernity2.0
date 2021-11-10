import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { forwardRef, useImperativeHandle, useState } from "react";

const Loading = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const classes = useStyles();

  useImperativeHandle(ref, () => ({
    openLoading() {
      setToggle(true);
    },
  }));

  return toggle ? (
    <Box className={classes.loading}>
      <CircularProgress />
    </Box>
  ) : (
    <> </>
  );
});

export default Loading;

const useStyles = makeStyles(() => ({
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
