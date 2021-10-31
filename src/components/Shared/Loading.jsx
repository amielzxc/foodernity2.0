import { CircularProgress } from "@material-ui/core";

function Loading() {
  return (
    <div
      style={{
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default Loading;
