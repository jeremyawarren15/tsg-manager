'use client';

import { ReactNode, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  List,
  ClickAwayListener,
} from '@mui/material';
import {
  CalendarMonth,
  Dashboard,
  Groups,
  Help,
} from '@mui/icons-material';
import SigninButton from './SignInButton';
import NavListItem from './NavListItem';

interface DrawerListItem {
  name: string;
  icon: ReactNode;
  route: string;
}

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  const list: DrawerListItem[] = [
    { name: 'Dashboard', icon: <Dashboard />, route: '/' },
    { name: 'Events', icon: <CalendarMonth />, route: '/events' },
    { name: 'Members', icon: <Groups />, route: '/members' },
    { name: 'FAQ', icon: <Help />, route: '/faq' },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
      <List>
        {list.map(({ name, icon, route }, index) => (
          <NavListItem key={index} name={name} icon={icon} route={route} />
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Troop 68
            </Typography>
            <SigninButton />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open}>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          {DrawerList}
        </ClickAwayListener>
      </Drawer>
    </>
  );
}