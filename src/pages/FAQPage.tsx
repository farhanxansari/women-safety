// src/pages/FAQPage.tsx
// Removed merge conflict markers

import React from 'react';
import {
    Container, Typography, Accordion, AccordionSummary, AccordionDetails, Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuizIcon from '@mui/icons-material/Quiz'; // Icon for FAQ page

// Define your FAQ content here - Kept HEAD version with more questions
const faqs = [
    {
        q: 'How does the app detect potential threats?',
        a: 'The app uses advanced AI models (LLMs and potentially Vision AI) to analyze various inputs like text messages, voice tone (if enabled), location context, nearby reported incidents, and time of day to assess risk levels in real-time.'
    },
    {
        q: 'Is my location tracked constantly?',
        a: 'Your location is used primarily when you actively use map features, request location-based tips, or trigger an emergency alert. Background location access might be requested for proactive alerts, but this typically requires explicit permission and can often be configured in the app settings. We prioritize your privacy.'
    },
    {
        q: 'How are emergency alerts sent?',
        a: 'When a high-risk situation is detected or you manually trigger an SOS, alerts containing your location and situation details (if available) can be sent to your pre-defined trusted contacts via SMS/push notification and potentially to local authorities, depending on the integration and your settings.'
    },
    {
        q: 'How accurate is the risk assessment?',
        a: 'The AI models are trained on diverse datasets, including crime reports and public safety databases, to provide the best possible assessment. However, no system is 100% perfect. It\'s designed as a tool to enhance awareness and provide guidance, not replace caution and judgment.'
    },
    {
        q: 'How do I add or manage my trusted contacts?',
        a: 'You can usually manage your trusted contacts within the app\'s Profile or Settings section. Look for options like "Emergency Contacts" or "Trusted Circle". (Note: This feature needs to be implemented).'
    },
    {
        q: 'Is my personal data secure?',
        a: 'We take data security very seriously. All personal data is encrypted, and we adhere to strict privacy policies. Anonymized and aggregated data might be used to improve the system and for broader safety insights, but individual identifiable information is protected.'
    },
    {
        q: 'Does the app work without an internet connection?',
        a: 'Core features like AI analysis, real-time risk mapping, and receiving new alerts require an internet connection. Some basic functionalities, like accessing previously downloaded tips or manually triggering an SMS-based SOS (if configured), might work offline.'
    },
    // --- Kept Added FAQs from HEAD ---
    {
        q: 'What happens if I accidentally trigger an SOS alert?',
        a: 'Most systems have a brief cancellation window after triggering an alert (e.g., 5-10 seconds). If you miss this window, it\'s best practice to immediately contact your trusted contacts and/or local authorities (if applicable) to inform them it was a false alarm.'
    },
    {
        q: 'Can I customize the emergency alert message?',
        a: 'Depending on the app\'s features, you might be able to add a pre-set custom message or have options to include specific details automatically. Check the Emergency/SOS settings within the app. (Note: This feature needs to be implemented).'
    },
    {
        q: 'Will using this app drain my phone battery quickly?',
        a: 'We strive to optimize battery usage. Features like continuous background location tracking (if enabled) will consume more battery than passive use. You can often adjust settings (like location update frequency) to balance functionality and battery life.'
    },
    {
        q: 'What phone permissions does the app require?',
        a: 'The app typically requires Location access (precise or approximate, foreground or background depending on features), Notification permissions, and potentially Microphone access (for voice analysis, if enabled) or Contacts access (for selecting trusted contacts). Permissions are requested only when needed for specific features.'
    },
    {
        q: 'Is the app free to use?',
        a: 'The core safety features might be free, while advanced functionalities (like extended history, certain AI analysis types, or professional monitoring integrations) could be part of a premium subscription. Please check the app store listing or website for detailed pricing information.' // Adjust based on your model
    },
    {
        q: 'How can I report inaccurate information on the map or outdated tips?',
        a: 'Look for a "Feedback" or "Report Issue" option within the app settings or on the specific map/tip screen. Providing details helps us improve the accuracy of the information. (Note: This feature needs to be implemented).'
    }
    // Removed conflicting marker from remote branch
];

const FAQPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}> {/* Add vertical padding */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
            textAlign: 'center',
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Kept HEAD version styling
            fontWeight: 'bold', // Added bold weight
            color: 'primary.dark' // Use a theme color
        }}
      >
        {/* Kept HEAD version icon styling */}
        <QuizIcon sx={{ fontSize: '2.5rem', mr: 1, color: 'primary.main' }} />
        Frequently Asked Questions
      </Typography>

      {/* Kept HEAD version Paper styling */}
      <Paper elevation={2} sx={{ p: { xs: 0, sm: 1 }, overflow: 'hidden' /* Ensure border radius applies cleanly */ }}>
          {/* Map through the faqs array to create Accordion components */}
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0} // Use elevation 0 for cleaner look inside Paper
              square // Remove rounded corners for seamless look
              sx={{
                  // Kept HEAD version border styling
                  borderBottom: '1px solid', // Only bottom border needed now
                  borderColor: 'divider',
                  // Removed &:not(:last-child) as only bottom border is applied
                  '&:first-of-type': { borderTop: '1px solid', borderColor: 'divider' }, // Add top border only to the first item
                  '&:before': { display: 'none' }, // Remove default top border line
              }}
             >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-panel${index}-content`}
                id={`faq-panel${index}-header`}
                sx={{
                    '& .MuiAccordionSummary-content': { my: 1.5 }, // Add vertical margin
                    '&:hover': { backgroundColor: 'action.hover' } // Subtle hover effect
                }}
              >
                {/* Question Text */}
                <Typography sx={{ fontWeight: 500, color: 'text.primary' }}>{faq.q}</Typography>
              </AccordionSummary>
              {/* Kept HEAD version AccordionDetails styling */}
              <AccordionDetails sx={{ backgroundColor: 'background.default', px: { xs: 2, sm: 3}, py: 2 /* Add padding */ }}>
                {/* Answer Text */}
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Paper>
    </Container>
  );
};

export default FAQPage;