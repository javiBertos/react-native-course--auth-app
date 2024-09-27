import { KeyboardTypeOptions, TextInput } from "react-native";

export type AuthProps = {
    setAuthTitle: React.Dispatch<React.SetStateAction<string>>
};

export type InputForm = {
    propertyName: "name"|"email"|"password",
    placeholder: string,
    keyboardType?: KeyboardTypeOptions,
    secureTextEntry: boolean,
    ref?: React.MutableRefObject<TextInput | null>
}