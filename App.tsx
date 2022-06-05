import React from 'react';
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'

import { useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Dashboard from './src/Screens/Dashboard'
import Auth from './src/Screens/Auth'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Dashboard'>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
