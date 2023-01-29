import {
  Paper,
  Button,
  Stack,
  Typography,
  TextField,
  FormHelperText,
} from '@mui/material';
import { Form, Formik } from 'formik';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { FormInput } from 'components/FormInput/FormInput';
import { TechInput } from 'components/TechInput/TechInput';
import { ImagesInput } from 'components/ImagesInput/ImagesInput';
import { validationAddProjectSchema } from 'validationSchemas/validationAddProjectSchema';

export const AddProjectForm = () => {
  const initialValues = {
    name: '',
    description: '',
    tech: [''],
    poster: { name: 'Waiting for upload *.jpeg or *.png image...' },
    images: [],
    frontLink: '',
    backLink: '',
    deployedLink: '',
    creationDate: dayjs(new Date()),
  };

  const onFormSubmitHandler = (values, actions) => {
    console.log(values);
    actions.resetForm({ values: initialValues });
  };

  return (
    <Paper
      sx={{
        ml: 4,
        backgroundColor: 'primary.main',
        width: 792,
        boxShadow: '7px 0px 35px -7px rgba(255,255,255,0.47)',
        px: 12,
        py: 7,
      }}
    >
      <Typography variant="h4" component="h2" mb={3}>
        Add project
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationAddProjectSchema}
        onSubmit={onFormSubmitHandler}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <Stack gap={2} mb={5}>
              <FormInput formik={formik} name="name" label="Name" />
              <FormInput
                formik={formik}
                name="description"
                label="Description"
              />
              <TechInput formik={formik} />
              <Stack>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Typography>{formik.values.poster.name}</Typography>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    name="poster"
                    onChange={event => {
                      formik.setFieldValue(
                        'poster',
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      variant="outlined"
                      component="span"
                      startIcon={<FileUploadIcon />}
                    >
                      poster
                    </Button>
                  </label>
                </Stack>
                {formik.touched.poster && Boolean(formik.errors.poster) && (
                  <FormHelperText
                    error={
                      formik.touched.poster && Boolean(formik.errors.poster)
                    }
                  >
                    Poster is required
                  </FormHelperText>
                )}
              </Stack>
              <ImagesInput formik={formik} />
              <FormInput
                formik={formik}
                name="frontLink"
                label="Front end repo link"
              />
              <FormInput
                formik={formik}
                name="backLink"
                label="Back end repo link"
              />
              <FormInput
                formik={formik}
                name="deployedLink"
                label="Deployed site link"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Creation date"
                    inputFormat="MM/DD/YYYY"
                    onChange={value =>
                      formik.setFieldValue('creationDate', value, true)
                    }
                    value={formik.values.creationDate}
                    renderInput={params => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Stack>

            <Button type="submit" variant="contained">
              Add project
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
