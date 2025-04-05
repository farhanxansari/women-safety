// src/pages/TipsPage.tsx
import React from 'react'; // Removed useState, useEffect as we use static data now
import {
    Container, // Added Container for better layout control
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    // Box, // Removed unused Box import
    // Removed CircularProgress, MuiAlert as they are not needed for static data
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Removed api import: import { fetchTips } from '../services/api';
// import { SafetyTip } from '../types'; // Assuming SafetyTip type definition

// Define the SafetyTip type locally for this example if not imported
interface SafetyTip {
  id: number | string; // Allow string IDs too
  category: string;
  title: string;
  details: string;
}

// --- Mock Safety Tips Data ---
// Replace this with your actual data fetching mechanism if available
const safetyTipsData: SafetyTip[] = [
  {
    id: 1,
    category: 'Walking Alone',
    title: 'Be Aware of Your Surroundings',
    details: 'Avoid distractions like using headphones in both ears or staring at your phone. Pay attention to people and vehicles around you. Scan your environment periodically.',
  },
  {
    id: 2,
    category: 'Walking Alone',
    title: 'Trust Your Instincts',
    details: 'If a person or situation makes you feel uneasy, trust that feeling. Cross the street, enter a well-lit store or public place, change direction, or call someone.',
  },
  {
    id: 3,
    category: 'Walking Alone',
    title: 'Walk Confidently and Purposefully',
    details: 'Maintain good posture and walk at a steady pace. Appearing confident can make you seem like less of an easy target. Know where you are going.',
  },
  {
    id: 4,
    category: 'Walking Alone',
    title: 'Choose Well-Lit and Populated Routes',
    details: 'Whenever possible, stick to main roads and paths that are well-lit and have other people around, especially at night. Avoid shortcuts through dark alleys or isolated areas.',
  },
   {
    id: 5,
    category: 'Walking Alone',
    title: 'Share Your Location and ETA',
    details: 'Let a trusted friend or family member know your route and estimated time of arrival, especially if walking late at night or in an unfamiliar area. Use location-sharing apps if comfortable.',
  },
  {
    id: 6,
    category: 'Online Safety',
    title: 'Use Strong, Unique Passwords',
    details: 'Combine upper/lowercase letters, numbers, and symbols. Use different passwords for important accounts (email, banking) and consider a password manager.',
  },
  {
    id: 7,
    category: 'Online Safety',
    title: 'Review Privacy Settings Regularly',
    details: 'Check and adjust privacy settings on social media platforms to control who sees your posts, photos, and personal information. Limit the amount of personal data publicly available.',
  },
  {
    id: 8,
    category: 'Online Safety',
    title: 'Be Cautious with Unknown Links/Attachments',
    details: 'Do not click on suspicious links or download attachments from unknown senders. These can contain malware or lead to phishing scams designed to steal your information.',
  },
   {
    id: 9,
    category: 'Online Safety',
    title: 'Think Before You Post',
    details: 'Avoid sharing overly personal information like your full address, phone number, daily routines, or real-time location updates, especially publicly.',
  },
  {
    id: 10,
    category: 'Public Transport',
    title: 'Be Aware at Stations and Stops',
    details: 'Stay in well-lit areas while waiting. Be mindful of who is around you. If waiting alone at night, stand near other people or staff if possible.',
  },
   {
    id: 11,
    category: 'Public Transport',
    title: 'Sit Strategically',
    details: 'Choose seats near the driver, exits, or in aisles rather than window seats where you might be blocked in. Avoid empty carriages late at night if possible.',
  },
   {
    id: 12,
    category: 'Public Transport',
    title: 'Keep Valuables Secure',
    details: 'Keep your phone, wallet, and other valuables out of sight or in secure, zipped pockets or bags. Be especially vigilant in crowded situations.',
  },
   {
    id: 13,
    category: 'Home Safety',
    title: 'Lock Doors and Windows',
    details: 'Always lock your doors and windows, even when you are home or just stepping out briefly. Consider adding deadbolts or secondary locks.',
  },
    {
    id: 14,
    category: 'Home Safety',
    title: 'Use Peepholes or Video Doorbells',
    details: 'Never open the door blindly. Use a peephole or video doorbell to identify visitors before opening the door, especially if you are not expecting anyone.',
  },
    {
    id: 15,
    category: 'Emergency Preparedness',
    title: 'Know Emergency Numbers',
    details: 'Ensure you know the local emergency numbers (e.g., 911, 112, 100, 181). Keep your phone charged and easily accessible.',
  },
    {
    id: 16,
    category: 'Emergency Preparedness',
    title: 'Have an Emergency Contact Plan',
    details: 'Designate an out-of-area contact person that family members can check in with during an emergency if local communication lines are down.',
  },
   {
    id: 17,
    category: 'Dating Safety',
    title: 'Meet in Public Places First',
    details: 'For initial dates with someone new (especially met online), always choose a well-lit, populated public location. Avoid going to their home or a secluded place.',
  },
   {
    id: 18,
    category: 'Dating Safety',
    title: 'Inform a Friend',
    details: 'Tell a trusted friend or family member where you are going, who you are meeting, and when you expect to be back. Arrange to check in with them later.',
  },

];

const TipsPage: React.FC = () => {
  // Using the static data directly
  const tips = safetyTipsData;

  // Removed loading and error state logic

  // --- Main Content Rendering ---
  return (
    // Using Container for better alignment and padding
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
        Safety Tips
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Explore tips across various categories to enhance your personal safety.
      </Typography>

      {/* Check if tips array is empty */}
      {tips.length === 0 ? (
         <Typography sx={{mt: 2, textAlign: 'center'}}>No tips available right now.</Typography>
      ) : (
        // Map over the tips data to create Accordions
        tips.map((tip) => (
            // Use tip.id as the key for React list rendering
            <Accordion key={tip.id} elevation={2} sx={{ mb: 1.5, '&:before': { display: 'none' } /* Remove default top border */ }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${tip.id}-content`}
                id={`panel-${tip.id}-header`}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }} // Subtle hover effect
              >
                {/* Display Tip Category and Title */}
                <Typography sx={{ width: { xs: '50%', sm: '33%' }, flexShrink: 0, fontWeight: 500 }}>
                  {tip.category}
                </Typography>
                <Typography sx={{ color: 'text.secondary', flexGrow: 1, textAlign: 'left', pl: 1 }}>
                    {tip.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: 'background.default', borderTop: '1px solid', borderColor: 'divider', px: { xs: 2, sm: 3}, py: 2 }}>
                {/* Display Tip Details */}
                <Typography sx={{ lineHeight: 1.7 }}> {/* Slightly increased line height for readability */}
                  {tip.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
        ))
      )}
    </Container> // Closing Container
  );
};

export default TipsPage;