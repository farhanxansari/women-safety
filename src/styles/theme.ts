// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';
// Removed unused color import 'teal'
import { blue, grey, red, orange, green, pink } from '@mui/material/colors';

// --- TypeScript Module Augmentation ---
// This block adds custom properties to MUI's theme types.
// It's necessary for TypeScript to recognize 'gradient' and 'subtleBackground'
// when you use the theme object elsewhere in your application.
declare module '@mui/material/styles' {
  // Augment PaletteOptions (used when defining the theme)
  interface PaletteOptions {
    gradient?: string;
    subtleBackground?: string;
  }
  // Augment Palette (the finalized theme object)
  interface Palette {
    gradient: string;
    subtleBackground: string;
  }
}

// --- Create the Static Theme Instance ---
const theme = createTheme({
  palette: {
    mode: 'light', // Defaulting to light
    primary: {
      main: blue[700],      // #1976d2
      light: blue[500],     // #2196f3
      dark: blue[900],      // #0d47a1
      contrastText: '#ffffff',
    },
    secondary: {
      main: pink[500],      // #e91e63 (Changed for more vibrancy)
      light: pink[300],     // #f06292
      dark: pink[700],      // #c2185b
      contrastText: '#ffffff',
    },
    error: { main: red[600] },
    warning: { main: orange[600] }, // Slightly lighter orange
    info: { main: blue[500] },
    success: { main: green[500] }, // Slightly lighter green
    grey: grey, // Keep the grey object for potential use
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
    background: {
      default: grey[50],       // Even lighter grey background
      paper: '#ffffff',
    },
    divider: grey[300],
    // Define the custom properties added via module augmentation
    gradient: `linear-gradient(to right, ${blue[700]}, ${pink[500]})`, // Updated gradient
    subtleBackground: `linear-gradient(135deg, ${grey[50]} 0%, ${grey[100]} 100%)`,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: '2.8rem', letterSpacing: '-0.5px' },
    h2: { fontWeight: 700, fontSize: '2.2rem', letterSpacing: '-0.3px' },
    h3: { fontWeight: 600, fontSize: '1.9rem' },
    h4: { fontWeight: 600, fontSize: '1.6rem' },
    h5: { fontWeight: 600, fontSize: '1.3rem' },
    h6: { fontWeight: 600, fontSize: '1.15rem' },
    button: {
      textTransform: 'none',
      fontWeight: 600, // Slightly bolder buttons
      letterSpacing: '0.5px',
    },
    body1: { lineHeight: 1.65 }, // Increase body line height slightly
    body2: { lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 12, // More rounded globally
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0, // Flatter AppBar
        color: 'primary',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          // Example: Add subtle border bottom instead of shadow
          borderBottom: `1px solid ${theme.palette.divider}`,
          // If you want the gradient on the AppBar by default:
          // background: theme.palette.gradient,
          // color: theme.palette.primary.contrastText, // Ensure text is readable on gradient
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true, // Default to flat buttons
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius * 2, // Pill shaped buttons
          padding: theme.spacing(1, 3), // Adjust padding
        }),
        containedPrimary: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            boxShadow: `0 4px 12px ${theme.palette.primary.light}40` // Subtle glow hover
          }
        }),
        containedSecondary: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            boxShadow: `0 4px 12px ${theme.palette.secondary.light}40`
          }
        }),
        outlinedPrimary: ({ theme }) => ({
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: `${theme.palette.primary.main}10` // Slight background on hover
          }
        }),
        outlinedSecondary: ({ theme }) => ({
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: `${theme.palette.secondary.main}10`
          }
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 1, // Less prominent shadow by default
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius, // Use standard global radius
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          border: `1px solid ${theme.palette.divider}`, // Add subtle border
          '&:hover': {
            boxShadow: theme.shadows[6], // Keep hover shadow increase
            // transform: 'translateY(-3px)', // Optional hover lift
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
        })
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius * 2,
        }),
      },
    },
    MuiLink: { defaultProps: { underline: 'hover' } }
    // Add other component overrides as needed
  },
});

export default theme;