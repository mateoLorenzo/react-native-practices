import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface RouterParams {
  name: string;
  age: number;
}

interface Props extends StackScreenProps<any, any> {}

export const PersonScreen = ({route, navigation}: Props) => {
  const params = route.params as RouterParams;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });
  return (
    <View>
      <Text style={styles.title}>Person Screen</Text>
      <Text>{params.name}</Text>
      <Text>{params.age}</Text>
    </View>
  );
};
