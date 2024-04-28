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
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const pathName = usePathname();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
       HOUSE OF SANSA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: pathName === '/' ? 'transparent' : '#fff', boxShadow: 0,px:{xs:2,sm:14}}}>
        <Toolbar sx={{ width: '100%',paddingLeft:'100px',padding:'0px !important' }}>
          <Grid container sx={{display: { xs: 'grid',sm:'none' } }}>
            <Grid item xs={12} sx={{display:"flex",alignItems:'center'}}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon sx={{color:'#101010'}}/>
              </IconButton>
              <Typography variant='h5' sx={{color:"#101010",textAlign:'center',width:'100%'}}>HOUSE OF SANSA</Typography>
            </Grid>
          </Grid>
          <Grid container  sx={{display: { xs: 'none',sm:'flex' } }}>
            <Grid item xs={4}>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item.id} sx={{ color: pathName === '/' ? '#fff' : '#000' }} className={styles.links}>
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, color: pathName === '/' ? '#fff' : '#000',textAlign:'center' }}
                className={styles.main}
              >
                HOUSE OF SANSA
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: { xs: 'none', sm: 'block' },textAlign:'right' }}>
                <PersonOutlineOutlinedIcon sx={{ marginX: 1, color: pathName === '/' ? '#fff' : '#000' }} />
                <LocalMallOutlinedIcon sx={{ marginX: 1, color: pathName === '/' ? '#fff' : '#000' }} />
                <SearchOutlinedIcon sx={{ marginX: 1, color: pathName === '/' ? '#fff' : '#000' }} />
              </Box>
            </Grid>
          </Grid>
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