import { TextField } from '@mui/material';

export const FormInput = ({ formik, name, label }) => {
  return (
    <TextField
      multiline
      name={name}
      type="text"
      size="small"
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      label={label}
      variant="outlined"
    />
  );
};
