import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const SettingsScreen = ({navigation}: Props) => {
  const {authState} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text style={{...styles.title}}>Settings Screen!!</Text>
      <Text style={{alignSelf: 'center'}}>This is my settings screen</Text>
      <Button
        title="Navigate to Stack Navigator"
        onPress={() => navigation.navigate('TabsNavigator')}
      />
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </SafeAreaView>
  );
};
