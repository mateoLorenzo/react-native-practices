import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{...styles.title}}>Settings Screen!!</Text>
      <Text style={{alignSelf: 'center'}}>This is my settings screen</Text>
    </SafeAreaView>
  );
};
