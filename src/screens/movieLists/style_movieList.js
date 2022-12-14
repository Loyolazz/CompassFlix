import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ContainerTop: {
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    ContainerButtonSandM: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        width: 120,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderEndWidth: 1,
        borderRadius: 20,
        borderColor: '#E9A6A6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BorderButton: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewEyeIconOne: {
        width: 65,
        height: 40,
        backgroundColor: '#E9A6A6',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewEyeIconTwo: {
        width: 65,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewPencilIconOne: {
        width: 60,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#E9A6A6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewPencilIconTwo: {
        width: 65,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextName: {
        color: '#E9A6A6',
        paddingTop: 40,
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        lineHeight: 28.24
    },
    TextDescp: {
        color: '#FFFFFF',
        paddingTop: 20,
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 15,
        marginStart: 16,
        right: 5,
        textAlign: 'justify',
        lineHeight: 15,
    },
    ViewPreFlat: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginBottom: 10,
        flex:1,
        paddingHorizontal:20,
    },
    ViewInFlat: {
        width: 95,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',                
    },
    ViewOrganizationOff: {
        justifyContent: 'space-between',
        width: 95,
        marginTop: 15,
        alignItems: 'center',
    },
    ViewOrganizationOn: {
        justifyContent: 'space-between',
        width: 95,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextEmpty: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 25,
        color: 'white',
        paddingTop: 30,
    },
    TouchableButton: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    Button: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 76,
        height: 95,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
})