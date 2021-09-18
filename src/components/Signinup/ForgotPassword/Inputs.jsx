import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

function EmailInput(props) {
  return (
    <Controller
      name="emailAddress"
      control={props.control}
      defaultValue=""
      rules={{ required: "Email address required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type="email"
          autoComplete="email"
          variant="outlined"
          id="emailAddress"
          label="Email Address"
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
  );
}

export { EmailInput };
