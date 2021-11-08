import { Grid } from "@material-ui/core";
import { LeftCount, RightCount } from "./Count";
import Donations from "./Donations";
import Overview from "./Overview";
import Statistics from "./Statistics";

function GraphsGrid() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Overview />
      </Grid>
      <Grid item xs={12} md={8}>
        <Statistics />
      </Grid>
      <Grid item xs={6} md={2}>
        <LeftCount />
      </Grid>
      <Grid item xs={6} md={2}>
        <RightCount />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Donations />
      </Grid>
    </Grid>
  );
}

export default GraphsGrid;
