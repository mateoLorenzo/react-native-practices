import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {CustomDrawerNavigator} from './src/navigator/CustomDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <CustomDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
