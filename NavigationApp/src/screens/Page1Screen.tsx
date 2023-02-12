import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = (props: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Navigate to Page 2"
        onPress={() => props.navigation.navigate('Page2Screen')}
      />
      <Button
        title="Navigate to PersonScreen"
        onPress={() =>
          props.navigation.navigate('PersonScreen', {name: 'MatuMoto', age: 21})
        }
      />
    </View>
  );
};
