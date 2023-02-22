import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
        <View style={{backgroundColor: 'red', height: 230}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
            En Cine
          </Text>
          <FlatList
            data={moviesList}
            renderItem={({item}: any) => (
              <MovieCard movie={item} height={200} width={140} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
