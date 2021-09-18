import { Grid } from "@material-ui/core";
import Item from "./Item";
import Pickup from "./Pickup";

function Details() {
  return (
    <Grid container justifyContent="center">
      <Item />
      <Pickup />
    </Grid>
  );
}

export default Details;
