import React, {useEffect} from "react"
import { SafeAreaView, Image } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Lottie from 'lottie-react-native'
import styles from './styles'
import { useNavigation } from "@react-navigation/native"
import Slashlogin from '../../assets/svg/Slashlogin.json'

export default function SlapshLoadLogin() {
  const navigation = useNavigation()
  const handleLogin = () => {
    navigation.navigate('Login')
  }

  useEffect (()=>{
    setTimeout(() => {
      handleLogin();
    }, 2000)
  },[])

  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        source={require('../../assets/login_imagens/bannerLogin.png')}
        style={styles.banner}
      />
      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Lottie
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
          source={Slashlogin}
          autoPlay
          loop />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}