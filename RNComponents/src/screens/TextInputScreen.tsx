import React, {useContext} from 'react';
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
import {ThemeContext} from '../context/themeContext/ThemeContext';
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
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;
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
              style={{
                ...screenStyles.textInput,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              value={email}
              placeholder="Ingrese su email"
              onChangeText={text => onChange(text, 'email')}
              style={{
                ...screenStyles.textInput,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <View style={styles.switchRow}>
              <Text style={{...styles.switchText, color: colors.text}}>
                isHappy
              </Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              value={phone}
              placeholder="Ingrese su telefono"
              onChangeText={text => onChange(text, 'phone')}
              style={{
                ...screenStyles.textInput,
                color: colors.text,
                borderColor: colors.text,
              }}
              placeholderTextColor={colors.text}
              keyboardType="phone-pad"
            />
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
