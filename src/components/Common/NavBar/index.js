"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Grid } from '@mui/material';
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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { navItems } from './constants';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';
import Menu from './menu';
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const router = useRouter()
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, cursor: 'pointer' }} onClick={() => router.push('/')}>
        HOUSE OF SANSA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding onClick={() => router.push(item.path)}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#fff', boxShadow: 0 }}>
        <Box sx={{mt:2}}>
          <Typography
            variant="h3"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#000', textAlign: 'center' }}
            className={styles.logo}
            onClick={() => router.push('/')}
          >
            HOUSE OF SANSA
          </Typography>
        </Box>
        <Toolbar sx={{ width: '100%' }}>
          <Grid container sx={{ display: { xs: 'grid', sm: 'none' } }}>
            <Grid item xs={12} sx={{ display: "flex", alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon sx={{ color: '#101010' }} />
              </IconButton>
              <Typography variant='h5' sx={{ color: "#101010", textAlign: 'center', width: '100%' }}>HOUSE OF SANSA</Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'space-evenly', width: '100%',alignItems:'center' } }}>
            <Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'right' }}>
                <Typography variant='subtitle2' sx={{color:'#000'}} className={styles.links}>( +123 ) 456 7890</Typography>
              </Box>
            </Box>
            <Box item>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item.id} sx={{ color: '#000' }} className={styles.links} onClick={() => router.push(item.path)}>
                    {item.dropDown ? <Menu title={item.title} /> : item.title}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box item>
              <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'right' }}>
                <PersonOutlineOutlinedIcon sx={{ marginX: 1, color: '#000' }} />
                <LocalMallOutlinedIcon sx={{ marginX: 1, color: '#000' }} />
                <SearchOutlinedIcon sx={{ marginX: 1, color: '#000' }} />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;