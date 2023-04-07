import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity activeOpacity={0.8} style={screenStyles.button}>
        <Text style={screenStyles.buttonText}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  button: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
