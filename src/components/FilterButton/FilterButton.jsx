import { Button } from '@mui/material';

export const FilterButton = ({
  text,
  selectedFilter,
  onTechBtnClick,
  delay,
}) => {
  return (
    <Button
      sx={{
        borderRadius: 2,
        px: 2,
        color: '#fff',
        backgroundColor: selectedFilter ? '#8bc34a' : '#484848',
        '&': { transition: 'background-color 300ms' },
        '&:hover': { backgroundColor: '#8bc34a' },
        opacity: 0,
        animation: 'fadeIn',
        animationDuration: '500ms',
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
      onClick={() => onTechBtnClick(text)}
    >
      {text}
    </Button>
  );
};
