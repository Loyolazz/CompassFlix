import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginEnd: 20,
    marginStart: 20,
    paddingStart: 13,
    height: 48,
    borderRadius: 5,
    borderBottomWidth: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  numTemporada: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginEnd: 4,
  },
  containerVisible: {
    backgroundColor: 'grey',
    marginEnd: 20,
    marginStart: 20,
    paddingStart: 13,
    height: 42,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
  textEp: {
    color: '#fff',
    fontSize: 15,
  },
  textNumTemp: {
    color: '#fff',
    fontSize: 12,
  }
});

export default styles;
