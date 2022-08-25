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
import Eye from '../../../node_modules/react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './style_login';
import Load from '../../Components/Load';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../context';

import {getToken, validateToken} from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureTextEntryIcon, setSecureTextEntryIcon] = useState(true);
  const [token, setToken] = useState();
  const {setSessionId} = useContext(Context);
  const [error, setError] = useState(false);


  useEffect(() => {
    const getResponseToken = async () => {
      const response = await getToken();
      setToken(response.data.request_token);
    };
    getResponseToken();
  }, []);


  const handleSignin = async () => {
    if (!email || !password) {
      Alert.alert('Atenção!', 'Preencha todos os campos')
    }

    

    if (email && password !== '') {
      const response = await validateToken(email, password, token);
  
        const session_id = response.data.session_id;
        setSessionId(session_id);
        navigation.replace('TabBottomRoutes');
      
    } else {
      console.log('error');
      setLoading(false);
    }
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require('../../assets/login_imagens/bannerLogin.png')}
        style={styles.banner}
      />
      <Animatable.Image
        animation="zoomInUp"
        duration={1000}
        source={require('../../assets/login_imagens/logo.png')}
        style={styles.logo}
      />

      <View style={styles.textContainer}>
        <Animatable.Text
          animation="fadeInUp"
          duration={1000}
          style={[styles.text, styles.loginText]}>
          Login
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInUp"
          duration={1000}
          style={[styles.text, styles.descriptionText]}>
          Entre na sua conta para continuar.
        </Animatable.Text>



       {/* {  loading ? <Load load={loading} /> : */}



       
       <View style={styles.ViewInput}>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={styles.inputView}>
            <Icon
              size={25}
              color={'#ffffff80'}
              style={{paddingTop: 10, paddingLeft: 10}}
              name="user"
            />
            <TextInput
              style={styles.inputText}
              placeholder="usuário"
              autoCorrect={false}
              placeholderTextColor={'#ffffff80'}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={setEmail}
            />
          </Animatable.View>

          <Animatable.View
            animation="fadeInRight"
            duration={1000}
            style={styles.inputView}>
            <Icon
              size={30}
              color={'#ffffff80'}
              style={{paddingTop: 10, paddingLeft: 10}}
              name="lock"
            />
            <TextInput
              style={styles.inputText}
              placeholder="senha"
              autoCorrect={false}
              value={secureTextEntryIcon}
              secureTextEntry={secureTextEntryIcon}
              placeholderTextColor={'#ffffff80'}
              autoCapitalize="none"
              onChangeText={value => SetPassword(value)}
            />

        

            <View style={{position: 'absolute', marginLeft: 230, marginTop: 8}}>
              <TouchableOpacity
                onPress={() => setSecureTextEntryIcon(!secureTextEntryIcon)}>
                {secureTextEntryIcon == true ? (
                  <Eye name="eye-with-line" color={'#ffffff80'} size={23} />
                ) : (
                  <Eye name="eye" color={'#ffffff80'} size={23} />
                )}
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
