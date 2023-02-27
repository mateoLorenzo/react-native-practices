import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull}: Props) => {
  console.log('movieFull.genres', movieFull.genres);
  return (
    <>
      {/* Details */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* story */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>

        {/* Budget */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
          {movieFull.budget.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
      </View>

      {/* Casting */}
    </>
  );
};
