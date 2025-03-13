import * as React from 'react' 
import Stack  from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ButtonGroup  from '@mui/material/ButtonGroup'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function ButtonApp() {
  return (
   
    <>
   <Stack spacing={2} direction="row">
    
      <Button variant="text">Click here</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="contained">Click here</Button>
      <Button variant="outlined">Click here</Button>

      <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>

    </ButtonGroup>

   </Stack>   


      <Checkbox {...label} defaultChecked color="primary" size="small" />
      <Checkbox {...label} color="success" size="large" />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    


      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
    </>
  )
}
