import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        marginTop: StatusBar.currentHeight - 24,
        flex: 1,
        backgroundColor: 'black',

    },

    mainContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        margin: 10,
        gap: 10,
        borderRadius: 8,

    },

    currentContainer: {
        flex: 0.7,
        backgroundColor: '#444',
        borderRadius: 8,
        alignItems: 'center',
        padding: 10,
        gap: 10,

    },

    predictContainer: {
        flex: 1,
        backgroundColor: '#444',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 10,
        gap: 10,
    },

    todayContainer: {
        flex: 1,
        backgroundColor: '#333',
        borderRadius: 8,
        paddingTop: 10,

    },

    tomorrowContainer: {
        flex: 1,
        backgroundColor: '#333',
        borderRadius: 8,
        paddingTop: 10,

    },

    labelInfo: {
        flexDirection: 'row',
        gap: 10,

    },

    labelPredict: {
        alignContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',

    },

    predictTempIcons: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 50,
        top: 10,

    },

    predictTempData: {
        top: 10,
        alignItems: 'center',

    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },

    modalContainer: {
        top: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#333',
        width: 250,
        height: 100,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'black',

    },

});
