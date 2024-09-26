import { GestureResponderEvent, Pressable, Text, TextInput, View } from "react-native";
import { AuthProps } from "./types";
import { AuthStyles as styles } from "./styles";
import { useState } from "react";
import { User, users } from "../../store/users";

export default function Auth({ setAuthTitle }: AuthProps) {
    const [authData, setAuthData] = useState<User>({
        name: '',
        email: '',
        password: '',
    });

    const [isRegister, setIsRegister] = useState<boolean>(true);

    const handleTextInput = (text: string, type: string) => {
        setAuthData({
            ...authData,
            [type]: text,
        });
    };

    const handleResgisterPress = (e: GestureResponderEvent) => {
        users.push(authData);

        setAuthData({
            name: '',
            email: '',
            password: '',
        });

        setIsRegister(false);
        setAuthTitle("Login");
    };

    const handleLoginPress = (e: GestureResponderEvent) => {
        console.log('I\'m trying to log now...');
    };

    return (
        <View style={styles.authContainer}>
            {isRegister && (
                <TextInput
                    style={styles.input}
                    onChangeText={(t) => handleTextInput(t, 'name')}
                    value={authData.name}
                    placeholder="Tu nombre..."
                    placeholderTextColor={'#fff'}
                />
            )}
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'email')}
                value={authData.email}
                placeholder="Tu email..."
                placeholderTextColor={'#fff'}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={(t) => handleTextInput(t, 'password')}
                value={authData.password}
                placeholder="Tu password..."
                placeholderTextColor={'#fff'}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={(e) => isRegister ? handleResgisterPress(e) : handleResgisterPress(e)}>
                <Text style={styles.buttonText}>{ isRegister ? 'Register me!' : 'Log me in!' }</Text>
            </Pressable>
        </View>
    );
}
