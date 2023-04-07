import React, {useContext} from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, moveBox, resetBox} =
    useAnimation();

  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <TouchableOpacity onPress={() => moveBox(-1000)}>
        <Text style={{color: colors.text}}>Center Box</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetBox}>
        <Text style={{color: colors.text}}>Reset Box</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeIn}>
        <Text style={{color: colors.text}}>Show</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOut}>
        <Text style={{color: colors.text}}>Hide</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    // top: -100,
    borderRadius: 10,
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
