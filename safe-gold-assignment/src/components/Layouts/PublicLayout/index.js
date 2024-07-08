import React from 'react';
import { Header } from '../../Header';

export const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
