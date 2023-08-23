import {useRef, useState} from 'react';
import {Animated, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const usePetsAnimations = () => {
  // prettier-ignore
  const servicesPosition = useRef(new Animated.Value(screenHeight * -1),).current;
  const walkersPosition = useRef(new Animated.Value(0)).current;
  const buttonPosition = useRef(new Animated.Value(0)).current;

  const [walkersAreShown, setWalkersAreShown] = useState(true);

  const moveButton = (areWalkersShown: boolean) => {
    Animated.timing(buttonPosition, {
      toValue: areWalkersShown ? screenHeight * 0.8 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const moveWalkersContainer = (areWalkersShown: boolean) => {
    Animated.timing(walkersPosition, {
      toValue: areWalkersShown ? screenHeight * 1 : 0,
      duration: areWalkersShown ? 300 : 300,
      useNativeDriver: true,
    }).start();
  };
  const moveServicesContainer = (areWalkersShown: boolean) => {
    Animated.timing(servicesPosition, {
      toValue: areWalkersShown ? 0 : screenHeight * -1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const adjustScreenContent = (areWalkersShown: boolean) => {
    moveButton(areWalkersShown);
    moveWalkersContainer(walkersAreShown);
    moveServicesContainer(walkersAreShown);
  };

  return {
    adjustScreenContent,
    setWalkersAreShown,
    servicesPosition,
    walkersAreShown,
    buttonPosition,
    walkersPosition,
  };
};
