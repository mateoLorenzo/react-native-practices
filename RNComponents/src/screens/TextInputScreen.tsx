import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {name, email, phone, isSubscribed} = form;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={screenStyles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              value={name}
              placeholder="Ingrese su nombre"
              onChangeText={text => onChange(text, 'name')}
              style={screenStyles.textInput}
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              value={email}
              placeholder="Ingrese su email"
              onChangeText={text => onChange(text, 'email')}
              style={screenStyles.textInput}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              value={phone}
              placeholder="Ingrese su telefono"
              onChangeText={text => onChange(text, 'phone')}
              style={{...screenStyles.textInput, marginBottom: 30}}
              keyboardType="phone-pad"
            />
            <View style={styles.switchRow}>
              <Text style={styles.switchText}>isHappy</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
