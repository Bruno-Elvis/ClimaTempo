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
        flex: 0.6,
        backgroundColor: '#444',
        borderRadius: 8,
        alignItems: 'center',
        padding: 10,
        gap: 10,

    },

    predictContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 10,
        gap: 10,
    },

    todayContainer: {
        flex: 1,
        backgroundColor: '#0400ff',
        borderRadius: 8,
    },

    tomorrowContainer: {
        flex: 1,
        backgroundColor: '#1eff00',
        borderRadius: 8,
    },

    labelInfo: {
        flexDirection: 'row',
        gap: 10,

    },

});
