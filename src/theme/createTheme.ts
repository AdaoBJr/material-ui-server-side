import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const theme = createTheme(
  {
    spacing: 16,
    breakpoints: {
      values: {
        xs: 0,
        sm: 641,
        md: 1024,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#F37920',
        dark: '#E9680C',
        light: '#FA933B',
        contrastText: '#fff',
      },
      secondary: {
        main: '#DCEE28',
        dark: '#D1E212',
        light: '#E4F155',
        contrastText: '#fff',
      },
      info: {
        main: '#9E9E9E',
        light: '#BDBDBD',
        dark: '#424242',
      },
      background: {
        default: '#FAFAFA',
        paper: '#fff',
      },
      warning: {
        main: '#ed6c02',
        light: '#FEF4EB',
      },
      error: {
        main: '#FF2F2F',
      },
      text: {
        secondary: '#666666',
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      h6: {
        fontSize: '1rem',
        color: '#333333',
        fontWeight: 700,
        lineHeight: 1.5,
      },
      body1: {
        color: '#424242',
        fontWeight: 400,
        fontSize: '1rem',
      },
      body2: {
        color: '#666666',
        fontWeight: 400,
        fontSize: '1rem',
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
    },
  },
  ptBR
);
