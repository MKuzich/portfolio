import { Container, Grid, Button, Box } from '@mui/material';
import { projects } from 'data/projects';

const Projects = () => {
  const handleOpen = () => {};

  return (
    <section>
      <Container>
        <Grid container spacing={4}>
          {projects.map(({ name, poster }) => (
            <Grid key={name} item xxs={4}>
              <Button
                onClick={handleOpen}
                sx={{
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${poster})`,
                    height: '300px',
                    filter: 'grayscale(1)',
                    '&': { transition: 'filter 500ms' },
                    '&:hover': {
                      filter: 'grayscale(0)',
                    },
                  }}
                />
              </Button>
              ;
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
export default Projects;
