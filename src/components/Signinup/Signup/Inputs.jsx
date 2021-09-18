import { Grid, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

// returns first name input field
function FirstNameInput(props) {
  return (
    <Grid item xs={12} md={6}>
      <Controller
        name="firstName"
        control={props.control}
        defaultValue=""
        rules={{ required: "First name required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="text"
            autoComplete="fname"
            variant="outlined"
            id="firstName"
            label="First Name"
            autoFocus
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error && error.message}
          />
        )}
      />
    </Grid>
  );
}
// returns last name input field
function LastNameInput(props) {
  return (
    <Grid item xs={12} md={6}>
      <Controller
        name="lastName"
        control={props.control}
        defaultValue=""
        rules={{ required: "Last name required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="text"
            autoComplete="lname"
            variant="outlined"
            id="lastName"
            label="Last Name"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error && error.message}
          />
        )}
      />
    </Grid>
  );
}
// returns contact number input field
function EmailInput(props) {
  return (
    <Grid item xs={12}>
      <Controller
        name="emailAddress"
        control={props.control}
        defaultValue=""
        rules={{ required: "Email required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="email"
            autoComplete="email"
            variant="outlined"
            id="emailAddress"
            label="Email Address"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error && error.message}
          />
        )}
      />
    </Grid>
  );
}
// returns password input field
function PasswordInput(props) {
  return (
    <Grid item xs={12}>
      <Controller
        name="password"
        control={props.control}
        defaultValue=""
        rules={{ required: "Password required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="password"
            variant="outlined"
            id="password"
            label="Password"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : "Must be at least 8 characters"}
          />
        )}
      />
    </Grid>
  );
}
// returns confirm password input field
function ConfirmPasswordInput(props) {
  return (
    <Grid item xs={12}>
      <Controller
        name="confirmPassword"
        control={props.control}
        defaultValue=""
        rules={{ required: "Password required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="password"
            variant="outlined"
            id="confirmPassword"
            label="Confirm Password"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error && error.message}
          />
        )}
      />
    </Grid>
  );
}

export {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
};
