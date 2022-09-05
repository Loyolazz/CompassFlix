import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   
    header: {
        marginTop: 20,
        alignItems:'flex-start',
        paddingHorizontal:10,
    },
    text: {
        fontSize: 20,
        color: 'red'
    },
    containerRow: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 25,
        color: '#FFF'
    },
    label: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 25,
        color: '#E9A6A6',
        marginLeft: 3,
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 25,
        color: '#FFF',
        marginTop: 8
    },
    popularSeries: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        marginTop: 30,
        marginBottom: 40
    },
    viewNameUser:{
        width:'100%', 
        justifyContent:'space-between', 
        flexDirection:'row'
    },
    containerNameUser:{
        width: '100%', 
        marginHorizontal: 20, 
        alignItems: 'flex-start'
   },
   containerText:{
    flexDirection: 'row', 
    justifyContent: 'center'
   },
   viewPhoto:{
    width: '100%', 
    alignItems: 'flex-end' 
   },
   stylePhoto:{
    width: 50, 
    height: 50, 
    borderRadius: 60
   }
})

export default styles