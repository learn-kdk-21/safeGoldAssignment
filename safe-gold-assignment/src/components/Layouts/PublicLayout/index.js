import React from 'react';
import { Header } from '../../Header';
import './index.scss';

export const PublicLayout = ({ children }) => {
  return (
    <div className="publicLayoutWrap">
      <Header />
      {children}
    </div>
  );
};
