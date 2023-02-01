import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Stack, Chip } from '@mui/material';
import { projects } from 'data/projects';
import { BackButton } from '../../components/BackButton/BackButton';

const Project = () => {
  const { projectId } = useParams();
  const [project] = useState(
    projects.find(project => project.id === projectId)
  );
  const { name, tech } = project;

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
          </Stack>
        )}
      </Container>
    </section>
  );
};

export default Project;
