import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const settings = ['Profile', 'Dashboard', 'Logout'];

function Header() {
   const [anchorElUser, setAnchorElUser] = useState(null);

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar
         sx={{
            backgroundColor: '#ffffff',
            color: '#020617',
            borderBottom: '1px solid #cbd5e1',
         }}
         position="static"
      >
         <Toolbar disableGutters>
            <AdbIcon sx={{ display: 'flex', mr: 1 }} />
            <Typography
               variant="h6"
               noWrap
               component="a"
               href="#app-bar-with-responsive-menu"
               sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
               }}
            >
               LOGO
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
               <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                     <Avatar alt="Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
               </Tooltip>
               <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
               >
                  {settings.map((setting) => (
                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                     </MenuItem>
                  ))}
               </Menu>
            </Box>
         </Toolbar>
      </AppBar>
   );
}
export default Header;
