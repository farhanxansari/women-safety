// src/components/FloatingSOSButton.tsx
import React, { useState } from 'react';
import { Fab, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import SosIcon from '@mui/icons-material/Sos'; // Or use EmergencyShare, WarningAmber etc.
import { motion } from 'framer-motion';
import { useNotifier } from '../contexts/NotificationContext';

const FloatingSOSButton: React.FC = () => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const notifier = useNotifier();

    const handleClick = () => {
        setConfirmOpen(true); // Open confirmation dialog first
    };

    const handleCloseConfirm = () => {
        setConfirmOpen(false);
    };

    const handleConfirmSOS = () => {
        setConfirmOpen(false);
        // --- TODO: Implement ACTUAL SOS logic ---
        // This would involve:
        // 1. Getting user's current location (navigator.geolocation)
        // 2. Making an API call to your backend to trigger alerts to trusted contacts/authorities
        console.log("SOS Triggered! (Simulation)");
        notifier.showNotification("SOS Alert Sent to Trusted Contacts! (Simulation)", "error"); // Use error severity
        // -----------------------------------------
    };

    // Framer Motion component for the button
    const MotionFab = motion(Fab);

    return (
        <>
            <Tooltip title="Emergency SOS" placement="left">
                <MotionFab
                    color="error" // Use error color for high visibility
                    aria-label="sos button"
                    sx={{
                        position: 'fixed',
                        bottom: { xs: 80, sm: 32 }, // Position above BottomNav on mobile
                        right: 32,
                        zIndex: (theme) => theme.zIndex.speedDial, // High z-index
                    }}
                    onClick={handleClick}
                    // Add pulse animation on hover
                    whileHover={{
                        scale: [1, 1.1, 1, 1.1, 1], // Pulse scale
                        boxShadow: "0px 0px 15px 5px rgba(255, 0, 0, 0.5)", // Red glow
                        transition: { duration: 1, repeat: Infinity }
                    }}
                >
                    <SosIcon />
                </MotionFab>
            </Tooltip>

            {/* Confirmation Dialog */}
            <Dialog
                open={confirmOpen}
                onClose={handleCloseConfirm}
                aria-labelledby="sos-confirm-dialog-title"
                aria-describedby="sos-confirm-dialog-description"
            >
                <DialogTitle id="sos-confirm-dialog-title">
                    {"Confirm SOS Alert?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="sos-confirm-dialog-description">
                        Are you sure you want to send an emergency SOS alert to your trusted contacts and potentially local authorities? Only use this in a real emergency.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmSOS} color="error" variant="contained" autoFocus>
                        Send SOS Alert
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FloatingSOSButton;