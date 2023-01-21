import { useState } from 'react';

export const useTabPanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = index => {
    return {
      id: `vertical-tab-${index}`,
    };
  };

  return { value, handleChange, a11yProps };
};
