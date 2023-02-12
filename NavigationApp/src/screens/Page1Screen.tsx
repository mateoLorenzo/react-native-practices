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
      <Text style={{textAlign: 'center', marginTop: 100}}>
        {' '}
        Navigate with arguments
      </Text>
      <Button
        title="MatuMoto"
        onPress={() =>
          props.navigation.navigate('PersonScreen', {name: 'MatuMoto', age: 21})
        }
      />
      <Button
        title="Gordos Gordos"
        onPress={() =>
          props.navigation.navigate('PersonScreen', {name: 'El Gordo', age: 15})
        }
      />
    </View>
  );
};
