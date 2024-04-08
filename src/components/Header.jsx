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
import RocketIcon from '@mui/icons-material/Rocket';

const settings = ['Dashboard', 'Logout'];

function Header({ showResumeManager }) {
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
            boxShadow: 'none',
            backgroundColor: '#ffffff',
            color: '#020617',
            borderBottom: '1px solid #cbd5e1',
         }}
      >
         <Toolbar
            sx={{
               display: 'flex',
               alignItems: 'center',
               width: '80%',
               mx: 'auto',
            }}
            disableGutters
         >
            <RocketIcon
               sx={{
                  // rotate: '10deg',
                  color: 'red',
                  mr: 1,
                  fontSize: '3rem',
                  pb: 0.5,
               }}
            />
            <Typography
               variant="h6"
               noWrap
               component="a"
               sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontWeight: 700,
               }}
            >
               RocketCV
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
                     <MenuItem
                        key={setting}
                        onClick={() => {
                           handleCloseUserMenu;
                           if (setting === 'Dashboard') {
                              showResumeManager();
                           }
                        }}
                     >
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
