import { Text, View } from "react-native";
import { AppBarProps } from "./types";
import { AppBarStyles as styles } from "./styles";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

export default function AppBar({ title }: AppBarProps) {
    return (
        <SafeAreaInsetsContext.Consumer>
            {
                insets => (
                    <View style={[styles.appBar, { paddingTop: insets?.top }]}>
                        <Text style={styles.title}>{ title }</Text>
                    </View>
                )
            }   
        </SafeAreaInsetsContext.Consumer>
    );
}
