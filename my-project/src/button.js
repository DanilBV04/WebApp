import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: '-50%',
        paddingLeft: '-30%',
        paddingRight: '30%',
        backgroundColor: 'orange',
    },

    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default style;