import React, {useRef} from 'react';
import {Animated, Easing, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const top = useRef(new Animated.Value(-200)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const centerBox = () => {
    Animated.timing(top, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const resetBox = () => {
    Animated.timing(top, {
      toValue: -200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{...styles.purpleBox, opacity, transform: [{translateY: top}]}}
      />
      <TouchableOpacity onPress={centerBox}>
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
