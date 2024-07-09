import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import './index.scss';

export const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();
  const authSafeGold = localStorage.getItem('authSafeGold');
  useEffect(() => {
    if (!authSafeGold) {
      navigate('/');
    }
  }, [authSafeGold, navigate]);

  if (!authSafeGold) {
    return null;
  }
  return (
    <div className="privateLayoutWrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
