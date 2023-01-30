import { Container, Grid } from '@mui/material';
import { projects } from 'data/projects';
import { ProjectPoster } from 'components/ProjectPoster/ProjectPoster';
import { BackButton } from 'components/BackButton/BackButton';
import { FilterPanel } from 'components/FilterPanel/FilterPanel';

const Projects = () => {
  return (
    <section>
      <BackButton />
      <Container sx={{ py: 10 }}>
        <FilterPanel />
        <Grid container spacing={3}>
          {projects.map(({ id, name, poster, tech }, idx) => (
            <Grid
              key={name}
              item
              xxs={12}
              sm={idx % 3 === 0 ? 12 : 6}
              md={idx % 10 === 0 || idx % 10 === 6 ? 8 : 4}
              sx={{ height: '300px' }}
            >
              <ProjectPoster poster={poster} name={name} id={id} tech={tech} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
export default Projects;
