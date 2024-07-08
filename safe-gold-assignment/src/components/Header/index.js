import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ModalComp } from '../../components/Modal';
import { LoginForm } from '../LoginForm';
import safegoldLogo from '../../assets/safegold-logo.svg';
import coinDrop from '../../assets/coinDrop.gif';
import { OtpPopup } from '../OtpPopup';
import './index.scss';

const pages = [
  'Jewellery Exchange',
  'For Customers',
  'Buy Coins',
  'Lease',
  'Partner With Us',
  'About Us',
  'Login',
  'Signup',
];

const modalProps = {
  loginModal: false,
  otpModal: false,
};

export const Header = () => {
  // const [isToken, setIsToken] = useState(false);
  const [openModal, setOpenModal] = useState(modalProps);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = (type) => {
    setOpenModal({ ...modalProps, [type]: true });
  };

  const handleCloseModal = () => {
    setOpenModal(modalProps);
  };
  const handleButtonClick = (page) => {
    if (page === 'Signup' || page === 'Login') {
      handleOpenModal('loginModal');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="headerWrap">
      {/* <div className="headerElementParent">
        {pages.map((item, index) => {
          return (
            <div
              key={index}
              className="headerElement"
              onClick={() => handleRouting(item)}
            >
              {item.title}
            </div>
          );
        })}
      </div> */}
      <AppBar
        position="static"
        sx={{ backgroundColor: '#FFFFFF', color: '#000000', padding: '0 1rem' }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <span className="logoWrap">
              <img src={safegoldLogo} alt={'safegoldLogo'} />
            </span>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div className="profileMenu">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
              </div>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleButtonClick(page)}
                  className={`buttonWrap ${
                    page === 'Signup' ? 'signUpButton' : ''
                  } ${page === 'Lease' ? 'textShine' : ''}`}
                  sx={{
                    my: 2,
                    display: 'flex',
                    textTransform: 'none',
                    padding: '6px 20px',
                    lineHeight: '22.07px',
                  }}
                >
                  {page}
                  {page === 'Lease' ? (
                    <img
                      className="coinDropWrap"
                      src={coinDrop}
                      alt="coinDrop"
                    />
                  ) : (
                    ''
                  )}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ModalComp isOpen={openModal.loginModal} handleClose={handleCloseModal}>
        <LoginForm
          onClose={handleCloseModal}
          onClick={() => handleOpenModal('otpModal')}
        />
      </ModalComp>
      <ModalComp isOpen={openModal.otpModal} handleClose={handleCloseModal}>
        <OtpPopup onClose={handleCloseModal} />
      </ModalComp>
    </div>
  );
};
