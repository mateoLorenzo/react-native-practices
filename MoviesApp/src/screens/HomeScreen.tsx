import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, Button, Dimensions, View} from 'react-native';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

interface Props extends StackScreenProps<any, any> {}

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = ({navigation}: Props) => {
  const {moviesList, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('DetailScreen')}
      />
      <View style={{height: 440, backgroundColor: 'red'}}>
        <Carousel
          vertical={false}
          data={moviesList}
          renderItem={({item}: any) => <MovieCard movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
