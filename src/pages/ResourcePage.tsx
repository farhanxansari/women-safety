// src/pages/ResourcePage.tsx
import React from 'react';
import {
    Container, Typography, Paper, List, ListItem, ListItemIcon,
    ListItemText, Link as MuiLink, Divider, styled // Removed useTheme, Import styled
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Icons
import PhoneIcon from '@mui/icons-material/Phone';
import LinkIcon from '@mui/icons-material/Link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GavelIcon from '@mui/icons-material/Gavel'; // Legal help icon
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // General support icon

// Framer Motion variants
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// Enhanced resource data with more examples
const resources = [
    // Helplines
    { type: 'helpline', name: 'National Domestic Violence Hotline (USA)', detail: '1-800-799-7233', icon: <PhoneIcon color="error" />, link: 'tel:18007997233' },
    { type: 'helpline', name: 'National Sexual Assault Hotline (RAINN - USA)', detail: '1-800-656-HOPE', icon: <PhoneIcon color="error" />, link: 'tel:18006564673' },
    { type: 'helpline', name: 'National Helpline for Women (India)', detail: '181 / 1091', icon: <PhoneIcon color="error" />, link: 'tel:181' }, // Example for India
    { type: 'helpline', name: 'Childline India', detail: '1098', icon: <PhoneIcon color="warning" />, link: 'tel:1098' }, // Child specific

    // Websites & Online Info
    { type: 'website', name: 'National Network to End Domestic Violence (NNEDV - USA)', detail: 'Safety planning & resources', icon: <LinkIcon color="primary" />, link: 'https://nnedv.org/' },
    { type: 'website', name: 'WomensLaw.org (USA)', detail: 'State-specific legal info', icon: <GavelIcon color="primary" />, link: 'https://www.womenslaw.org/' },
    { type: 'website', name: 'Ministry of Women & Child Development (India)', detail: 'Government schemes & info', icon: <LinkIcon color="primary" />, link: 'https://wcd.nic.in/' },

    // Internal App Resources
    { type: 'article', name: 'Safety Tips for Different Situations', detail: 'Read our curated tips', icon: <MenuBookIcon color="secondary" />, link: '/tips' }, // Internal link to Tips page

    // Local / Specialized Support
    { type: 'local', name: 'Find Local Shelters & Support (USA)', detail: 'Search via DomesticShelters.org', icon: <LocalHospitalIcon color="success" />, link: 'https://www.domesticshelters.org/' },
    { type: 'local', name: 'Find Therapy & Counseling', detail: 'Psychology Today Directory', icon: <SupportAgentIcon color="info" />, link: 'https://www.psychologytoday.com/us/therapists' }, // Example counseling finder

    // Add more relevant local/national resources for your target audience
];

// Create a styled motion component that accepts theme implicitly
const MotionH1 = styled(motion.h1)(({ theme }) => ({
    // Reset browser defaults
    margin: 0,
    padding: 0,
    // Apply theme typography styles
    ...theme.typography.h4,
    // Apply specific layout/style overrides
    textAlign: 'center',
    marginBottom: theme.spacing(4), // Use theme spacing
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));


const ResourcePage: React.FC = () => {
    // Removed: const theme = useTheme(); - Not needed as styled injects theme
    // Define motion components
    const MotionPaper = motion(Paper);
    const MotionListItem = motion(ListItem);

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <Container maxWidth="md" sx={{ py: 4 }}>
                {/* Use the styled MotionH1 component */}
                <MotionH1 variants={fadeInUp}>
                     <SupportAgentIcon sx={{ mr: 1, fontSize: '2.5rem', color: 'primary.main' }} />
                     Helpful Resources
                </MotionH1>

                <MotionPaper elevation={3} sx={{ p: { xs: 2, sm: 3 } }} variants={fadeInUp}>
                    {/* --- Section for Helplines --- */}
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
                        Emergency Contacts & Helplines
                    </Typography>
                    <List dense>
                        {resources.filter(r => r.type === 'helpline').map((res, index) => (
                            <MotionListItem key={`helpline-${index}`} variants={fadeInUp} divider>
                                <ListItemIcon sx={{ minWidth: 40 }}>{res.icon}</ListItemIcon>
                                <ListItemText
                                    primary={res.name}
                                    secondary={
                                        <MuiLink href={res.link} color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                            {res.detail}
                                        </MuiLink>
                                    }
                                />
                            </MotionListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 3 }} />

                    {/* --- Section for Online Resources --- */}
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
                        Online Resources & Information
                    </Typography>
                     <List dense>
                        {resources.filter(r => r.type === 'website' || r.type === 'article').map((res, index) => (
                             <MotionListItem key={`online-${index}`} variants={fadeInUp} divider>
                                <ListItemIcon sx={{ minWidth: 40 }}>{res.icon}</ListItemIcon>
                                <ListItemText
                                    primary={res.name}
                                    secondary={
                                        res.link.startsWith('/') ? (
                                            <MuiLink
                                                component={RouterLink}
                                                to={res.link}
                                                color="text.secondary"
                                                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                {res.detail}
                                            </MuiLink>
                                        ) : (
                                            <MuiLink
                                                href={res.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                color="text.secondary"
                                                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                {res.detail}
                                            </MuiLink>
                                        )
                                    }
                                />
                            </MotionListItem>
                        ))}
                    </List>

                     <Divider sx={{ my: 3 }} />

                    {/* --- Section for Local/Specialized Support --- */}
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
                        Local & Specialized Support
                    </Typography>
                     <List dense>
                        {resources.filter(r => r.type === 'local').map((res, index) => (
                             <MotionListItem key={`local-${index}`} variants={fadeInUp} divider={index < resources.filter(r=>r.type === 'local').length - 1}>
                                <ListItemIcon sx={{ minWidth: 40 }}>{res.icon}</ListItemIcon>
                                <ListItemText
                                    primary={res.name}
                                    secondary={
                                        <MuiLink
                                            href={res.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            color="text.secondary"
                                             sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                        >
                                            {res.detail}
                                        </MuiLink>
                                    }
                                />
                            </MotionListItem>
                        ))}
                    </List>

                     <Typography variant="caption" display="block" sx={{ mt: 3, textAlign: 'center', fontStyle: 'italic' }}>
                        Disclaimer: This is not an exhaustive list. Please verify local resources independently. If you are in immediate danger, call your local emergency number (e.g., 911, 112, 100).
                    </Typography>

                </MotionPaper>
            </Container>
        </motion.div>
    );
};

export default ResourcePage;