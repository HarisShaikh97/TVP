import { View, Text, StatusBar, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import BackButton from "../../back-button/BackButton"
import CartButton from "../../cart-button/CartButton"

export default function AppScreensHeader({ title }) {
    return (
        <View style={styles.headerContainer}>
            <BackButton />
            <Text style={styles.headerTitle}>{title}</Text>
            <CartButton color="#E35F21" />
        </View>
    )
}

AppScreensHeader.propTypes = {
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: StatusBar?.currentHeight || 0
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})