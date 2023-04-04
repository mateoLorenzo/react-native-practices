import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onInputChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={screenStyles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              value={form.name}
              placeholder="Ingrese su nombre"
              onChangeText={text => onInputChange(text, 'name')}
              style={screenStyles.textInput}
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              value={form.email}
              placeholder="Ingrese su email"
              onChangeText={text => onInputChange(text, 'email')}
              style={screenStyles.textInput}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              value={form.phone}
              placeholder="Ingrese su telefono"
              onChangeText={text => onInputChange(text, 'phone')}
              style={{...screenStyles.textInput, marginBottom: 30}}
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
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
