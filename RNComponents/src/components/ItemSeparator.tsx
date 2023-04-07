import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;
  return (
    <View style={{...styles.separator, borderBottomColor: colors.primary}} />
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    marginVertical: 8,
  },
});
