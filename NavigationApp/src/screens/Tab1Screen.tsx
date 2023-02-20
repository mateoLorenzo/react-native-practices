import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('log from tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin}}>
      <Text style={{...styles.title, marginTop: 20}}>Icons - Ionicons</Text>
      <View style={styles.iconsContainer}>
        <Icon style={styles.icon} name="rocket" size={30} />
        <Icon style={styles.icon} name="funnel-outline" size={30} />
        <Icon style={styles.icon} name="laptop-outline" size={30} />
        <Icon style={styles.icon} name="megaphone-outline" size={30} />
        <Icon style={styles.icon} name="mic-outline" size={30} />
        <Icon style={styles.icon} name="newspaper-outline" size={30} />
        <Icon style={styles.icon} name="people-outline" size={30} />
        <Icon style={styles.icon} name="phone-portrait-outline" size={30} />
        <Icon style={styles.icon} name="pin-outline" size={30} />
        <Icon style={styles.icon} name="person-add-outline" size={30} />
        <Icon style={styles.icon} name="pulse-outline" size={30} />
        <Icon style={styles.icon} name="medal-outline" size={30} />
        <Icon style={styles.icon} name="share-outline" size={30} />
        <Icon style={styles.icon} name="skull-outline" size={30} />
        <Icon style={styles.icon} name="train-outline" size={30} />
        <Icon style={styles.icon} name="star-outline" size={30} />
        <Icon style={styles.icon} name="terminal-outline" size={30} />
        <Icon style={styles.icon} name="volume-mute-outline" size={30} />
        <Icon style={styles.icon} name="woman-outline" size={30} />
        <Icon style={styles.icon} name="trophy-outline" size={30} />
      </View>
    </View>
  );
};
