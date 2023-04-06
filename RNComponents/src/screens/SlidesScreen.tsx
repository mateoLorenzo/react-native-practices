/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImageSourcePropType, SafeAreaView, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn, fadeOut} = useAnimation();
  const navigation = useNavigation();

  useEffect(() => {
    if (activeIndex === items.length - 1) {
      fadeIn();
    }
    if (activeIndex !== 2) {
      fadeOut();
    }
  }, [activeIndex]);

  const renderItem = (item: Slide) => (
    <View style={styles.imageContainer}>
      <Image source={item.img} style={styles.sliderImage} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.desc}</Text>
    </View>
  );

  const onPress = () => {
    if (activeIndex === items.length - 1) {
      navigation.navigate('HomeScreen' as never);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Carousel
        vertical={false}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.paginationDot}
        />

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.enterButton}>
            <Text style={styles.enterButtonText}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={25} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  sliderImage: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subtitle: {
    fontSize: 16,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#5856D6',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  enterButton: {
    flexDirection: 'row',
    backgroundColor: '#5856D6',
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
