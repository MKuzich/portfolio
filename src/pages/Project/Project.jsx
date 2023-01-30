import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Stack, Chip } from '@mui/material';
import { projects } from 'data/projects';

const Project = () => {
  const { projectId } = useParams();
  const [project] = useState(
    projects.find(project => project.id === projectId)
  );
  const { name, tech } = project;

  return (
    <section>
      <Container sx={{ py: 10 }}>
        {project && (
          <>
            <Typography>{name}</Typography>
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
          </>
        )}
      </Container>
    </section>
  );
};

export default Project;
