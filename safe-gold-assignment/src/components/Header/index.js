import React, { useEffect } from 'react';
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
import { Popover } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ModalComp } from '../../components/Modal';
import { LoginForm } from '../LoginForm';
import safegoldLogo from '../../assets/safegold-logo.svg';
import coinDrop from '../../assets/coinDrop.gif';
import { OtpPopup } from '../OtpPopup';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginStatus } from '../../store/reducers/authentication';

const modalProps = {
  loginModal: false,
  otpModal: false,
};
const pagesPrivate = [
  'Buy',
  'Lease',
  'Sell',
  'Gift',
  'Buy Coins',
  'SIP',
  'Jewellery',
  'FAQ',
];
const pagesPublic = [
  'Jewellery Exchange',
  'For Customers',
  'Buy Coins',
  'Lease',
  'Partner With Us',
  'About Us',
  'Login',
  'Signup',
];

export const Header = () => {
  const navigate = useNavigate();
  const [isPrivate, setIsPrivate] = useState(false);
  const [openModal, setOpenModal] = useState(modalProps);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pages, setPages] = useState([]);
  const dispatch = useDispatch();
  const openLoginModal = useSelector(
    (state) => state?.authentication?.auth?.openLoginModal
  );
  useEffect(() => {
    const authSafeGold = localStorage.getItem('authSafeGold');
    if (authSafeGold) {
      setIsPrivate(true);
      setPages(pagesPrivate);
    } else {
      setPages(pagesPublic);
      setIsPrivate(false);
    }
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = (type) => {
    setOpenModal({ ...modalProps, [type]: true });
  };

  useEffect(() => {
    if (openLoginModal) setOpenModal({ ...modalProps, loginModal: true });
  }, [openLoginModal]);

  const handleCloseModal = () => {
    setOpenModal(modalProps);
    dispatch(updateLoginStatus(false));
  };
  const handleButtonClick = (page) => {
    if (page === 'Signup' || page === 'Login') {
      handleOpenModal('loginModal');
    } else {
      navigate('/');
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.clear();
    setIsPrivate(false);
    setPages(pagesPublic);
    navigate('/');
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-menu' : undefined;

  return (
    <div className="headerWrap">
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          color: '#000000',
          padding: '0 1rem',
        }}
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
            <Box
              className="webViewWrap"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleButtonClick(page)}
                  className={`buttonWrap ${
                    page === 'Signup' ? 'signUpButton' : ''
                  } ${page === 'Lease' && !isPrivate ? 'textShine' : ''} ${
                    page === 'Buy Coins' && isPrivate ? 'buyCoinsWrap' : ''
                  }`}
                  sx={{
                    my: 2,
                    display: 'flex',
                    textTransform: 'none',
                    padding: '6px 20px',
                    lineHeight: '22.07px',
                  }}
                >
                  {page}
                  {page === 'Lease' && !isPrivate ? (
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
            {isPrivate && (
              <>
                <div className="userIconWrap">
                  <PersonIcon
                    sx={{
                      border: '1px solid red',
                      borderRadius: '50%',
                      padding: '10px',
                    }}
                  />
                </div>
                <div>
                  <IconButton aria-describedby={id} onClick={handleClick}>
                    Test <ArrowDropDownIcon />
                  </IconButton>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleLogout}>
                      <LogoutIcon sx={{ mr: 1 }} />
                      Logout
                    </MenuItem>
                  </Popover>
                </div>
              </>
            )}
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
