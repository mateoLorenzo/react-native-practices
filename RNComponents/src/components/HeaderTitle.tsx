import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;
  return (
    <View style={{marginTop: top, marginBottom: 20}}>
      <Text
        style={{
          ...styles.title,
          color: colors.text,
        }}>
        {title}
      </Text>
    </View>
  );
};
