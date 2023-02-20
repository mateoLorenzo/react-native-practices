import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
