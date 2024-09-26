import { GestureResponderEvent, Pressable, Text, TextInput, View } from "react-native";
import { RegisterProps } from "./types";
import { RegisterStyles as styles } from "./styles";
import { useState } from "react";
import { User, users } from "../../store/users";

export default function Register() {
    const [registerData, setRegisterData] = useState<User>({
        name: '',
        email: '',
        password: '',
    });

    const handleTextInput = (text: string, type: string) => {
        setRegisterData({
            ...registerData,
            [type]: text,
        });
    };

    const handleResgisterPress = (e: GestureResponderEvent) => {
        users.push(registerData);
        
        setRegisterData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <View style={styles.signUpContainer}>
            <Text style={styles.signUpTitle }>Register</Text>
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'name')}
                value={registerData.name}
                placeholder="Tu nombre..."
                placeholderTextColor={'#fff'}
            />
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'email')}
                value={registerData.email}
                placeholder="Tu email..."
                placeholderTextColor={'#fff'}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'password')}
                value={registerData.password}
                placeholder="Tu password..."
                placeholderTextColor={'#fff'}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleResgisterPress}>
                <Text style={styles.buttonText}>Register me!</Text>
            </Pressable>
        </View>
    );
}
