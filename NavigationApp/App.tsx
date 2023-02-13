import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {CustomDrawerNavigator} from './src/navigator/CustomDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <CustomDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
