import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.movieRateContainer}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={styles.movieRate}>{movieFull.vote_average}</Text>
          <Text style={styles.movieGenres}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* story */}
        <Text style={styles.storyTitle}>Historia</Text>
        <Text style={styles.movieOverview}>{movieFull.overview}</Text>

        {/* Budget */}
        <Text style={styles.budgetTitle}>Presupuesto</Text>
        <Text style={styles.movieBudget}>
          {movieFull.budget.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
      </View>

      {/* Casting */}
      <View style={styles.castContainer}>
        <Text style={styles.castTitle}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.castCardsContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
  },
  movieRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  movieRate: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  movieGenres: {
    marginLeft: 5,
    fontSize: 16,
    color: 'grey',
  },
  storyTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  movieOverview: {
    fontSize: 16,
    textAlign: 'justify',
    color: 'black',
  },
  budgetTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  movieBudget: {
    fontSize: 16,
    color: 'grey',
  },
  castContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  castTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: 'black',
  },
  castCardsContainer: {
    marginTop: 10,
    height: 70,
  },
});
