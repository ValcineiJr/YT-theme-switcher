import React from 'react';
import { AppProviders } from './src/contexts';

import { Home } from './src/pages/Home';

// import { Container } from './styles';

export default function App() {
  return (
    <AppProviders>
      <Home />
    </AppProviders>
  );
}
