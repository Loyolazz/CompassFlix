import React, {useState, useEffect, useContext} from 'react';
import {
  KeyboardAvoidingView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './style_login';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../context';

import {getToken, validateToken} from '../../services/api';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const {setId} = useContext(Context);


  const validadeUser = "^ [A-Za-z] \\ w {5, 29} $"

  useEffect(() => {
    const getResponseToken = async () => {
      const response = await getToken();
      setToken(response.data.request_token);
    };
    getResponseToken();
  }, []);

  const handleSignin = async () => {

    if(!email || !password) {
      Alert.alert('Atenção', 'Preencha todos os campos');
    } 

    if (email && password !== '') {
      const response = await validateToken(email, password, token);
      if (response) {
        const session_id = response.data.session_id;
        setId(session_id)
        navigation.replace('TabBottomRoutes');
      }
    } else {
      console.log('error');
    }
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require('../../assets/login_imagens/bannerLogin.png')}
        style={styles.banner}
      />
      <Image
        source={require('../../assets/login_imagens/logo.png')}
        style={styles.logo}
      />

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.loginText]}>Login</Text>
        <Text style={[styles.text, styles.descriptionText]}>
          Entre na sua conta para continuar.
        </Text>
        <View style={styles.inputView}>
          <Icon
            size={25}
            color={'#ffffff80'}
            style={{paddingTop: 15, paddingLeft: 10}}
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
        </View>

        <View style={styles.inputView}>
          <Icon
            size={30}
            color={'#ffffff80'}
            style={{paddingTop: 12, paddingLeft: 10}}
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
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
