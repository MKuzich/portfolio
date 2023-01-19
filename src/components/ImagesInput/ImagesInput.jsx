import { Stack, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

export const ImagesInput = ({ formik }) => {
  const { setFieldValue } = formik;
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        'image/jpeg': [],
        'image/png': [],
      },
      onDrop: acceptedFiles => {
        setFieldValue('files', acceptedFiles);
      },
    });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <Stack border={1} borderRadius={4} borderColor="custom.light" py={1} px={2}>
      <Stack
        mb={1}
        border={1}
        borderRadius={4}
        borderColor="custom.light"
        p={2}
        bgcolor="secondary.main"
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        <Typography textAlign="center">
          Drag 'n' drop some files here, or click to select files
        </Typography>
        <Typography variant="body2" textAlign="center">
          (Only *.jpeg and *.png images will be accepted)
        </Typography>
      </Stack>
      <Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="subtitle2">Accepted files:</Typography>
          <ul>{acceptedFileItems}</ul>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="subtitle2">Rejected files:</Typography>
          <ul>{fileRejectionItems}</ul>
        </Stack>
      </Stack>
    </Stack>
  );
};
