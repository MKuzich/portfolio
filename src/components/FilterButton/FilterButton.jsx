import { Button, Chip } from '@mui/material';

export const FilterButton = ({ text, selectedFilter, onTechBtnClick }) => {
  return (
    <Button
      sx={{
        borderRadius: 2,
        px: 2,
        color: '#fff',
        backgroundColor: selectedFilter ? '#8bc34a' : '#484848',
        '&': { transition: 'background-color 300ms' },
        '&:hover': { backgroundColor: '#8bc34a' },
      }}
      onClick={() => onTechBtnClick(text)}
    >
      {text}
    </Button>
    // <Chip
    //   label={text}
    //   sx={{
    //     p: 1,
    //     color: '#fff',
    //     backgroundColor: selectedFilter ? '#8bc34a' : '#484848',
    //     '&': { transition: 'background-color 300ms' },
    //     '&:hover': { backgroundColor: '#8bc34a' },
    //   }}
    //   onClick={() => onTechBtnClick(text)}
    // />
  );
};
