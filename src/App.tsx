// src/App.tsx
// Conflicts resolved by keeping the local HEAD version

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import AlertsPage from './pages/AlertsPage';
import TipsPage from './pages/TipsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FAQPage from './pages/FAQPage';
import ResourcePage from './pages/ResourcePage'; // <-- Import ResourcePage (from HEAD)
// Removed import for AnalysisPage
import { Typography } from '@mui/material'; // For 404 page

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* Removed Route for /analysis */}
        <Route path="/resources" element={<ResourcePage />} /> {/* <-- Add Resource Route (from HEAD) */}
        {/* Fallback route for 404 (improved version from HEAD) */}
        <Route
          path="*"
          element={
            <Typography variant="h4" component="h1" align="center" sx={{ mt: 4 }}>
              404 - Page Not Found
            </Typography>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;