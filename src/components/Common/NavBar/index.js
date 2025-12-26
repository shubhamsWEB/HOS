"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { navItems } from './constants';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';
import CategoryMenu from './CategoryMenu';
import CollectionsMenu from './CollectionsMenu';
import {usePathname} from 'next/navigation';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { clearCustomerAuth } from '@/appStore/reducers/CustomerAuth/customerAuthSlice';
import withDuck from '@/components/HOC/withDuck';
import { customerAuthInjectible } from '@/appStore/saga/customerAuth';
import CustomerLoginModal from '@/components/Common/CustomerLoginModal';

const drawerWidth = 280;

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authModalMode, setAuthModalMode] = React.useState('signup'); // 'signup' or 'login'
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const customerAuth = useSelector((state) => state.customerAuth);

  // Parse JWT token to get user info
  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  React.useEffect(() => {
    // Check if customer is logged in
    // User-facing pages use 'hos_customer_token' cookie (not admin token)
    const cookies = new Cookies();
    const customerToken = cookies.get('hos_customer_token');
    const isAuthenticated = customerAuth?.isAuthenticated || customerToken;
    
    if (isAuthenticated) {
      setIsLoggedIn(true);
      if (customerAuth?.user?.name) {
        setUserName(customerAuth.user.name);
      } else if (customerToken) {
        const decoded = parseJwt(customerToken);
        if (decoded) {
          // Try common JWT fields for username
          setUserName(decoded.username || decoded.name || decoded.email || 'User');
        }
      }
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  }, [customerAuth]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const openLoginModal = () => {
    setAuthModalMode('login');
    setAuthModalOpen(true);
    setMobileOpen(false);
  };

  const openSignupModal = () => {
    setAuthModalMode('signup');
    setAuthModalOpen(true);
    setMobileOpen(false);
  };

  const handleAuthModalClose = () => {
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove('hos_customer_token', { path: '/' });
    dispatch(clearCustomerAuth());
    setIsLoggedIn(false);
    setUserName('');
    setAnchorEl(null);
    setMobileMenuAnchor(null);
    router.push('/');
  };

  React.useEffect(() => {
    const resizeHeaderOnScroll = () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 100;
      const headerEl = document.getElementById("logo");
  
      if (distanceY > shrinkOn) {
        setIsScrolled(true);
        if (headerEl) headerEl.classList.add(`${styles.logoShrink}`);
      } else {
        setIsScrolled(false);
        if (headerEl) headerEl.classList.remove(`${styles.logoShrink}`);
      }
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", resizeHeaderOnScroll);
    }
  
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", resizeHeaderOnScroll);
      }
    };
  }, []);

  const drawer = (
    <Box className={styles.drawer} onClick={handleDrawerToggle}>
      <Box className={styles.drawerHeader}>
        <Typography 
          variant="h6" 
          className={styles.logo}
          onClick={() => {
            router.push('/');
            setMobileOpen(false);
          }}
        >
          HOUSE OF SANSA
        </Typography>
      </Box>
      <Divider className={styles.drawerDivider} />
      <List className={styles.drawerList}>
        {!isLoggedIn && (
          <>
            <ListItem disablePadding>
              <ListItemButton 
                className={styles.drawerItem}
                onClick={openLoginModal}
              >
                <ListItemText 
                  primary="Login" 
                  primaryTypographyProps={{ className: styles.drawerItemText }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                className={styles.drawerItem}
                onClick={openSignupModal}
              >
                <ListItemText 
                  primary="Sign Up" 
                  primaryTypographyProps={{ className: styles.drawerItemText }}
                />
              </ListItemButton>
            </ListItem>
            <Divider className={styles.drawerDivider} />
          </>
        )}
        {isLoggedIn && (
          <>
            <ListItem disablePadding>
              <ListItemButton className={styles.drawerItem}>
                <AccountCircleIcon sx={{ mr: 1.5, color: '#1a1a1a' }} />
                <ListItemText 
                  primary={userName} 
                  primaryTypographyProps={{ className: styles.drawerUserName }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                className={styles.drawerItem}
                onClick={handleLogout}
              >
                <LogoutIcon sx={{ mr: 1.5, color: '#1a1a1a' }} />
                <ListItemText 
                  primary="Logout" 
                  primaryTypographyProps={{ className: styles.drawerItemText }}
                />
              </ListItemButton>
            </ListItem>
            <Divider className={styles.drawerDivider} />
          </>
        )}
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton 
              className={styles.drawerItem}
              onClick={() => {
                if (item.path && item.path !== '#' && !item.dropDown) {
                  router.push(item.path);
                  setMobileOpen(false);
                } else if (item.dropDown && item.type === 'category') {
                  // For categories, navigate to the category page
                  router.push(`/products?categories=${item.category}`);
                  setMobileOpen(false);
                } else if (item.dropDown && item.type === 'collections') {
                  // For collections, navigate to products page
                  router.push('/products');
                  setMobileOpen(false);
                }
              }}
            >
              <ListItemText 
                primary={item.title} 
                primaryTypographyProps={{ className: styles.drawerItemText }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar 
        component="nav" 
        position="fixed"
        className={`${styles.appBar} ${isScrolled ? styles.appBarShrink : ''}`}
      >
        {/* Logo Section - Brand First */}
        <Box className={`${styles.logoSection} ${isScrolled ? styles.logoSectionShrink : ''}`}>
          <Typography
            variant="h2"
            component="div"
            className={`${styles.logo} ${styles.logoDesktop}`}
            onClick={() => router.push('/')}
            id="logo"
          >
            HOUSE OF SANSA
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Toolbar className={`${styles.toolbar} ${isScrolled ? styles.toolbarShrink : ''}`}>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <MenuIcon className={styles.menuIcon} />
          </IconButton>

          {/* Mobile Logo */}
          <Typography 
            variant="h5" 
            className={`${styles.logo} ${styles.logoMobile}`}
            onClick={() => router.push('/')}
          >
            HOUSE OF SANSA
          </Typography>

          {/* Desktop Navigation Content */}
          <Box className={styles.desktopNav}>
            {/* Left Side - Empty (for spacing) */}
            <Box className={styles.leftNavSection}></Box>

            {/* Navigation Links - Center */}
            <Box className={styles.navLinks}>
              {navItems.map((item) => (
                <Button 
                  key={item.id} 
                  className={`${styles.navLink} ${pathName === item.path ? styles.navLinkActive : ''}`}
                  onClick={() => {
                    if (item.path && item.path !== '#' && !item.dropDown) {
                      router.push(item.path);
                    }
                  }}
                >
                  {item.dropDown && item.type === 'collections' ? (
                    <CollectionsMenu title={item.title} />
                  ) : item.dropDown && item.type === 'category' ? (
                    <CategoryMenu title={item.title} category={item.category} />
                  ) : (
                    item.title
                  )}
                </Button>
              ))}
            </Box>

            {/* Right Side - User Account Menu (replaces utility icons) */}
            <Box className={styles.rightNavSection}>
              {isLoggedIn ? (
                <Box className={styles.userAccountSection}>
                  <Button
                    className={styles.userAccountButton}
                    onClick={handleAccountMenuOpen}
                    startIcon={<AccountCircleIcon />}
                  >
                    {userName}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleAccountMenuClose}
                    className={styles.accountMenu}
                    PaperProps={{
                      className: styles.accountMenuPaper,
                    }}
                  >
                    <MenuItem onClick={handleAccountMenuClose} className={styles.accountMenuItem}>
                      <AccountCircleIcon sx={{ mr: 1.5, fontSize: '1.2rem' }} />
                      <Typography variant="body2">{userName}</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout} className={styles.accountMenuItem}>
                      <LogoutIcon sx={{ mr: 1.5, fontSize: '1.2rem' }} />
                      <Typography variant="body2">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Box className={styles.authButtons}>
                  <Button 
                    className={styles.authButton}
                    onClick={openLoginModal}
                  >
                    Login
                  </Button>
                  <Button 
                    className={`${styles.authButton} ${styles.signupButton}`}
                    onClick={openSignupModal}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className={styles.drawerContainer}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Login/Signup Modal */}
      <CustomerLoginModal 
        open={authModalOpen} 
        onClose={handleAuthModalClose}
        initialMode={authModalMode}
      />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default withDuck([customerAuthInjectible])(DrawerAppBar);
