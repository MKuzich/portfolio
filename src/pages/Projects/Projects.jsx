import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { projects } from 'data/projects';
import { ProjectPoster } from 'components/ProjectPoster/ProjectPoster';
import { BackButton } from 'components/BackButton/BackButton';
import { FilterPanel } from 'components/FilterPanel/FilterPanel';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [identityToggler, setIdentityToggler] = useState(false);

  useEffect(() => {
    if (selectedFilter.length === 0) {
      return setFilteredProjects(projects);
    }
    setFilteredProjects(
      projects.filter(({ tech }) => {
        if (!identityToggler) {
          return selectedFilter.some(i => tech.includes(i));
        } else {
          return selectedFilter.every(i => tech.includes(i));
        }
      })
    );
  }, [selectedFilter, identityToggler]);

  useEffect(() => {
    const filterParams = [...selectedFilter];
    if (identityToggler) {
      filterParams.push('true');
    }
    const stringParams = filterParams.join(',');
    setSearchParams(stringParams);
  }, [identityToggler, selectedFilter, setSearchParams]);

  useEffect(() => {
    const stringParams = searchParams.get('filter');
    if (stringParams) {
      const filterArray = stringParams.split(',');
      if (filterArray.includes('true')) {
        setIdentityToggler(true);
      }
      setSelectedFilter(filterArray.filter(i => i !== 'true'));
    }
  }, [searchParams]);

  return (
    <section>
      <BackButton />
      <Container sx={{ py: 10 }}>
        <FilterPanel
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          identityToggler={identityToggler}
          setIdentityToggler={setIdentityToggler}
        />
        <Grid container spacing={3}>
          {filteredProjects.map(({ id, name, poster, tech }, idx) => (
            <Grid
              key={name}
              item
              xxs={12}
              sm={idx % 3 === 0 ? 12 : 6}
              md={idx % 10 === 0 || idx % 10 === 6 ? 8 : 4}
              sx={{ height: '350px' }}
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
