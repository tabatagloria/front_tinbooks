import React from 'react';
import {KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

import logo from '../assets/logo.png';

export default function Login({navigation}) {
  function handleLogin() {
    navigation.navigate('Localizacao');
  }

  function handleCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <KeyboardAvoidingView 
      behavior = 'padding'
      enable = {Platform.OS == 'ios'}
      style = {styles.container}>
      

      <Image source = {logo} />
      <TextInput 
      autoCapitalize = 'none'
      autoCorrect = {false}
      placeholder = "Login" 
      style={styles.input} />
      <TextInput
        placeholder = "Senha"
        secureTextEntry = {true}
        style = {styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style = {styles.button}>
        <Text style = {styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCadastro} style = {styles.button}>
        <Text style = {styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEEDE2',
    justifyContent: 'center',
  },

  input: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#5DBCD2',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
