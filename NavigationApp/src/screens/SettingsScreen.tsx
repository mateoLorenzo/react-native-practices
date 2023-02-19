import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const SettingsScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Text style={{...styles.title}}>Settings Screen!!</Text>
      <Text style={{alignSelf: 'center'}}>This is my settings screen</Text>
      <Button
        title="Navigate to Stack Navigator"
        onPress={() => navigation.navigate('TabsNavigator')}
      />
    </SafeAreaView>
  );
};
