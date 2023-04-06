/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const initialArray = [...numbers];
    for (let i = 1; i <= 6; i++) {
      const lastNumber = numbers[numbers.length - 1];
      initialArray.push(lastNumber + i);
    }

    setTimeout(() => {
      setNumbers(initialArray);
    }, 1500);
  };

  const renderItem = (item: number) => (
    <FadeInImage uri={`https://picsum.photos/id/${item}/1024/1024`} />
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
        ListFooterComponent={
          <ActivityIndicator
            size={25}
            color="#5856D6"
            style={{marginVertical: 187.5}}
          />
        }
      />
    </View>
  );
};
