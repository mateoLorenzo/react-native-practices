import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  console.log('movie', movie.title);
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};
