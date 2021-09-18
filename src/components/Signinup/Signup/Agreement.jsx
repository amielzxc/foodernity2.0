import { Typography } from "@material-ui/core";

function Agreement(props) {
  return (
    <Typography className={props.agreement}>
      By creating an account, you accept our{" "}
      <span className={props.link}>Terms of Service</span>,
      <span className={props.link}> Privacy Policy</span>, and our default{" "}
      <span className={props.link}>Notification Settings</span>.
    </Typography>
  );
}

export { Agreement };
