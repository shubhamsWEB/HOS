import { createTheme } from '@mui/material/styles';

// Define the primary and secondary colors
const PRIMARY = {
  light: '#f9f2ea', // Light shade for backgrounds
  main: '#d4af37', // Gold shade for primary actions and accents
  dark: '#a48a2b', // Darker gold for hover states
  contrastText: '#000000' // Text on primary color is black
};

const SECONDARY = {
  light: '#f5f5f5', // Light grey
  main: '#333333', // Dark grey/almost black
  dark: '#1a1a1a', // Darker shade for hover
  contrastText: '#ffffff' // White text on secondary
};

// Create a theme with the House of Sansa branding
const theme = createTheme({
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    background: {
      default: '#ffffff',
      paper: '#f9f2ea'
    },
    text: {
      primary: '#333333',
      secondary: '#666666'
    }
  },
  typography: {
    fontFamily: [
      'Cormorant Garamond',
      'serif'
    ].join(','),
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: '3.5rem',
      letterSpacing: '0.5px',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      letterSpacing: '0.5px',
      lineHeight: 1.2
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: '2.25rem',
      letterSpacing: '0.5px',
      lineHeight: 1.3
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: '1.875rem',
      letterSpacing: '0.5px',
      lineHeight: 1.3
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '0.5px',
      lineHeight: 1.4
    },
    h6: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '0.5px',
      lineHeight: 1.4
    },
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.3px'
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 300,
      fontSize: '1rem',
      letterSpacing: '0.2px',
      lineHeight: 1.7
    },
    body2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
      letterSpacing: '0.2px',
      lineHeight: 1.7
    },
    caption: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      letterSpacing: '0.4px'
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    },
    overline: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '0.75rem',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 28px',
          boxShadow: 'none',
          letterSpacing: '1px',
          '&:hover': {
            boxShadow: 'none'
          }
        },
        contained: {
          '&.MuiButton-containedPrimary': {
            backgroundColor: PRIMARY.main,
            color: PRIMARY.contrastText,
            '&:hover': {
              backgroundColor: PRIMARY.dark
            }
          },
          '&.MuiButton-containedSecondary': {
            backgroundColor: SECONDARY.main,
            color: SECONDARY.contrastText,
            '&:hover': {
              backgroundColor: SECONDARY.dark
            }
          }
        },
        outlined: {
          borderWidth: '1px',
          '&.MuiButton-outlinedPrimary': {
            borderColor: PRIMARY.main,
            color: PRIMARY.main,
            '&:hover': {
              backgroundColor: 'rgba(212, 175, 55, 0.04)',
              borderColor: PRIMARY.dark
            }
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textRendering: 'optimizeLegibility'
        }
      }
    }
  }
});

export default theme; 