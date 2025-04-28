"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from './constants';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';
import Menu from './menu';
import { usePathname } from 'next/navigation';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryMenu from './menu';
import Badge from '@mui/material/Badge';

const drawerWidth = 260;

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pathName = usePathname();
  React.useEffect(() => {
    const resizeHeaderOnScroll = () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 500;
      const headerEl = document.getElementById("logo");

      if (headerEl && distanceY > shrinkOn) {
        headerEl.classList.add(`${styles.logoShrink}`);
      } else if (headerEl) {
        headerEl.classList.remove(`${styles.logoShrink}`);
      }

      // Only apply scroll behavior on desktop
      if (window.innerWidth > 768) {
        setScrolled(distanceY > 50);
      }
    };
    
    // Handle resize events to update scrolled state based on screen size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScrolled(true);
      } else {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        setScrolled(distanceY > 50);
      }
    };

    // Initialize scrolled state
    // Mobile always starts with scrolled UI
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        setScrolled(true);
      }
      
      window.addEventListener("scroll", resizeHeaderOnScroll);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", resizeHeaderOnScroll);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const router = useRouter();
  const drawer = (
    <Box className={styles.drawer} sx={{ width: '100%', textAlign: 'left' }}>
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        px: 2,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600, 
            cursor: 'pointer',
            color: '#D8C29D',
            letterSpacing: '1px',
          }} 
          onClick={() => router.push('/')}
        >
          HOUSE OF SANSA
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle} 
          sx={{ 
            color: '#fff',
            '&:hover': {
              color: '#D8C29D'
            }
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography 
          sx={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600, 
            fontSize: '1.5rem',
            mb: 2,
            color: '#fff',
            position: 'relative',
            display: 'inline-block',
            pb: 1,
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '40px',
              height: '2px',
              backgroundColor: '#D8C29D',
            }
          }}
        >
          Categories
        </Typography>
        
        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
          <Box component="li" sx={{ mb: 2 }}>
            <Typography 
              className={styles.mobileCategory} 
              onClick={() => {
                router.push('/jewelry'); 
                handleDrawerToggle();
              }}
            >
              Jewelry
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 1, mb: 0, listStyle: 'none' }}>
              <Box component="li">
                <Typography 
                  className={styles.mobileMenuItem} 
                  onClick={() => {
                    router.push('/products?categories=rings'); 
                    handleDrawerToggle();
                  }}
                >
                  Rings
                </Typography>
              </Box>
              <Box component="li">
                <Typography 
                  className={styles.mobileMenuItem} 
                  onClick={() => {
                    router.push('/products?categories=necklaces'); 
                    handleDrawerToggle();
                  }}
                >
                  Necklaces
                </Typography>
              </Box>
              <Box component="li">
                <Typography 
                  className={styles.mobileMenuItem} 
                  onClick={() => {
                    router.push('/products?categories=earrings'); 
                    handleDrawerToggle();
                  }}
                >
                  Earrings
                </Typography>
              </Box>
              <Box component="li">
                <Typography 
                  className={styles.mobileMenuItem} 
                  onClick={() => {
                    router.push('/products?categories=bracelets'); 
                    handleDrawerToggle();
                  }}
                >
                  Bracelets
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box component="li" sx={{ mb: 2 }}>
            <Typography 
              className={styles.mobileCategory} 
              onClick={() => {
                router.push('/products?categories=signature'); 
                handleDrawerToggle();
              }}
            >
              Collections
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 1, mb: 0, listStyle: 'none' }}>
              <Box component="li">
                <Typography 
                  className={styles.mobileMenuItem} 
                  onClick={() => {
                    router.push('/products?categories=signature'); 
                    handleDrawerToggle();
                  }}
                >
                  Signature Collection
                </Typography>
              </Box>
              <Box component="li">
                <Typography 
                  className={styles.mobileMenuItem} 
                  onClick={() => {
                    router.push('/products?categories=limited'); 
                    handleDrawerToggle();
                  }}
                >
                  Limited Edition
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ background: 'rgba(255,255,255,0.1)' }} />

      <List sx={{ p: 1 }}>
        {navItems.map((item) => (
          item.id !== 'categories' && (
            <ListItem 
              key={item.id} 
              disablePadding 
              sx={{ mb: 1 }}
              onClick={() => {
                router.push(item.path);
                handleDrawerToggle();
              }}
            >
              <ListItemButton sx={{ py: 1 }}>
                <ListItemText 
                  primary={item.title} 
                  primaryTypographyProps={{ 
                    className: styles.mobileNavItem
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        ))}
      </List>

      <Box sx={{ 
        p: 2, 
        mt: 1, 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <IconButton
          sx={{ 
            color: "#fff",
            '&:hover': {
              color: '#D8C29D',
              backgroundColor: 'transparent'
            }
          }}
        >
          <SearchRoundedIcon />
        </IconButton>
        <IconButton
          sx={{ 
            color: "#fff",
            '&:hover': {
              color: '#D8C29D',
              backgroundColor: 'transparent'
            }
          }}
        >
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ 
            color: "#fff",
            '&:hover': {
              color: '#D8C29D',
              backgroundColor: 'transparent'
            }
          }}
        >
          <ShoppingBagOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        className={styles.navbarAppBar}
        sx={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.15)' : 'none',
          transition: { xs: 'none', sm: 'all 0.3s ease' },
          borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar 
            className={styles.navbarToolbar}
            sx={{ 
              height: { xs: 60, sm: scrolled ? 60 : 70 },
              transition: { xs: 'none', sm: 'all 0.3s ease' },
              margin: '0 auto',
              justifyContent: 'space-between',
              px: { xs: 2, sm: 3 },
              position: 'relative'
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2, 
                display: { sm: 'none' },
                color: '#fff',
                backgroundColor: 'rgba(216, 194, 157, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(216, 194, 157, 0.3)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box className={styles.logoWrapper}>
              <Typography
                variant="h6"
                component="div"
                onClick={() => router.push('/')}
                className={styles.logo}
                id="logo"
                sx={{ 
                  cursor: 'pointer',
                  fontSize: { xs: '18px', sm: scrolled ? '18px' : '20px' },
                  transition: { xs: 'none', sm: 'all 0.3s ease' },
                  color: '#fff',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  position: { xs: 'absolute', sm: 'static' },
                  left: 'auto',
                  transform: { xs: 'translateX(-50%)', sm: 'none' },
                  zIndex: 10
                }}
              >
                HOUSE OF SANSA
              </Typography>
            </Box>

            <Box className={styles.navLinks} sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              flex: 1,
              marginLeft: 3
            }}>
              <Button
                id="categories-button"
                aria-controls={open ? 'categories-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={styles.links}
                sx={{ 
                  color: '#fff',
                  textTransform: 'none',
                  fontSize: '15px',
                  minWidth: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  borderBottom: open ? '2px solid #D8C29D' : 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Categories <KeyboardArrowDownIcon 
                  fontSize="small" 
                  sx={{
                    transition: 'transform 0.3s ease',
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </Button>
              <CategoryMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              />
              {navItems.map((item) => (
                item.id !== 'categories' && (
                  <Button 
                    key={item.id}
                    onClick={() => router.push(item.path)} 
                    className={`${styles.links} ${pathName === item.path ? styles.activeLink : ''}`}
                    sx={{ 
                      color: '#fff',
                      textTransform: 'none',
                      fontSize: '15px',
                      minWidth: 'auto',
                    }}
                  >
                    {item.title}
                  </Button>
                )
              ))}
            </Box>

            <Box className={styles.navActions} sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: "center", 
              gap: 2,
              marginLeft: 2
            }}>
              <IconButton
                aria-label="search"
                className={styles.navIcon}
              >
                <SearchRoundedIcon />
              </IconButton>
              <IconButton
                aria-label="user"
                className={styles.navIcon}
              >
                <PersonOutlinedIcon />
              </IconButton>
              <IconButton
                aria-label="cart"
                className={styles.navIcon}
              >
                <Badge badgeContent={2} color="primary" 
                  sx={{ 
                    '& .MuiBadge-badge': { 
                      backgroundColor: '#D8C29D',
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: '10px'
                    } 
                  }}
                >
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              background: 'rgba(0, 0, 0, 0.95)',
              color: '#fff'
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;