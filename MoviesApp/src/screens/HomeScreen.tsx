import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';

// interface Props extends StackScreenProps<any, any> {}

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {moviesList, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }
  return (
    <ScrollView style={{paddingTop: top}}>
      <View style={styles.mainCarouselContainer}>
        <Carousel
          vertical={false}
          data={moviesList}
          renderItem={({item}: any) => <MovieCard movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
      <HorizontalSlider title="En Cines" moviesList={moviesList} />
      <HorizontalSlider moviesList={moviesList} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainCarouselContainer: {
    height: 440,
  },
});
