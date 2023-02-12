import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.title}>Page3Screen</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Button title="Back to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
