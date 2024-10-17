import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { BarChart, People, ShoppingCart, Dashboard as DashboardIcon, ExitToApp } from '@mui/icons-material';
import DashboardPage from './DashboardPage';
import UsersPage from './UsersPage';
import OrdersPage from './CreateCourses';
import ReportsPage from './ReportsPage';
import style from './admin.module.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Admin = () => {
  // State to manage which page to display
  const [selectedPage, setSelectedPage] = useState('dashboard');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setAnchorEl(null);
    // Perform logout action, like clearing auth tokens
  };

  // Function to render selected page
  const renderPage = () => {
    switch (selectedPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'users':
        return <UsersPage />;
      case 'Create-Course':
        return <OrdersPage />;
      case 'reports':
        return <ReportsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className={style.adminContainer}>
      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left" className={style.drawer}>
        <List className={style.drawerList}>
          <ListItem>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </ListItem>
          <ListItem button onClick={() => setSelectedPage('dashboard')}>
            <ListItemIcon>
              <DashboardIcon className={style.iconColor} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPage('users')}>
            <ListItemIcon>
              <People className={style.iconColor} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPage('Create-Course')}>
            <ListItemIcon>
              <AddCircleIcon className={style.iconColor} />
            </ListItemIcon>
            <ListItemText primary="Create Course" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPage('reports')}>
            <ListItemIcon>
              <BarChart className={style.iconColor} />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <main className={style.mainContent}>
        {/* Top Header */}
        <AppBar position="fixed" className={style.appBar} style={{background: "red"}}>
          <Toolbar>
            <Typography variant="h6" noWrap className={style.title}>
              Dashboard Overview
            </Typography>
            <IconButton onClick={handleMenuClick}>
              <Avatar alt="Admin Avatar" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleLogout}>
                <ExitToApp className={style.logoutIcon} />
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Toolbar /> {/* Spacer for fixed AppBar */}

        {/* Dynamic Content Area */}
        <div className={style.pageContent}>
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default Admin;
