/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {NewFadeInImage} from '../components/NewFadeInImage';

const getDogImage = async () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'x-api-key': 'DEMO-API-KEY',
  });

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
      requestOptions,
    );

    const result = await response.json();
    const dogData = result[0];
    return dogData.url;
  } catch (error) {
    console.log('error', error);
    throw error; // Propagate the error further if necessary
  }
};

export const CustomImageScreen = () => {
  const [dogImage, setDogImage] = useState('/');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    setIsLoading(true);
    const dogImage2 = await getDogImage();
    setDogImage(dogImage2);
    setIsLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          width: 300,
          height: 300,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isLoading ? null : (
          <NewFadeInImage
            uri={dogImage}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
          />
        )}
      </Animated.View>
      <TouchableOpacity
        onPress={fetchDogImage}
        style={{
          backgroundColor: '#39adc1',
          padding: 20,
          borderRadius: 10,
          marginTop: 10,
          width: 300,
          alignItems: 'center',
        }}
        activeOpacity={0.6}>
        <Text style={{color: 'white'}}>Fetch Image</Text>
      </TouchableOpacity>
    </View>
  );
};
