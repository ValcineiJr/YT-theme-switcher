import React, { useContext, useState } from 'react';
import { StatusBar, Switch } from 'react-native';
import { useTheme } from 'styled-components';
import { GlobalContext } from '../../contexts/globalContext';

import { Container, Title } from './styles';

export function Home() {
  const { colors } = useTheme();
  const [isEnabled, setIsEnabled] = useState(true);
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    themeSwitchHandler(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Switch
        trackColor={{ false: '#767577', true: '#222' }}
        thumbColor={isEnabled ? '#cecece' : '#f4fff3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Title>Bem-vindo(a)</Title>
    </Container>
  );
}
