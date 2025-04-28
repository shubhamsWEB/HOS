'use client'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100%',
    maxWidth: '100%',
    marginTop: '0px',
    borderRadius: 0,
    backgroundColor: '#fff',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
    borderTop: '1px solid #D8C29D',
    '& .MuiMenu-list': {
      padding: '0',
    },
  },
}));

const CategorySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRight: '1px solid rgba(0, 0, 0, 0.05)',
  '&:last-child': {
    borderRight: 'none',
  },
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 600,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(3),
  color: '#000',
  position: 'relative',
  paddingBottom: '8px',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '2px',
    backgroundColor: '#D8C29D',
  }
}));

const CategoryItem = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 400,
  fontSize: '0.875rem',
  padding: theme.spacing(1, 0),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: '#D8C29D',
    transform: 'translateX(5px)',
  },
}));

const PromoBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '140px',
  marginTop: theme.spacing(3),
  borderRadius: '4px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}));

const PromoBannerContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  zIndex: 2,
}));

const PromoBannerTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 600,
  fontSize: '1.25rem',
  color: '#fff',
  marginBottom: theme.spacing(0.5),
  textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
}));

const PromoButton = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#fff',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(5px)',
  },
}));

const FeaturedTag = styled(Chip)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontSize: '0.625rem',
  fontWeight: 500,
  backgroundColor: '#D8C29D',
  color: '#fff',
  height: '22px',
  marginLeft: theme.spacing(1),
}));

export default function CategoryMenu({ anchorEl, open, onClose }) {
  const router = useRouter();

  const handleCategoryClick = (path) => {
    router.push(path);
    onClose();
  };

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'categories-button',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', py: 2 }}>
        <Grid container>
          <Grid item xs={3}>
            <CategorySection>
              <CategoryTitle>Jewelry</CategoryTitle>
              <Box>
                <CategoryItem onClick={() => handleCategoryClick('/jewelry/rings')}>
                  Rings
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/jewelry/necklaces')}>
                  Necklaces <FeaturedTag label="New" size="small" />
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/jewelry/earrings')}>
                  Earrings
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/jewelry/bracelets')}>
                  Bracelets
                </CategoryItem>
              </Box>
              <Box sx={{ marginTop: 'auto' }}>
                <PromoBanner>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #141414 0%, #2A2A2A 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 0,
                    }}
                  />
                  <Image 
                    src="/assets/images/promo-jewelry.jpg" 
                    alt="Jewelry collection" 
                    fill
                    sizes="100%"
                    style={{ 
                      objectFit: "cover",
                      filter: 'brightness(0.7)'
                    }}
                    unoptimized
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <PromoBannerContent>
                    <PromoBannerTitle>Summer Collection</PromoBannerTitle>
                    <PromoButton>
                      Explore <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </PromoButton>
                  </PromoBannerContent>
                </PromoBanner>
              </Box>
            </CategorySection>
          </Grid>
          
          <Grid item xs={3}>
            <CategorySection>
              <CategoryTitle>Collections</CategoryTitle>
              <Box>
                <CategoryItem onClick={() => handleCategoryClick('/collections/signature')}>
                  Signature Collection
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/collections/limited')}>
                  Limited Edition <FeaturedTag label="Exclusive" size="small" />
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/collections/custom')}>
                  Custom Designs
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/collections/bestsellers')}>
                  Bestsellers
                </CategoryItem>
              </Box>
              <Box sx={{ marginTop: 'auto' }}>
                <PromoBanner>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #141414 0%, #2A2A2A 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 0,
                    }}
                  />
                  <Image 
                    src="/assets/images/promo-collections.jpg" 
                    alt="Exclusive collections" 
                    fill
                    sizes="100%"
                    style={{ 
                      objectFit: "cover",
                      filter: 'brightness(0.7)'
                    }}
                    unoptimized
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <PromoBannerContent>
                    <PromoBannerTitle>Signature Series</PromoBannerTitle>
                    <PromoButton>
                      Discover <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </PromoButton>
                  </PromoBannerContent>
                </PromoBanner>
              </Box>
            </CategorySection>
          </Grid>
          
          <Grid item xs={3}>
            <CategorySection>
              <CategoryTitle>Materials</CategoryTitle>
              <Box>
                <CategoryItem onClick={() => handleCategoryClick('/materials/gold')}>
                  Gold
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/materials/silver')}>
                  Silver
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/materials/gemstones')}>
                  Gemstones
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/materials/diamonds')}>
                  Diamonds <FeaturedTag label="Premium" size="small" />
                </CategoryItem>
              </Box>
              <Box sx={{ marginTop: 'auto' }}>
                <PromoBanner>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #141414 0%, #2A2A2A 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 0,
                    }}
                  />
                  <Image 
                    src="/assets/images/promo-materials.jpg" 
                    alt="Luxury materials" 
                    fill
                    sizes="100%"
                    style={{ 
                      objectFit: "cover",
                      filter: 'brightness(0.7)'
                    }}
                    unoptimized
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <PromoBannerContent>
                    <PromoBannerTitle>Premium Materials</PromoBannerTitle>
                    <PromoButton>
                      View All <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </PromoButton>
                  </PromoBannerContent>
                </PromoBanner>
              </Box>
            </CategorySection>
          </Grid>
          
          <Grid item xs={3}>
            <CategorySection>
              <CategoryTitle>Occasions</CategoryTitle>
              <Box>
                <CategoryItem onClick={() => handleCategoryClick('/occasions/wedding')}>
                  Wedding
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/occasions/anniversary')}>
                  Anniversary
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/occasions/gifts')}>
                  Gifts
                </CategoryItem>
                <CategoryItem onClick={() => handleCategoryClick('/occasions/engagement')}>
                  Engagement <FeaturedTag label="Popular" size="small" />
                </CategoryItem>
              </Box>
              <Box sx={{ marginTop: 'auto' }}>
                <PromoBanner>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #141414 0%, #2A2A2A 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 0,
                    }}
                  />
                  <Image 
                    src="/assets/images/promo-occasions.jpg" 
                    alt="Special occasions" 
                    fill
                    sizes="100%"
                    style={{ 
                      objectFit: "cover",
                      filter: 'brightness(0.7)'
                    }}
                    unoptimized
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <PromoBannerContent>
                    <PromoBannerTitle>Wedding Collection</PromoBannerTitle>
                    <PromoButton>
                      Shop Now <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
                    </PromoButton>
                  </PromoBannerContent>
                </PromoBanner>
              </Box>
            </CategorySection>
          </Grid>
        </Grid>
      </Box>
    </StyledMenu>
  );
}