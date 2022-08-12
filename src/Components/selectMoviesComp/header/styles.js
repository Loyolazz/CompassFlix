import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   
    header: {
        marginTop: 50,
        alignItems:'flex-start',
        marginHorizontal:10,
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
    popularMovies: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        marginTop: 30,
        marginBottom: 40
    }
})

export default styles