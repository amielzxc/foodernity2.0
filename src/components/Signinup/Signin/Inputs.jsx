import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
// returns the contact number input field
function EmailInput(props) {
  return (
    <Controller
      name="emailAddress"
      control={props.control}
      defaultValue=""
      rules={{ required: "Email required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type="email"
          variant="outlined"
          id="emailAddress"
          label="Email Address"
          autoComplete="email"
          margin="normal"
          autoFocus
          fullWidth
          required
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error && error.message}
        />
      )}
    />
  );
}
// returns the password input field
function PasswordInput(props) {
  return (
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
          margin="normal"
          fullWidth
          required
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error && error.message}
        />
      )}
    />
  );
}

export { EmailInput, PasswordInput };
