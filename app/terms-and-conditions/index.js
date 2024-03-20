import { View, StyleSheet } from "react-native"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"

export default function Page() {
    return (
        <AppScreensLayout title="Terms & Conditions">
            <View style={styles.container}></View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})