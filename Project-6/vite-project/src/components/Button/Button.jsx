import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation(props) {
  return (
    <Button data-aos="fade-down" className='bg-[#437C9A]' variant="contained" disableElevation>
        {props.text}
    </Button>
  );
}