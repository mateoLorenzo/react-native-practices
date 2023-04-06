/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import {StackNavigator} from './src/navigation/StackNavigator';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors, // <-- Switch between DarkTheme and DefaultTheme
    // primary: string,
    // background: string,
    // card: string,
    // text: string,
    // border: string,
    // notification: string,
  },
};
const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
