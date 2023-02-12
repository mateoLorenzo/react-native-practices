import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Navigate to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text style={styles.page1ScreenSubtitle}>Navigate with arguments</Text>
      <Button
        title="MatuMoto"
        onPress={() =>
          navigation.navigate('PersonScreen', {name: 'MatuMoto', age: 21})
        }
      />
      <Button
        title="Gordos Gordos"
        onPress={() =>
          navigation.navigate('PersonScreen', {name: 'El Gordo', age: 15})
        }
      />
    </View>
  );
};
