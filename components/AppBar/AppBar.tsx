import { Text, View } from "react-native";
import { AppBarProps } from "./types";
import { AppBarStyles as styles } from "./styles";

export default function AppBar({ title }: AppBarProps) {
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>{ title }</Text>
        </View>
    );
}
