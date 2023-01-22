import { useState } from 'react';
import {
  Box,
  Stack,
  Button,
  Typography,
  AvatarGroup,
  Avatar,
  Modal,
} from '@mui/material';

import { education } from 'data/education';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const EducationSection = () => {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const handleOpen = (image, speciality) => {
    setModalImage({ image, speciality });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Stack direction="column" alignItems="start" gap={2}>
      <Stack direction="row">
        <Typography
          letterSpacing="-3px"
          textAlign="center"
          fontSize="7rem"
          lineHeight={1}
          variant="h2"
          component="h2"
          sx={{
            background:
              'linear-gradient(to right, rgba(66, 66, 66, 0.5), rgba(66, 66, 66, 0.01))',
          }}
        >
          Education
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap">
          {education.map(({ company, place, speciality, period }) => (
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="start"
              key={company + speciality}
            >
              <Stack width="100%">
                <Typography variant="h3">{company}</Typography>
                <Box
                  sx={{
                    mt: 2,
                    mb: 1,
                    width: '100%',
                    height: '1px',
                    background:
                      'linear-gradient(to right, rgba(66, 66, 66, 0.5), transparent 90%)',
                  }}
                />
                <Stack gap={0.5}>
                  <Stack direction="row" gap={0.5} alignItems="center">
                    <Typography>{period}</Typography>
                    <HiOutlineLocationMarker size="1rem" />
                    <Typography>{place}</Typography>
                  </Stack>
                  <Typography variant="h4">{speciality}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
      <AvatarGroup max={3}>
        {education.map(({ image, speciality }) => (
          <Button
            key={'btn' + speciality}
            onClick={() => handleOpen(image, speciality)}
          >
            <Avatar
              src={image}
              alt={speciality}
              variant="square"
              sx={{ width: '100%', height: 230 }}
            />
          </Button>
        ))}
      </AvatarGroup>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <img
            src={modalImage.image}
            alt={modalImage.speciality}
            style={{ display: 'block', maxWidth: '85vw', maxHeight: '85vh' }}
          />
        </Box>
      </Modal>
    </Stack>
  );
};
