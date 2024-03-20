import { SafeAreaView, View, Text, StatusBar, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import BackButton from "../../back-button/BackButton"

export default function OrderProcessScreensLayout({ children, title }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton />
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={styles.bodyContainer}>{children}</View>
        </SafeAreaView>
    )
}

OrderProcessScreensLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        gap: 25,
        alignItems: "center",
        backgroundColor: "#181818",
        paddingTop: StatusBar?.currentHeight || 0
    },
    headerContainer: {
        width: "90%",
        gap:15
    },
    headerTitle: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
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