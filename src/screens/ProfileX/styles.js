import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  buttonExit: {
    width: 59,
    height: 19,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginEnd: 32,
    marginTop: 30,
    backgroundColor: '#E9A6A6',
    borderRadius: 7,
  },
  textExit: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -3,
  },
  containerPhotoUser: {
    marginTop: 13,
    alignItems: 'center',
  },
  photoUser: {
    width: 78,
    height: 78,
    borderRadius: 100,
  },
  nameUser: {
    color: 'white',
    fontWeight: 'bold',
  },
  containerMain: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  containerMain2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 120,

  },
  textVerAll: {
    fontSize: 10,
    lineHeight: 12.26,
    color: '#E9A6A6',
  },
  textInfo: {
    fontSize: 11,
    lineHeight: 13.62,
    color: 'white',
    fontWeight: '600',
  },
  containerTotalResults: {
    alignItems: 'center',
    marginTop: 46,
    height: 54,
  },
  totalAvaluation: {
    color: '#9C4A8B',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    right: 2,
  },
  textAvaliacao: {
    color: 'white',
    fontSize: 11,
    lineHeight: 15,
  },
  containerButtonSandM: {
    flexDirection: 'row',
    paddingTop: 22,
  },
  borderButton: {
    width: '50%',
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderEndWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonMidia: {
    width: 28,
    height: 28,
  },
  containerMovieFavorites: {
    height: 119,
    justifyContent: 'space-between',
    width:'100%',
    alignItems:'center'
  },
  containerEvaluation: {
    height: 129,
    justifyContent: 'space-between',
    width:'100%',
    alignItems:'center',
    marginTop:10,
  },
  listMidiaFavorites: {
    width: 67,
    height: 89,
    borderRadius: 7,
    marginEnd: 12,
  },
  containerRow: {
    width: '100%',
    backgroundColor: 'grey',
    height: 0.1,
    marginTop: 20,
    
  },
  containerRow2: {
    width: '100%',
    height: 30,
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20
  },
});

export default styles;
