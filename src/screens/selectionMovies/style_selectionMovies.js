import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 10,
    },
    header: {
        marginTop: 60,
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    text: {
        fontSize: 20,
        color: 'red',
        fontFamily: 'OpenSans-Regular',
    },
    containerRow: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 25,
        color: '#FFF',
        fontFamily: 'OpenSans-Regular',
    },
    label: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 25,
        color: '#E9A6A6',
        marginLeft: 3,
        fontFamily: 'OpenSans-Regular',
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 25,
        color: '#FFF',
        marginTop: 8,
        fontFamily: 'OpenSans-Regular',
    },
    popularMovies: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        marginTop: 30,
        marginBottom: 40,
        fontFamily: 'OpenSans-Regular',
    },
    containerCardMovies: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'blue'
    },
    section: {
        width: '100%',
        paddingHorizontal: 10,
    }
})

export default styles