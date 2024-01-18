import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({value, setValue}) {
 
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  

  return (
    <Box sx={{ width: 150 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        min={499}
        max={2635}
     
        onChange={handleChange}
        valueLabelDisplay="auto"
       color='error'
       
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
