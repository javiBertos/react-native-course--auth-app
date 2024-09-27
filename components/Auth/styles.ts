import { StyleSheet } from "react-native";

export const AuthStyles = StyleSheet.create({
    authContainer: {
        width: 300,
        height: 'auto',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        backgroundColor: '#2196F3',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '100%',
        color: '#fff',
        fontSize: 20,
        borderColor: '#fff',
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 50,
        margin: 12,
        padding: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    logOutButton: {
        backgroundColor: '#912a2a',
        borderRadius: 50,
        margin: 12,
        padding: 20,
    },
    loggedData: {
        fontSize: 20,
        margin: 5,
    },
    loggedDataValues: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    loggedDataLink: {
        color: '#0f60a3',
        fontWeight: 'bold',
    },
});