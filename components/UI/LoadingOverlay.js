import { ActivityIndicator, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function LoadingOverlay() {
    return (
        <View style={styles.ctn}>
            <ActivityIndicator size="large" color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    ctn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});

export default LoadingOverlay;
