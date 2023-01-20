import * as yup from 'yup';

export const validationAddProjectSchema = yup.object({
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
  poster: yup.mixed().test('fileSize', 'Post is required', value => {
    if (!value.size) return false;
    return true;
  }),
  images: yup.array(yup.mixed()),
  frontLink: yup.string(),
  backLink: yup.string(),
  deployedLink: yup.string().required('Deployed link is required'),
  creationDate: yup.date().required('Date of project create is required'),
});
