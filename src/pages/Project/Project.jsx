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
              Created at {format(creationDate, 'dd MMM y')}
            </Typography>
            <Stack direction="column" alignItems="start">
              {frontLink && (
                <ProjectLink link={frontLink} text="To front end repo" />
              )}
              {backLink && (
                <ProjectLink link={backLink} text="To back end repo" />
              )}
              {deployedLink && (
                <ProjectLink link={deployedLink} text="To deployed project" />
              )}
              <Button
                onClick={() => setToggler(!toggler)}
                startIcon={<BsImage />}
                sx={{
                  mt: 4,
                  borderRadius: 2,
                  px: 2,
                  color: '#fff',
                  backgroundColor: '#484848',
                  '&': { transition: 'background-color 300ms' },
                  '&:hover': { backgroundColor: '#8bc34a' },
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
