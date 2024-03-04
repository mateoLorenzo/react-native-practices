/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text, TextStyle, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

interface Props {
  title: string;
  customStyles?: TextStyle;
  marginTop?: number;
}

export const HeaderTitle = ({title, customStyles, marginTop}: Props) => {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;
  return (
    <View style={{marginTop: marginTop ? marginTop : top, marginBottom: 20}}>
      <Text
        style={{
          color: colors.text,
          ...styles.title,
          ...customStyles,
        }}>
        {title}
      </Text>
    </View>
  );
};
