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
import {GradientBackground} from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const result = await ImageColors.getColors(uri, {
      fallback: '#228B22',
      cache: true,
      key: 'unique_key',
    });
    switch (result.platform) {
      case 'android':
        // android result properties
        const vibrantColor = result.vibrant;
        break;
      case 'web':
        // web result properties
        const lightVibrantColor = result.lightVibrant;
        break;
      case 'ios':
        // iOS result properties
        const primaryColor = result.primary;
        break;
      default:
        throw new Error('Unexpected platform key');
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView style={{paddingTop: top}}>
        <View style={styles.mainCarouselContainer}>
          <Carousel
            vertical={false}
            data={nowPlaying}
            renderItem={({item}: any) => <MovieCard movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            onSnapToItem={index => getPosterColors(index)}
          />
        </View>
        <HorizontalSlider title="Popular" moviesList={popular} />
        <HorizontalSlider title="Top Rated" moviesList={topRated} />
        <HorizontalSlider title="Upcoming" moviesList={upcoming} />
      </ScrollView>
    </GradientBackground>
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
