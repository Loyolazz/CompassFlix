import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  banner: {
    width: Dimensions.get('window').width, 
    height:410,
    marginTop:-40,
  },
  logo: {
    alignSelf: 'center',
    position: 'absolute',
    top: '25%',
  },
  textContainer: {
    position: 'absolute',
    top: '45%',
    alignSelf: 'center',
    marginBottom:30
  },
  text: {
    color: '#fff',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    alignSelf: 'center',
    paddingBottom: 8,
    paddingTop:30
  },
  descriptionText: {
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    alignSelf: 'center',
    paddingBottom: 28,
  },
  inputView: {
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    width: '75%',
    borderRadius: 30,
    marginBottom: 14,
    flexDirection: 'row',
    height:40,
    
  },
  ViewInput:{  
    alignItems:'center',
    marginTop:10,
    marginBottom:10
  },
  inputText: {
    width: '100%',
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
    marginTop:20,
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    color: '#1F1D36',
    fontSize: 14,
    fontWeight: 'bold',
  },

});
export default styles;
