import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Open Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal
        animationType="fade"
        visible={isVisible}
        transparent
        onRequestClose={() => {
          setIsVisible(false);
        }}>
        <View style={screenStyles.modalContainer}>
          <View style={screenStyles.modal}>
            <HeaderTitle title="Modal Screen" />
            <Text>Modal body</Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
