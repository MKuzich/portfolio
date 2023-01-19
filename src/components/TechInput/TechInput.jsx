import { TextField, IconButton, Stack, InputAdornment } from '@mui/material';
import { FieldArray } from 'formik';

import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const TechInput = ({ formik }) => {
  const { tech } = formik.values;
  return (
    <FieldArray name="tech">
      {({ insert, remove, push }) => (
        <Stack direction="row" flexWrap="wrap" alignItems="center" gap={1}>
          {tech.length > 0 &&
            tech.map((itm, index) => (
              <Stack direction="row" gap={1} alignItems="center" key={index}>
                <TextField
                  size="small"
                  name={`tech.${index}`}
                  type="text"
                  value={itm}
                  onChange={formik.handleChange}
                  error={formik.touched.tech && Boolean(formik.errors.tech)}
                  helperText={formik.touched.tech && formik.errors.tech}
                  label="Tech"
                  variant="outlined"
                  sx={{ width: 144 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            ))}
          <IconButton type="button" onClick={() => push('')}>
            <AddCircleIcon />
          </IconButton>
        </Stack>
      )}
    </FieldArray>
  );
};
