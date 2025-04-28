'use client'
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import styles from './style.module.scss';
import DiamondIcon from '@mui/icons-material/Diamond';
import PaymentIcon from '@mui/icons-material/Payment';
import LoopIcon from '@mui/icons-material/Loop';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useTheme } from '@mui/material/styles';

const ProductMetaInfo = ({ data }) => {
  const theme = useTheme();
  
  const metaFeatures = [
    {
      icon: <DiamondIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Premium Quality',
      description: 'Crafted with the finest materials and expert craftsmanship'
    },
    {
      icon: <PaymentIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Secure Payment',
      description: 'Multiple payment options with secure encryption'
    },
    {
      icon: <LoopIcon sx={{ color: theme.palette.primary.main }} />,
      title: '30-Day Returns',
      description: 'Easy returns within 30 days of purchase'
    },
    {
      icon: <VerifiedUserIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Authenticity Certificate',
      description: 'Every purchase includes a certificate of authenticity'
    },
    {
      icon: <SupportAgentIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'Customer Support',
      description: 'Dedicated support team available 7 days a week'
    }
  ];

  return (
    <Box>
      <Typography 
        variant="h5" 
        component="h3" 
        className={styles.main}
        sx={{ 
          mb: 3,
          fontWeight: 600,
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: 40,
            height: 2,
            backgroundColor: theme.palette.primary.main
          }
        }}
      >
        Why Choose House of Sansa
      </Typography>

      <List disablePadding sx={{ mt: 2 }}>
        {metaFeatures.map((feature, index) => (
          <React.Fragment key={feature.title}>
            <ListItem 
              alignItems="flex-start" 
              disableGutters 
              sx={{ 
                py: 1.5,
                px: 0
              }}
            >
              <ListItemIcon sx={{ minWidth: 42 }}>
                {feature.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle2" fontWeight={600} className={styles.subMain}>
                    {feature.title}
                  </Typography>
                }
                secondary={
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    className={styles.sub}
                    sx={{ fontSize: '0.875rem' }}
                  >
                    {feature.description}
                  </Typography>
                }
              />
            </ListItem>
            {index < metaFeatures.length - 1 && 
              <Divider component="li" sx={{ borderColor: 'rgba(0, 0, 0, 0.06)' }} />
            }
          </React.Fragment>
        ))}
      </List>
      
      {/* Product Specifics */}
      <Box mt={4}>
        <Typography 
          variant="h6" 
          className={styles.main} 
          sx={{ 
            mb: 2,
            fontWeight: 600,
            fontSize: '1.1rem'
          }}
        >
          Product Specifics
        </Typography>
        
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px 16px'
          }}
        >
          <Typography variant="body2" className={styles.sub} color="text.secondary">
            Product Code:
          </Typography>
          <Typography variant="body2" className={styles.subMain} fontWeight={500}>
            {data.productCode}
          </Typography>
          
          <Typography variant="body2" className={styles.sub} color="text.secondary">
            Category:
          </Typography>
          <Typography variant="body2" className={styles.subMain} fontWeight={500}>
            {data.category}
          </Typography>
          
          {data.collections && (
            <>
              <Typography variant="body2" className={styles.sub} color="text.secondary">
                Collection:
              </Typography>
              <Typography variant="body2" className={styles.subMain} fontWeight={500}>
                {Array.isArray(data.collections) ? data.collections.join(', ') : data.collections}
              </Typography>
            </>
          )}
          
          {data.metalPurity && (
            <>
              <Typography variant="body2" className={styles.sub} color="text.secondary">
                Metal Purity:
              </Typography>
              <Typography variant="body2" className={styles.subMain} fontWeight={500}>
                {data.metalPurity.split(',')[0]}
              </Typography>
            </>
          )}
          
          {data.metalColour && (
            <>
              <Typography variant="body2" className={styles.sub} color="text.secondary">
                Metal Color:
              </Typography>
              <Typography variant="body2" className={styles.subMain} fontWeight={500}>
                {data.metalColour.split(',')[0]}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductMetaInfo; 