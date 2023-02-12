import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PersonScreen = ({route, navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  });
  return (
    <View>
      <Text style={styles.title}>Person Screen</Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.age}</Text>
    </View>
  );
};
