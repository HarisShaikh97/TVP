import { View, Image, StyleSheet } from "react-native"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"

export default function Page() {
    return (
        <AppScreensLayout title="Refer and Earn">
            <View style={styles.container}>
                <Image source={require("../../assets/images/coming-soon.png")} style={styles.backgroundImage} />
            </View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    backgroundImage: {
        height: 300,
        width: "90%"
    }
})