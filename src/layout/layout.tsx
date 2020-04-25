/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Global } from '@emotion/core';
import GlobalStyle from './global.styled';

declare global {
  interface Window {
    persistor: any;
  }
}

interface LayoutProps {
  persistor: any;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  window.persistor = props.persistor;

  return (
    <div>
      <Global styles={GlobalStyle} />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
