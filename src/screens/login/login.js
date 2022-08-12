import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './style_login';
import { useNavigation } from '@react-navigation/native';

import Api from '../../services/api';
import { apiKey } from '../../services/api';
import { getTokenAuth } from '../../services/api';
import Loading from '../../Components/Loading/index';

const Login = () => {
  const [sessionId, setSessionId] = useState();
  const [key, setKey] = useState();
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const emailValidator =
    /.[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]/g;
  const passwordValidator = /.{6,}/g;

  useEffect(() => {
    getTokenAuth()
      .then(res => {
        setKey(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSignin = async () => {
    if (!email || !password) {
      return Alert.alert('Atenção!', 'Preencha todos os campos');
    }

    if (emailValidator.test(email) === false) {
      return Alert.alert('Atenção!', 'A formatação dos campos está errada');
    }

    if (passwordValidator.test(password) === false) {
      return Alert.alert('Atenção!', 'A formatação dos campos está errada');
    }

    setLoading(true);

    await Api.post(
      `/authentication/token/validate_with_login?api_key=${apiKey}`,
      {
        username: email,
        password: password,
        request_token: key,
      },
    )
      .then(response => console.log(response))
      .catch(err => alert('Usuario ou senha invalidos'));
    await Api.post(`/authentication/session/new?api_key=${apiKey}`, {
      request_token: key,
    })
      .then(response => {
        setSessionId(response.data.session_id),
          navigation.replace('TabBottomRoutes');
        setLoading(false);
        console.log(response.data.session_id);
      })
      .catch(err => alert('Usuario ou senha invalidos'))
      .finally(() => setLoading(false));
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require('../../assets/login_imagens/bannerLogin.png')}
        style={styles.banner}
      />
      <Animatable.Image
        animation='zoomInUp'
        duration={2000}
        source={require('../../assets/login_imagens/logo.png')}
        style={styles.logo}
      />

      {/* <Loading visible={loading} /> */}
      <View style={styles.textContainer}>
        <Animatable.Text
          animation='fadeInUp'
          duration={1000}
          style={[styles.text, styles.loginText]}>Login</Animatable.Text>
        <Animatable.Text
          animation='fadeInUp'
          duration={1000}
          style={[styles.text, styles.descriptionText]}>
          Entre na sua conta para continuar.
        </Animatable.Text>

        <View>
          <Animatable.View
            style={styles.inputView}
            animation='bounceInLeft'
            duration={2500}
          >
            <Icon
              size={25}
              color={'#ffffff80'}
              style={{ paddingTop: 15, paddingLeft: 10 }}
              name="user"
            />
            <TextInput
              style={styles.inputText}
              placeholder="e-mail"
              autoCorrect={false}
              placeholderTextColor={'#ffffff80'}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={setEmail}
            />
          </Animatable.View>

          <Animatable.View
            style={styles.inputView}
            animation='bounceInRight'
            //iterationCount={2}
            duration={2500}
          >
            <Icon
              size={30}
              color={'#ffffff80'}
              style={{ paddingTop: 12, paddingLeft: 10 }}
              name="lock"
            />
            <TextInput
              style={styles.inputText}
              placeholder="senha"
              autoCorrect={false}
              secureTextEntry={true}
              placeholderTextColor={'#ffffff80'}
              autoCapitalize="none"
              onChangeText={SetPassword}
            />
          </Animatable.View>
          <TouchableOpacity style={styles.button} onPress={() => handleSignin()}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
