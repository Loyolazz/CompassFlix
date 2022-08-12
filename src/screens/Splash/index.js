import React from 'react';
import {View, Image} from 'react-native';

import LottieView from 'lottie-react-native';
import logo from '../../assets/login_imagens/logo.png';

export function Splash({navigation}) {
  const FinashSplach = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Image source={logo} style={{}} />
      <LottieView
        source={require('../../assets/splach.json')}
        autoPlay
        loop={false}
        speed={3.5}
        autoSize={true}
        style={{height: 250}}
        onAnimationFinish={() => FinashSplach()}
      />
    </View>
  );
}
