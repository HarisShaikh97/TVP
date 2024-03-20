import { TouchableOpacity, View, Image, StyleSheet } from "react-native"
import { usePathname, router } from "expo-router"
import PropTypes from "prop-types"

export default function CartButton({ color }) {

    const pathName = usePathname()

    if(pathName === "/cart") {
        return (
            <View style={styles.emptyView} />
        )
    }
    else {
        return (
            <TouchableOpacity style={[styles.cartButton, { borderColor: color }]} onPress={() => {router.navigate("/cart")}}>
                <View style={[styles.cartIconContainer, { backgroundColor: color }]}>
                    <Image source={require("../../assets/icons/cart.png")} style={styles.cartIcon} />
                </View>
            </TouchableOpacity>
        )
    }
}

CartButton.propTypes = {
    color: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    cartButton: {
        height: 32,
        width: 32,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    cartIconContainer: {
        height: 25,
        width: 25,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    cartIcon: {
        height: 18,
        width: 12
    },
    emptyView: {
        width: 32
    }
})