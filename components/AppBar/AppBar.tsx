import { Text, View } from "react-native";
import { AppBarStyles as styles } from "./styles";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { useContext } from "react";
import GlobalContext from "../../context/global";

export default function AppBar() {
    const { authTitle } = useContext(GlobalContext);

    return (
        <SafeAreaInsetsContext.Consumer>
            {
                insets => (
                    <View style={[styles.appBar, { paddingTop: insets?.top }]}>
                        <Text style={styles.title}>{ authTitle }</Text>
                    </View>
                )
            }   
        </SafeAreaInsetsContext.Consumer>
    );
}
