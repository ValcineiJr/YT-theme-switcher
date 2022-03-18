import React, {ReactNode} from 'react';

import GlobalContextProvider from '../contexts/globalContext';

import {Layout} from '../components/Layout';

interface Props {
  children: ReactNode;
}

export function AppProviders({children}: Props) {
  return (
    <GlobalContextProvider>
      <Layout>{children}</Layout>
    </GlobalContextProvider>
  );
}
