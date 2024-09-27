import { Alert, GestureResponderEvent, Linking, Pressable, Text, TextInput, View } from "react-native";
import { AuthProps, InputForm } from "./types";
import { AuthStyles as styles } from "./styles";
import { useEffect, useState } from "react";
import { User, users } from "../../store/users";

export default function Auth({ setAuthTitle }: AuthProps) {
    const [authData, setAuthData] = useState<User>({
        name: '',
        email: '',
        password: '',
    });

    const [authStatus, setAuthStatus] = useState<"register"|"login"|"logged">("register");

    const formDefinitions: InputForm[] = [
        {
            propertyName: "name",
            placeholder: "Your name...",
            secureTextEntry: false
        },
        {
            propertyName: "email",
            placeholder: "Your email...",
            keyboardType: "email-address",
            secureTextEntry: false
        },
        {
            propertyName: "password",
            placeholder: "Your password...",
            secureTextEntry: true
        },
    ];

    useEffect(() => {
        setAuthTitle(authStatus == "register" ? "Register" : (authStatus == "logged" ? "Logged" : "Login"));
    });

    const handleTextInput = (text: string, type: string) => {
        setAuthData({
            ...authData,
            [type]: text,
        });
    };

    const getUserByEmail = (searchEmail: string): User|null => {
        return users.find(({email}) => email == searchEmail) ?? null;
    }

    const handleResgisterPress = (e: GestureResponderEvent) => {
        users.push(authData);

        setAuthData({
            name: '',
            email: '',
            password: '',
        });

        setAuthStatus("login");
    };

    const handleLoginPress = (e: GestureResponderEvent) => {
        const user = getUserByEmail(authData.email);

        if (user && user.password == authData.password) {
            setAuthData(user);
            setAuthStatus("logged");
        } else {
            Alert.alert('Wrong login...', "The credentials you are using doesn't match any valid user");
        }
    };

    const handleLogoutPress = (e: GestureResponderEvent) => {
        Alert.alert('Logging out...', 'Shall I close your session, dude? (like if you had any... XD)', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Sure!',
                onPress: () => {
                    setAuthData({
                        name: '',
                        email: '',
                        password: '',
                    });
                    setAuthStatus("register");
                }
            },
        ]);
    };

    return (
        <View style={styles.authContainer}>
            {
                formDefinitions.map(formElement => {
                    if (authStatus == "register" && formElement.propertyName == "name" || authStatus != "logged" && formElement.propertyName != "name") {
                        return (
                            <TextInput
                                key={formElement.propertyName}
                                style={styles.input}
                                onChangeText={(t) => handleTextInput(t, formElement.propertyName)}
                                value={authData[formElement.propertyName]}
                                placeholder={formElement.placeholder}
                                placeholderTextColor={'#fff'}
                                keyboardType={formElement.keyboardType}
                                secureTextEntry={formElement.secureTextEntry}
                            />
                        );
                    }
                })
            }
            {authStatus != "logged" && (
                <Pressable style={styles.button} onPress={(e) => authStatus == "register" ? handleResgisterPress(e) : handleLoginPress(e)}>
                    <Text style={styles.buttonText}>{ authStatus == "register" ? 'Register me!' : 'Log me in!' }</Text>
                </Pressable>
            )}
            {authStatus == "logged" && (
                <View>
                    <Text style={styles.loggedData}>Hello, <Text style={styles.loggedDataValues}>{authData.name}</Text>!</Text>
                    <Text style={styles.loggedData}>
                        Your email is, <Text style={styles.loggedDataLink} onPress={() => Linking.openURL(`mailto:${authData.email}`)}>{authData.email}</Text>
                    </Text>
                    <Text style={styles.loggedData}>And your password is...</Text>
                    <Text style={styles.loggedDataValues}>{authData.password.replace(/./gi, '*')} Obviously hidden!!!</Text>

                    <Pressable style={styles.logOutButton} onPress={handleLogoutPress}>
                        <Text style={styles.buttonText}>Log out!</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}
