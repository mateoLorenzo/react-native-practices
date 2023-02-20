import React from 'react';
import {useContext} from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {authState, logout} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  return (
    <View>
      <Text>AlbumsScreen</Text>
      {isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
