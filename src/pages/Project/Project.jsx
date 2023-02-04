import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Stack, Chip, Grid } from '@mui/material';
import { projects } from 'data/projects';
import { BackButton } from '../../components/BackButton/BackButton';
import { ProjectLink } from 'components/ProjectLink/ProjectLink';
import { ClassNames } from '@emotion/react';

const Project = () => {
  const { projectId } = useParams();
  const [project] = useState(
    projects.find(project => project.id === projectId)
  );

  const { name, tech, description, frontLink, backLink, deployedLink, images } =
    project;

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
            <Stack>
              {frontLink && (
                <ProjectLink link={frontLink} text="To front end repo" />
              )}
              {backLink && (
                <ProjectLink link={backLink} text="To back end repo" />
              )}
              {deployedLink && (
                <ProjectLink link={deployedLink} text="To deployed project" />
              )}
            </Stack>
            <Grid container spacing={2}>
              {images.map((itm, idx) => (
                <Grid sm={6} md={4} lg={3} item key={'img' + idx}>
                  <img src={itm} alt={ClassNames} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        )}
      </Container>
    </section>
  );
};

export default Project;
