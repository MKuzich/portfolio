import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Stack, Chip, Button } from '@mui/material';
import FsLightbox from 'fslightbox-react';
import { format } from 'date-fns';
import { BsImage } from 'react-icons/bs';

import { projects } from 'data/projects';
import { BackButton } from '../../components/BackButton/BackButton';
import { ProjectLink } from 'components/ProjectLink/ProjectLink';

const Project = () => {
  const { projectId } = useParams();
  const [project] = useState(
    projects.find(project => project.id === projectId)
  );
  const [toggler, setToggler] = useState(false);

  const {
    name,
    tech,
    description,
    frontLink,
    backLink,
    deployedLink,
    creationDate,
    images,
  } = project;

  return (
    <section>
      <BackButton />
      <Container sx={{ py: 10 }}>
        {project && (
          <Stack gap={7}>
            <Typography
              variant="homeLink"
              sx={{
                fontSize: {
                  xxs: '20vmin',
                  xs: '15vmin',
                  lg: '18vmin',
                },
                color: '#fff',
              }}
            >
              {name}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {tech.map(itm => (
                <Chip
                  sx={{ color: '#fff' }}
                  key={name + itm}
                  color="secondary"
                  label={itm}
                />
              ))}
            </Stack>
            <Typography>{description}</Typography>
            <Typography>
              Created at {format(creationDate, 'dd MMMM y')}
            </Typography>
            <Stack direction="column" alignItems="start">
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {frontLink && <ProjectLink link={frontLink} text="Front End" />}
                {backLink && <ProjectLink link={backLink} text="Back End" />}
                {deployedLink && (
                  <ProjectLink link={deployedLink} text="Deployed" />
                )}
              </Stack>
              <Button
                onClick={() => setToggler(!toggler)}
                startIcon={<BsImage />}
                variant="contained"
                color="secondary"
                sx={{
                  mt: 4,
                  borderRadius: 2,
                  px: 2,
                }}
              >
                Screenshots
              </Button>
            </Stack>

            <FsLightbox toggler={toggler} sources={images} />
          </Stack>
        )}
      </Container>
    </section>
  );
};

export default Project;
