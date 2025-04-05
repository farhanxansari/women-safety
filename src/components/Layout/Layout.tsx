// src/components/Layout/Layout.tsx
import React, { ReactNode } from 'react';
// Kept HEAD version (includes FloatingSOSButton import)
import Header from './Header';
import Footer from './Footer';
import FloatingSOSButton from '../FloatingSOSButton'; // Import the SOS Button
import { Box, Container } from '@mui/material';
// Import useTheme only if you specifically need theme values here
// (Removed conflicting block)

// Define the props expected by the Layout component
interface LayoutProps {
  children: ReactNode; // Allows wrapping other components (like the Routes in App.tsx)
}

// The Layout functional component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Use Box as the main container, setup flexbox for vertical layout
    // Kept HEAD version structure
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      {/* Render the Header component at the top */}
      <Header />

      {/* Main content area */}
      <Container
        component="main" // Use 'main' semantic tag
        maxWidth="lg"     // Limit max width for large screens
        sx={{
            mt: 4, // Margin top
            mb: 4, // Margin bottom
            flexGrow: 1, // Allow this container to grow and push the footer down
         }}
      >
        {/* Render the page content passed as children */}
        {children}
      </Container>

      {/* Render the Footer component at the bottom */}
      <Footer />

      {/* Add the Floating SOS Button - it positions itself using 'fixed' */}
      <FloatingSOSButton />

    </Box> // Closing Box tag from HEAD version
    // Removed conflicting block and duplicate closing tag
  );
};

export default Layout;