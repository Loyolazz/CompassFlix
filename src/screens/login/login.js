import React, {useState} from 'react';
import { ImageBackground, KeyboardAvoidingView, Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './style_login';

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require('../../assets/login_imagens/bannerLogin.png')} style={styles.banner} />
      <Image source={require('../../assets/login_imagens/logo.png')} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.loginText]}>Login</Text>
        <Text style={[styles.text, styles.descriptionText]}>Entre na sua conta para continuar.</Text>
        <View style={styles.inputView}>
          <Icon size={25} color={'#ffffff80'} style={{paddingTop: 15, paddingLeft: 10}} name='user'/>
          <TextInput
          style={styles.inputText}
          placeholder='e-mail'
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={'#ffffff80'}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <View style={styles.inputView}>
          <Icon size={30} color={'#ffffff80'} style={{paddingTop: 12, paddingLeft: 10}} name='lock'/>
          <TextInput
          style={styles.inputText}
          placeholder='senha'
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={()=> {}}
          placeholderTextColor={'#ffffff80'}
          autoCapitalize='none'
          />
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={() => {}}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

export default App;