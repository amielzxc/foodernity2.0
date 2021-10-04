import { useMediaQuery, useTheme } from "@material-ui/core";
import NavBar from "./NavBar";

function Fallback() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: responsive ? "column" : "row",
      }}
    >
      <NavBar />
    </div>
  );
}

export default Fallback;
