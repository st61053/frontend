import { IconButton, Menu, MenuItem, Stack, Typography, useColorScheme } from '@mui/material';
import React from 'react';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useDispatch } from 'react-redux';
import {
  ThemeSwitcher,
} from '@toolpad/core/DashboardLayout';

function UserMenu() {

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setMode, colorScheme } = useColorScheme();


  return (
    <>
      <IconButton onClick={handleClick}>
        <KeyboardArrowDownOutlinedIcon />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setMode(colorScheme === "dark" ? "light" : "dark")}>
          <Stack direction={'row'} gap={4}>
            <DarkModeOutlinedIcon />
            <Typography>{"Dark mode"}</Typography>
            {colorScheme === "dark" ? <ToggleOnOutlinedIcon /> : <ToggleOffOutlinedIcon />}
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Stack direction={'row'} gap={4}>
            <PermIdentityOutlinedIcon />
            <Typography>Profile</Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Stack direction={'row'} gap={4}>
            <SettingsOutlinedIcon />
            <Typography>Settings</Typography>
          </Stack>
        </MenuItem>
        <MenuItem >
          <Stack direction={'row'} gap={4}>
            <LogoutOutlinedIcon />
            <Typography>Logout</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
