import React, { useContext, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../themes';
import { GlobalContext } from '../contexts/globalContext';

// import { Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const currentTheme = useContext(GlobalContext);

  let theme;
  switch (currentTheme.theme) {
    case 'dark':
      theme = dark;
      break;
    case 'light':
      theme = light;
      break;
    default:
      theme = light;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
