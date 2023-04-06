import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

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

  const moveBox = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const resetBox = () => {
    Animated.timing(position, {
      toValue: -200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    moveBox,
    resetBox,
  };
};
