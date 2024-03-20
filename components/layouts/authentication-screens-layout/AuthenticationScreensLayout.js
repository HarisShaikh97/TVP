import { SafeAreaView, View, Text, Image, StatusBar, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import BackButton from "../../back-button/BackButton"

export default function AuthenticationScreensLayout({ children, title }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Image source={require("../../../assets/logo/tvp-logo2.png")} style={styles.logo} />
                <View />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{title}</Text>
            </View>
            <View style={styles.bodyContainer}>{children}</View>
        </SafeAreaView>
    )
}

AuthenticationScreensLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#181818",
        paddingTop: StatusBar?.currentHeight || 0
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 25
    },
    logo: {
        height: 100,
        width: 250
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        width: 300
    },
    headingContainer: {
        width: "100%",
        padding: 25
    },
    bodyContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "95%",
        backgroundColor: "white",
        marginVertical: 15,
        borderRadius: 15
    }
})