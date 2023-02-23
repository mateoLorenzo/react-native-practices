import React from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{flex: 1, marginTop: top}}>
        <View style={{height: 440}}>
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
      </View>
    </ScrollView>
  );
};
