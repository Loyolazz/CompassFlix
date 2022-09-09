import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
        paddingHorizontal:12,
      
    },
    viewTitle:{
        width:'100%', 
        height:60, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:30
    },
    txtTitle:{
        color:'#fff', 
        fontSize:25, 
        fontWeight:'bold',
        fontFamily: 'OpenSans-Regular',
    },
    footerBtnCreateList:{
        width:'100%', 
        position:'absolute',
        justifyContent:'flex-end', 
        alignItems:'flex-end', 
        height:'95%',
        flexDirection:'column',
        flex:1,
  
    },
    mainList:{
        width:'100%', 
        height:'100%', 
        justifyContent:'flex-start', 
        alignItems:'center', 
        marginTop:30,
        flex:1,

    },
    containerMyList:{
        backgroundColor: '#fff', 
        width: 330, 
        height: 170, 
        borderRadius: 20, 
        marginHorizontal: '10%', 
        marginVertical: '80%', 
        alignItems: 'center',
    },
    viewTitle:{
        width: '100%', 
        alignItems: 'center', 
        marginTop: 10 
    },
    title:{
        color: '#000', 
        fontWeight: 'bold', 
        fontFamily: 'OpenSans-Regular',
    },
    containerModal:{
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 100 
    },
    containerTextInput:{
        width: '90%', 
        height: "85%", 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 6 
    },
    styleInpuListName:{
        backgroundColor: '#d7d8d7', 
        width: 280, 
        height: 35, 
        borderRadius: 5, 
        fontSize: 12, 
        justifyContent: 'flex-end',
        color: '#000000',
        marginBottom: 5,
        fontFamily: 'OpenSans-Regular',
    },
    styleInpuListInput:{
        backgroundColor: '#d7d8d7', 
        width: 280, height: 50, 
        borderRadius: 5, 
        fontSize: 12,
        color: '#000000',
        fontFamily: 'OpenSans-Regular',
    },
    containerBtnModal:{
        width: '60%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 6
    },
    btnCancel:{
        borderWidth: 1, 
        borderColor: '#000', 
        width: 80, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5 
    },
    textCancel:{
        color: '#000', 
        fontSize: 12, 
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
    },
    btnSave:{
        backgroundColor: '#000', 
        width: 80, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5
    },
    textSave:{
        color: '#fff', 
        fontSize: 12, 
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular', 
    },
    btnCreatList:{
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        backgroundColor: 'pink', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    viewCardList:{
        width: '90%', 
        backgroundColor: '#8F9AFC', 
        height: 100, 
        borderRadius: 10, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row' 
    },
    styleCard:{
        width: '80%', 
        height: '80%',
        paddingHorizontal: 10, 
        justifyContent: 'space-between' 
    }, 
    viewTrash:{
        height: 100, 
        backgroundColor: '#E9A6A6', 
        borderTopRightRadius: 10, 
        borderBottomRightRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})