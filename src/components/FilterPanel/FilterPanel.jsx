import { Stack, Switch, Typography } from '@mui/material';
import { projects } from 'data/projects';
import { FilterButton } from 'components/FilterButton/FilterButton';

const projList = [
  ...new Set(
    projects.reduce((acc, { tech }) => {
      return [...acc, ...tech];
    }, [])
  ),
];

export const FilterPanel = ({
  selectedFilter,
  setSelectedFilter,
  identityToggler,
  setIdentityToggler,
}) => {
  const onAllBtnClick = () => {
    setSelectedFilter([]);
  };

  const onTechBtnClick = name => {
    if (selectedFilter.includes(name)) {
      setSelectedFilter(selectedFilter.filter(i => i !== name));
      return;
    }
    setSelectedFilter([...selectedFilter, name]);
  };

  const onTogglerClickHandler = () => {
    setIdentityToggler(!identityToggler);
  };

  return (
    <Stack direction="row" flexWrap="wrap" gap={1} mb={10}>
      <FilterButton
        selectedFilter={selectedFilter.length === 0}
        text="All"
        onClick={onAllBtnClick}
      />
      {projList.map(tech => (
        <FilterButton
          key={'filter' + tech}
          selectedFilter={selectedFilter.some(i => i === tech)}
          text={tech}
          onTechBtnClick={onTechBtnClick}
        />
      ))}
      <Stack direction="row" alignItems="center">
        <Switch
          value={identityToggler}
          onChange={onTogglerClickHandler}
          sx={{
            '& .MuiSwitch-switchBase': {
              transitionDuration: '300ms',
              '&.Mui-checked': {
                color: '#fff',
                '& + .MuiSwitch-track': {
                  backgroundColor: '#8bc34a',
                  opacity: 1,
                  border: 0,
                },
              },
              '&.Mui-focusVisible .MuiSwitch-thumb': {},
            },
            '& .MuiSwitch-thumb': {},
            '& .MuiSwitch-track': {
              backgroundColor: '#484848',
              opacity: 1,
            },
          }}
        />
        <Typography>Exact match</Typography>
      </Stack>
    </Stack>
  );
};
