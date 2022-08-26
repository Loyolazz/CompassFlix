import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  logoBackground: {
    width: '100%',
    height: 189,
    justifyContent: 'center',
  },
  btnGoBack: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 130,
  },

  flex2_5: {
    flex: 2.5,
  },
  dropDownMenu: {
    marginVertical: 2,
    top: 10,
    marginLeft: 18.17,
    width: '90%',
    height: 42,
    backgroundColor: '#838787',
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textDroDown: {
    fontSize: 14,
    top: 9,
    marginLeft: 5,
    color: '#ffff',
  },
  areButtonDrop: {
    flex: 3,
    width: '100%',
  },
  iconDrop: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
  },
  ButtonAvaluete: {
    backgroundColor: '#E9A6A6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    height: 22,
    marginLeft: 20,
    marginTop: -4,
  },
  textModal: {
    fontSize: 10,
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  ButtonAvalueteOk: {
    backgroundColor: '#8BE0EC',
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    height: 22,
    marginLeft: 20,
    marginTop: -4,
  },
  textModalOk: {
    fontSize: 10,
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  iconPincel: {
    position: 'absolute',
    top: -4,
    right: -4,
    padding: 1,
    borderRadius: 30,
    backgroundColor: '#C4C4C4',
  },
});

export default styles;
