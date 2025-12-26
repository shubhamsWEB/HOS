'use client'
import React, { useState, useEffect } from 'react';
import {
  Box,
  Modal,
  Fade,
  Backdrop,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import withDuck from '@/components/HOC/withDuck';
import { customerAuthInjectible } from '../../../appStore/saga/customerAuth';
import { loaderInjectible } from '../../../appStore/saga/loader';
import styles from './style.module.scss';

const STEPS = {
  PHONE: 'phone',
  OTP: 'otp',
  SIGNUP: 'signup',
  LOGIN: 'login',
};

function CustomerLoginModal({ open, onClose, initialMode = 'signup' }) {
  const dispatch = useDispatch();
  const [step, setStep] = useState(initialMode === 'login' ? STEPS.LOGIN : STEPS.PHONE);

  // Reset step when modal opens with a different initial mode
  React.useEffect(() => {
    if (open) {
      setStep(initialMode === 'login' ? STEPS.LOGIN : STEPS.PHONE);
    }
  }, [open, initialMode]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValidated, setOtpValidated] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const isLoading = useSelector((state) => state.loader?.loading || false);
  const customerAuth = useSelector((state) => state.customerAuth);

  useEffect(() => {
    if (customerAuth?.isAuthenticated) {
      setStep(STEPS.PHONE);
      setPhoneNumber('');
      setOtp('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      setOtpSent(false);
      setOtpValidated(false);
      setIsExistingUser(false);
      onClose();
    }
  }, [customerAuth?.isAuthenticated, onClose]);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleClose = () => {
    setStep(STEPS.PHONE);
    setPhoneNumber('');
    setOtp('');
    setName('');
    setPassword('');
    setConfirmPassword('');
    setOtpSent(false);
    setOtpValidated(false);
    setIsExistingUser(false);
    onClose();
  };

  const handleSendOTP = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: { message: 'Please enter a valid phone number', severity: 'error' },
      });
      return;
    }
    dispatch({ type: 'SEND_OTP', payload: { phoneNumber } });
    setOtpSent(true);
    setCountdown(60);
  };

  const handleValidateOTP = () => {
    if (!otp || otp.length !== 6) {
      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: { message: 'Please enter a valid 6-digit OTP', severity: 'error' },
      });
      return;
    }
    dispatch({ type: 'VALIDATE_OTP', payload: { phoneNumber, otpNumber: otp } });
  };

  const handleSignup = () => {
    if (!name || name.length < 2) {
      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: { message: 'Please enter your name', severity: 'error' },
      });
      return;
    }
    if (!password || password.length < 6) {
      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: { message: 'Password must be at least 6 characters', severity: 'error' },
      });
      return;
    }
    if (password !== confirmPassword) {
      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: { message: 'Passwords do not match', severity: 'error' },
      });
      return;
    }
    dispatch({
      type: 'CUSTOMER_SIGNUP',
      payload: { phoneNumber, name, password, otp },
    });
  };

  // Listen for signup failure due to existing user
  useEffect(() => {
    const handleSignupError = (event) => {
      const errorMessage = event.detail?.message || '';
      if (errorMessage.toLowerCase().includes('already exists') || errorMessage.toLowerCase().includes('user exists')) {
        setStep(STEPS.LOGIN);
        setIsExistingUser(true);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('CUSTOMER_SIGNUP_ERROR', handleSignupError);
      return () => window.removeEventListener('CUSTOMER_SIGNUP_ERROR', handleSignupError);
    }
  }, []);

  const handleLogin = () => {
    if (!password) {
      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: { message: 'Please enter your password', severity: 'error' },
      });
      return;
    }
    dispatch({
      type: 'CUSTOMER_LOGIN',
      payload: { phoneNumber, password },
    });
  };

  // Listen for OTP sent success
  useEffect(() => {
    const handleOTPSent = () => {
      setStep(STEPS.OTP);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('OTP_SENT_SUCCESS', handleOTPSent);
      return () => window.removeEventListener('OTP_SENT_SUCCESS', handleOTPSent);
    }
  }, []);

  // Listen for OTP validated success
  useEffect(() => {
    const handleOTPValidated = () => {
      setOtpValidated(true);
      // Check if user exists or proceed to signup
      setStep(STEPS.SIGNUP);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('OTP_VALIDATED_SUCCESS', handleOTPValidated);
      return () => window.removeEventListener('OTP_VALIDATED_SUCCESS', handleOTPValidated);
    }
  }, []);

  const handleDirectLogin = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: { message: 'Please enter a valid phone number', severity: 'error' },
      });
      return;
    }
    // Go directly to login step
    setStep(STEPS.LOGIN);
    setIsExistingUser(true);
  };

  const renderPhoneStep = () => (
    <>
      <Box className={styles.modalHeader}>
        <IconButton className={styles.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Typography className={styles.brandMark}>House of Sansa</Typography>
        <Typography variant="h4" className={styles.title}>
          Welcome
        </Typography>
        <Typography className={styles.subtitle}>
          Enter your phone number to continue
        </Typography>
      </Box>
      <Box className={styles.modalBody}>
        <Box className={styles.formGroup}>
          <label className={styles.inputLabel}>Phone Number</label>
          <TextField
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter 10-digit number"
            className={styles.textField}
            inputProps={{ maxLength: 10 }}
          />
        </Box>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSendOTP}
          disabled={isLoading || !phoneNumber || phoneNumber.length < 10}
          className={styles.primaryButton}
        >
          {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Create Account'}
        </Button>
        
        <Box className={styles.divider}>
          <Box className={styles.dividerLine} />
          <Typography className={styles.dividerText}>or</Typography>
          <Box className={styles.dividerLine} />
        </Box>
        
        <Button
          fullWidth
          variant="outlined"
          onClick={handleDirectLogin}
          disabled={isLoading || !phoneNumber || phoneNumber.length < 10}
          className={styles.secondaryButton}
        >
          Sign In
        </Button>
      </Box>
    </>
  );

  const renderOTPStep = () => (
    <>
      <Box className={styles.modalHeader}>
        <IconButton className={styles.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Typography className={styles.brandMark}>Verification</Typography>
        <Typography variant="h4" className={styles.title}>
          Enter Code
        </Typography>
        <Typography className={styles.subtitle}>
          We sent a 6-digit code to your phone
        </Typography>
      </Box>
      <Box className={styles.modalBody}>
        <Box className={styles.phoneDisplay}>
          <span className={styles.phoneNumber}>+91 {phoneNumber}</span>
          <span 
            className={styles.changeLink}
            onClick={() => setStep(STEPS.PHONE)}
          >
            Change
          </span>
        </Box>
        
        <Box className={styles.formGroup}>
          <label className={styles.inputLabel}>Enter OTP</label>
          <TextField
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            placeholder="000000"
            className={styles.textField}
            inputProps={{ 
              maxLength: 6,
              style: { letterSpacing: '8px', textAlign: 'center', fontSize: '20px' }
            }}
          />
        </Box>
        
        <Box className={styles.resendSection}>
          {countdown > 0 ? (
            <Typography className={styles.resendText}>
              Resend code in <strong>{countdown}s</strong>
            </Typography>
          ) : (
            <Button
              variant="text"
              onClick={handleSendOTP}
              className={styles.resendButton}
            >
              Resend Code
            </Button>
          )}
        </Box>
        
        <Button
          fullWidth
          variant="contained"
          onClick={handleValidateOTP}
          disabled={isLoading || !otp || otp.length !== 6}
          className={styles.primaryButton}
        >
          {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Verify'}
        </Button>
        
        <Button
          variant="text"
          onClick={() => setStep(STEPS.PHONE)}
          className={styles.backButton}
          fullWidth
        >
          ← Back
        </Button>
      </Box>
    </>
  );

  const renderSignupStep = () => (
    <>
      <Box className={styles.modalHeader}>
        <IconButton className={styles.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Box className={styles.decorativeElement}>
          <Box className={styles.diamondIcon} />
        </Box>
        <Typography variant="h4" className={styles.title}>
          Create Account
        </Typography>
        <Typography className={styles.subtitle}>
          Complete your profile to continue
        </Typography>
      </Box>
      <Box className={styles.modalBody}>
        <Box className={styles.formGroup}>
          <label className={styles.inputLabel}>Full Name</label>
          <TextField
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={styles.textField}
          />
        </Box>
        
        <Box className={styles.formGroup}>
          <label className={styles.inputLabel}>Password</label>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className={styles.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    onClick={() => setShowPassword(!showPassword)} 
                    edge="end"
                    sx={{ color: '#999', '&:hover': { background: 'transparent', color: '#666' } }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Box className={styles.formGroup}>
          <label className={styles.inputLabel}>Confirm Password</label>
          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className={styles.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    edge="end"
                    sx={{ color: '#999', '&:hover': { background: 'transparent', color: '#666' } }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Button
          fullWidth
          variant="contained"
          onClick={handleSignup}
          disabled={isLoading}
          className={styles.primaryButton}
        >
          {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Create Account'}
        </Button>
        
        <Box className={styles.footerLinks}>
          <Typography className={styles.footerText}>
            Already have an account?{' '}
            <span onClick={() => {
              setStep(STEPS.LOGIN);
              setIsExistingUser(true);
            }}>
              Sign In
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );

  const renderLoginStep = () => (
    <>
      <Box className={styles.modalHeader}>
        <IconButton className={styles.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Box className={styles.decorativeElement}>
          <Box className={styles.diamondIcon} />
        </Box>
        <Typography variant="h4" className={styles.title}>
          Welcome Back
        </Typography>
        <Typography className={styles.subtitle}>
          Sign in to your account
        </Typography>
      </Box>
      <Box className={styles.modalBody}>
        <Box className={styles.formGroup}>
          <label className={styles.inputLabel}>Phone Number</label>
          <TextField
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter 10-digit number"
            className={styles.textField}
            inputProps={{ maxLength: 10 }}
          />
        </Box>
        
        <Box className={styles.formGroup}>
          <label className={styles.inputLabel}>Password</label>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className={styles.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    onClick={() => setShowPassword(!showPassword)} 
                    edge="end"
                    sx={{ color: '#999', '&:hover': { background: 'transparent', color: '#666' } }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={isLoading || !password || !phoneNumber || phoneNumber.length < 10}
          className={styles.primaryButton}
        >
          {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Sign In'}
        </Button>
        
        <Button
          variant="text"
          onClick={() => {
            setStep(STEPS.PHONE);
            setPassword('');
          }}
          className={styles.backButton}
          fullWidth
        >
          ← Back
        </Button>
        
        <Box className={styles.footerLinks}>
          <Typography className={styles.footerText}>
            Don't have an account?{' '}
            <span onClick={() => {
              setStep(STEPS.PHONE);
              setPassword('');
            }}>
              Create Account
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className={styles.modal}
    >
      <Fade in={open}>
        <Box className={styles.modalContent}>
          {step === STEPS.PHONE && renderPhoneStep()}
          {step === STEPS.OTP && renderOTPStep()}
          {step === STEPS.SIGNUP && renderSignupStep()}
          {step === STEPS.LOGIN && renderLoginStep()}
        </Box>
      </Fade>
    </Modal>
  );
}

export default withDuck([customerAuthInjectible, loaderInjectible])(CustomerLoginModal);
