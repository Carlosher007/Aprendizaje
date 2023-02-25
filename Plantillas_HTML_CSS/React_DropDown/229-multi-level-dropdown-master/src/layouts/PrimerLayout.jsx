import { Outlet } from 'react-router';
import React from 'react';
import Nav from 'components/Nav';

const PrimerLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default PrimerLayout;
