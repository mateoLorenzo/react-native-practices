import React from 'react';
import {View, StyleSheet} from 'react-native';

export const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
});
