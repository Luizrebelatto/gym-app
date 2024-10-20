import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "./src/global/theme"
import Login from "./src/screens/Login"
import { Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { useFonts } from 'expo-font';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold, Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    // splashScreen
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <Login/>
    </ThemeProvider>
  );
}
