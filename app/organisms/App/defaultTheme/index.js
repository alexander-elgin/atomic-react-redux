import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      500: '#41ADDD',
    },
  },
});

export default defaultTheme;
