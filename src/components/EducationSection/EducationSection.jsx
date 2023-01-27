import { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Modal,
  IconButton,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import { BsImage } from 'react-icons/bs';

import { education } from 'data/education';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const EducationSection = () => {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const isMd = useMediaQuery('(min-width:900px)');

  const handleOpen = (image, speciality) => {
    setModalImage({ image, speciality });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Stack direction="column" alignItems="start" gap={3}>
      <Stack direction="column" gap={{ xxs: 2, md: 4, lg: 6 }}>
        <Stack direction="row" alignItems="center" gap={{ xxs: 1, lg: 2 }}>
          <Stack direction="row" alignItems="end" gap={1}>
            <Typography
              fontSize={{
                xxs: '20px',
                xs: '22px',
                md: '24px',
                lg: '26px',
              }}
              variant="number"
            >
              03.
            </Typography>
            <Typography
              fontSize={{
                xxs: '14px',
                xs: '16px',
                md: '18px',
                lg: '20px',
              }}
              variant="title1"
            >
              Education
            </Typography>
          </Stack>
          <Box
            sx={{
              mt: 2,
              mb: 1,
              width: { xxs: '100%', md: '50vw', xl: '70%' },
              height: '1px',
              background: 'linear-gradient(to right, #484848, transparent 90%)',
            }}
          />
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={6}
          width={{ ssx: '100%', md: '80%' }}
        >
          {education.map(({ company, place, speciality, period, image }) => (
            <Box
              flexGrow={1}
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              minWidth="100px"
              border={1}
              borderColor="custom.light"
              borderRadius={3}
              pt={4}
              pb={3}
              px={5}
              key={company + speciality}
            >
              <Typography
                position="absolute"
                top="-1rem"
                right="1.5rem"
                variant="h2"
                component="h2"
              >
                {period}
              </Typography>
              <Tooltip
                title={
                  <Stack direction="row" gap={0.5} alignItems="center">
                    <HiOutlineLocationMarker color="#fff" size="1rem" />
                    <Typography>{place}</Typography>
                  </Stack>
                }
                placement="top"
              >
                <Typography
                  sx={{
                    color: '#fff',
                    '&': { transition: 'color 300ms' },
                    '&:hover': { color: '#8bc34a' },
                  }}
                  variant="h3"
                >
                  {company}
                </Typography>
              </Tooltip>
              <Stack display="inline-block" textAlign="center">
                <Typography component="span">{speciality}</Typography>
                {` `}
                <IconButton
                  key={'btn' + speciality}
                  onClick={() => handleOpen(image, speciality)}
                  sx={{
                    flexShrink: 0,
                    color: '#fff',
                    '&': { transition: 'color 300ms' },
                    '&:hover': { color: '#8bc34a' },
                    verticalAlign: 'top',
                  }}
                >
                  <BsImage size={isMd ? '1.25rem' : '1rem'} />
                </IconButton>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
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
