import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, ReactNode} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';

interface GlobalContextData {
  theme: string;
  themeSwitchHandler(themeType: string): Promise<void>;
}

export const GlobalContext = React.createContext<GlobalContextData>(
  {} as GlobalContextData,
);

interface ContextProps {
  children: ReactNode;
}

const GlobalContextProvider = ({children}: ContextProps) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  const themeSwitchHandler = async (themeType: string) => {
    setCurrentTheme(themeType);
    await AsyncStorage.setItem('theme', themeType);
  };

  useEffect(() => {
    async function getTheme() {
      const result = await AsyncStorage.getItem('theme');
      if (result) {
        setCurrentTheme(result);
      }
      setLoading(false);
    }

    getTheme();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Text style={{marginBottom: 15, fontSize: 20}}>Carregando...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        theme: currentTheme,
        themeSwitchHandler: themeSwitchHandler,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
