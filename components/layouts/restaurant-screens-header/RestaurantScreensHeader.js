import { View, StyleSheet } from "react-native"
import BackButton from "../../back-button/BackButton"
import CartButton from "../../cart-button/CartButton"

export default function RestaurantScreensHeader() {
    return (
        <View style={styles.header}>
            <BackButton />
            <CartButton color="#E35F21" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})