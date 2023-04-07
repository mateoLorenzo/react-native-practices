import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {theme, setDarkTheme, setLightTheme} = useContext(ThemeContext);
  const {colors} = theme;

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{...screenStyles.button, backgroundColor: colors.primary}}>
          <Text style={screenStyles.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{...screenStyles.button, backgroundColor: colors.primary}}>
          <Text style={{...screenStyles.buttonText}}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  button: {
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
