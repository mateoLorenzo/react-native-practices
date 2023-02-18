import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTabNavigator} from './TopTabNavigator';

export const TabsNavigator = () => {
  return Platform.OS === 'ios' ? (
    <IosTabsNavigator />
  ) : (
    <AndroidTabsNavigator />
  );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const AndroidTabsNavigator = () => {
  return (
    <BottomTabAndroid.Navigator
      activeColor="white"
      inactiveColor="gray"
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: () => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1!';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'Tab3Screen':
              iconName = 'T3';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }

          return <Text>{iconName}</Text>;
        },
      })}>
      <BottomTabIos.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1 android'}}
        component={Tab1Screen}
      />
      <BottomTabIos.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <BottomTabIos.Screen
        name="Tab3Screen"
        options={{title: 'Tab 3'}}
        component={TopTabNavigator}
      />
      <BottomTabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack Screen!'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIos = createBottomTabNavigator();

const IosTabsNavigator = () => {
  return (
    <BottomTabIos.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: () => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'Tab3Screen':
              iconName = 'T3';
              break;
            case 'StackNavigator':
              iconName = 'Stack';
              break;
          }

          return <Text>{iconName}</Text>;
        },
      })}>
      <BottomTabIos.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIos.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <BottomTabIos.Screen
        name="Tab3Screen"
        options={{title: 'Tab 3', headerShown: false}}
        component={TopTabNavigator}
      />
      <BottomTabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack Screen!'}}
        component={StackNavigator}
      />
    </BottomTabIos.Navigator>
  );
};
