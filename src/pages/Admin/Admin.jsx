import {
  Container,
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { FormInput } from 'components/FormInput/FormInput';
import { TechInput } from 'components/TechInput/TechInput';
import { ImagesInput } from 'components/ImagesInput/ImagesInput';

const validationCreateSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .max(30, 'Name should be of maximum 30 characters length')
    .required('Name is required'),
  description: yup
    .string()
    .min(30, 'Description should be of minimum 30 characters length')
    .required('Description is required'),
  tech: yup.array(yup.string().min(2)).required('Tech is required'),
  poster: yup.object({ size: yup.number() }).required('Poster is required'),
  images: yup.array(yup.mixed()),
  frontLink: yup.string(),
  backLink: yup.string(),
  deployedLink: yup.string().required('Deployed link is required'),
  creationDate: yup.date().required('Date of project create is required'),
});

const Admin = () => {
  const initialValues = {
    name: '',
    description: '',
    tech: [''],
    poster: { name: 'Waiting for upload...' },
    images: [],
    frontLink: '',
    backLink: '',
    deployedLink: '',
    creationDate: dayjs(new Date()),
  };

  return (
    <section>
      <Container mt={20}>
        <Box mx="auto" width={600}>
          <Typography variant="h4" mb={3}>
            Add project
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationCreateSchema}
          >
            {formik => (
              <Form>
                <Stack gap={2} mb={5}>
                  <FormInput formik={formik} name="name" label="Name" />
                  <FormInput
                    formik={formik}
                    name="description"
                    label="Description"
                  />
                  <TechInput formik={formik} />
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

                <Button
                  type="submit"
                  onClick={() => console.log(formik.values.poster)}
                  variant="contained"
                >
                  Add project
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </section>
  );
};

export default Admin;

// const projectMock = {
//   name: 'Filmoteka',
//   description:
//     'Team project is about searching movies and creating watch-list. Pure JavaScript with custom solutions was used. Role: Team Lead.',
//   tech: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Parcel', 'GIT'],
//   images: [],
//   frontLink: 'https://github.com/MKuzich/filmoteka',
//   backLink: null,
//   deployedLink: 'https://mkuzich.github.io/filmoteka/',
//   creationDate: '2022-07-27',
// };
