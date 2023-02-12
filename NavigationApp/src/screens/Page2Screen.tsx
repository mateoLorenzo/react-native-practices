import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Pagina 2!',
      headerBackTitle: 'Back',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Navigate to Page 3"
        onPress={() => navigator.navigate('Page3Screen' as never)}
      />
    </View>
  );
};
