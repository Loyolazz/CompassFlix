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
    Icon: {

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