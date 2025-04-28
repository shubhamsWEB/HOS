'use client'
import React from 'react'
import { Button } from '@mui/material'
import styles from './style.module.scss'
import Link from 'next/link'

/**
 * StyledButton - A custom styled button with gold animation effect
 * 
 * @param {Object} props
 * @param {string} props.variant - Button variant (contained, outlined, text)
 * @param {React.ReactNode} props.children - Button text or content
 * @param {React.ReactNode} props.startIcon - Icon to display at the start of the button
 * @param {React.ReactNode} props.endIcon - Icon to display at the end of the button
 * @param {string} props.href - If provided, button will be wrapped in a Link component
 * @param {string} props.className - Additional class names
 * @param {Object} props.sx - Additional MUI styling
 */
function StyledButton({ 
  variant = 'outlined', 
  children, 
  startIcon, 
  endIcon, 
  onClick, 
  href,
  className,
  sx,
  disableRipple = false,
  ...props 
}) {
  const buttonProps = {
    variant,
    startIcon,
    endIcon,
    className: `${styles.styledButton} ${className || ''}`,
    onClick,
    disableRipple,
    disableElevation: true,
    sx: {
      ...sx
    },
    ...props
  }

  // Apply proper accessibility attributes
  if (onClick) {
    buttonProps.role = 'button';
  }

  if (href) {
    return (
      <Link href={href} passHref style={{ textDecoration: 'none' }}>
        <Button {...buttonProps}>
          {children}
        </Button>
      </Link>
    )
  }

  return (
    <Button {...buttonProps}>
      {children}
    </Button>
  )
}

export default StyledButton 