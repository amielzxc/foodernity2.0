import { Fade, Modal, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { forwardRef, useImperativeHandle, useState } from "react";

const PubmatModal = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const classes = useStyles();
  useImperativeHandle(ref, () => ({
    displayPubmat() {
      setToggle(true);
    },
  }));

  return (
    <Modal
      open={toggle}
      onClose={() => {
        setToggle(false);
      }}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={toggle}>
        <img
          src={props.pubmat}
          alt="pubmat"
          style={{ objectFit: "contain", height: "90%" }}
        />
      </Fade>
    </Modal>
  );
});

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default PubmatModal;
