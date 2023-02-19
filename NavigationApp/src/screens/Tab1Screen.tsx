import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('log from tab1Screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab 1 Screen</Text>
      <Icon
        style={{alignSelf: 'center'}}
        name="rocket"
        size={30}
        color="#900"
      />
    </View>
  );
};
