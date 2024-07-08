import React from 'react';
import { Header } from '../../Header';

export const PrivateLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
