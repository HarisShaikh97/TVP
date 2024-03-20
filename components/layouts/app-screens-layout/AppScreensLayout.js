import { SafeAreaView, View, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import AppScreensHeader from "../app-screens-header/AppScreensHeader"

export default function AppScreensLayout({ children, title }) {
    return (
        <SafeAreaView style={styles.container}>
            <AppScreensHeader title={title} />
            <View style={styles.bodyContainer}>{children}</View>
        </SafeAreaView>
    )
}

AppScreensLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        gap: 25,
        alignItems: "center",
        backgroundColor: "#181818"
    },
    bodyContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "95%",
        backgroundColor: "white",
        marginBottom: 15,
        borderRadius: 15
    }
})