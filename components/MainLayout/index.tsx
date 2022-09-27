import React from 'react';

import { BreadCrumbs } from '../Breadcrumbs';
import Footer from '../Footer';
import Header from '../Header';

import { BreadCrumbsContainer } from './style';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />

      <BreadCrumbsContainer>
        <BreadCrumbs />
      </BreadCrumbsContainer>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
