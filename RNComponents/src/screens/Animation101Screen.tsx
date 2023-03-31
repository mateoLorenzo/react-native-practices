import React from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, moveBox, resetBox} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <TouchableOpacity onPress={() => moveBox(-1000)}>
        <Text>Center Box</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetBox}>
        <Text>Reset Box</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeIn}>
        <Text>Show</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOut}>
        <Text>Hide</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
