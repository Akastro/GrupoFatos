import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
   palette: {
    primary: {
      main: '#000333',
    },
    secondary: {
      main: '#25d366',
    },
    error: {
      main: red.A400,
    },
  }, 
});

export default theme;