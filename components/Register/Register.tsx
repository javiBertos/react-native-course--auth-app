import { GestureResponderEvent, Pressable, Text, TextInput, View } from "react-native";
import { RegisterProps } from "./types";
import { RegisterStyles as styles } from "./styles";
import { useState } from "react";

export default function Register() {
    const [registerData, setRegisterData] = useState({});

    const handleTextInput = (text: string, type: string) => {
        console.log([text, type])
        setRegisterData({
            ...registerData,
            [type]: text,
        });
    };

    const onRegisterPress = (e: GestureResponderEvent) => {
        console.log(e.type);

        console.log(registerData);
    };

    return (
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpTitle }>Register</Text>
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'name')}
                placeholder="Tu nombre..."
                placeholderTextColor={'#fff'}
            />
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'email')}
                placeholder="Tu email..."
                placeholderTextColor={'#fff'}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'password')}
                placeholder="Tu password..."
                placeholderTextColor={'#fff'}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={onRegisterPress}>
                <Text style={styles.buttonText}>Register me!</Text>
            </Pressable>
        </View>
    );
}
