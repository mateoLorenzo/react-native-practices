/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  LayoutChangeEvent,
} from 'react-native';

interface WidthAnimationScreenProps {}

export const WidthAnimationScreen: React.FC<WidthAnimationScreenProps> = () => {
  const viewWidth = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] =
    useState<string>('lightseagreen');

  const expandWidth = (percentage: number) => {
    Animated.timing(viewWidth, {
      toValue: (containerWidth * percentage) / 100,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      if ((containerWidth * percentage) / 100 >= containerWidth) {
        setBackgroundColor('green');
      }
    });
  };

  const onViewLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: 'https://i.imgur.com/3gDEdIj.png'}}
          style={{width: 100, height: 100}}
        />
        <View
          onLayout={onViewLayout}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 10,
          }}>
          <Animated.View
            style={{
              width: viewWidth,
              height: 100,
              borderRadius: 10,
              backgroundColor: backgroundColor,
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => expandWidth(100)}>
        <Text>Expand width to 70%</Text>
      </TouchableOpacity>
    </View>
  );
};
