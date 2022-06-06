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
import Step1 from './src/Screens/Steps/1'
import Step2 from './src/Screens/Steps/step2/Step2'
import Step3 from './src/Screens/Steps/step3/Step3'
import Step4 from './src/Screens/Steps/step4/Step4'
import Step5 from './src/Screens/Steps/step5/Step5'
import Step6 from './src/Screens/Steps/step6/Step6'
import Step7 from './src/Screens/Steps/step7/Step7'
import Step10 from './src/Screens/Steps/step10/Step10'


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
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Step10'>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Step1" component={Step1} />
          <Stack.Screen name="Step2" component={Step2} />
          <Stack.Screen name="Step3" component={Step3} />
          <Stack.Screen name="Step4" component={Step4} />
          <Stack.Screen name="Step5" component={Step5} />
          <Stack.Screen name="Step6" component={Step6} />
          <Stack.Screen name="Step7" component={Step7} />
          <Stack.Screen name="Step10" component={Step10} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
