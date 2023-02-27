import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.actorImage} />}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}> {actor.name}</Text>
        <Text style={styles.actorCharacter}> {actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    paddingRight: 10,
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  actorImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
});
