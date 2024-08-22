import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    buttonWrapper: {
        overflow: 'hidden',
        borderRadius: 8,

    },

    button: {
        backgroundColor: '#222',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,

    },

    buttonDisabled: {
        backgroundColor: '#ccc',

    },

    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',

    },

    buttonLabelDisabled: {
        color: '#888',
        fontWeight: 'bold',

    },


});
