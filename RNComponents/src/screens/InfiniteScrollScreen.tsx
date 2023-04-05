import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const initialArray = [...numbers];
    for (let i = 1; i <= 6; i++) {
      const lastNumber = numbers[numbers.length - 1];
      initialArray.push(lastNumber + i);
    }
    console.log({initialArray});
    setNumbers([...initialArray]);
  };

  const renderItem = (item: number) => (
    <Text style={styles.textItem}>{item}</Text>
  );

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
