'use client'
import React from 'react'
import { Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbar } from '@/appStore/reducers/Snackbar/snackbarSlice';

function CustomSnackbar() {
    const dispatch = useDispatch();
    const { open, message, severity } = useSelector((state) => state.snackbar || { open: false, message: '', severity: 'error' });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(hideSnackbar());
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default CustomSnackbar;

