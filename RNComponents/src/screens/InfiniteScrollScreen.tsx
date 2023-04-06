import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
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
    <Image
      source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      style={{width: '100%', height: 400}}
    />
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
