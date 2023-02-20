import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

export const SettingsScreen = ({navigation}: Props) => {
  const {authState} = useContext(AuthContext);
  const {favoriteIcon} = authState;

  return (
    <SafeAreaView>
      <Text style={{...styles.title}}>Settings Screen!!</Text>
      <Text style={{alignSelf: 'center'}}>This is my settings screen</Text>
      <Button
        title="Navigate to Stack Navigator"
        onPress={() => navigation.navigate('TabsNavigator')}
      />
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {favoriteIcon && (
        <Icon style={styles.icon} name={favoriteIcon} size={150} />
      )}
    </SafeAreaView>
  );
};
