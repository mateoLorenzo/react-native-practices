import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  return (
    <View>
      <Text>ContactsScreen</Text>
      {isLoggedIn ? null : <Button title="login" onPress={signIn} />}
    </View>
  );
};
