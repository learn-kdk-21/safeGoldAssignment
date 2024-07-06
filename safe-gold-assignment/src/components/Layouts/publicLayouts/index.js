import React from "react";
import { Header } from "../../Header";

export const PublicLayouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
