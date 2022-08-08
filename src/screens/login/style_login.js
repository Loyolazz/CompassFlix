import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  banner: {
    width: '100%',
    flex: 0.5,
  },
  logo: {
    alignSelf: 'center',
    position: 'absolute',
    top: '30%',
  },
  textContainer: {
    position: 'absolute',
    top: '55%',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  descriptionText: {
    fontSize: 13,
    alignSelf: 'center',
    paddingBottom: 28,
  },
  inputView: {
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    width: 243,
    borderRadius: 30,
    marginBottom: 14,
    flexDirection: 'row',
  },
  inputText: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffffff80',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#E9A6A6',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    color: '#1F1D36',
    fontSize: 14,
    fontWeight: 'bold',
  },

});
export default styles;