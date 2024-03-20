import { View, Text, Image, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function OrderItem({id, name, date, amount}) {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.orderDetailsContainer}>
                <Image source={require("../../assets/icons/receipt.png")} style={styles.orderImage} />
                <View style={styles.orderDetailsWrapper}>
                    <View style={styles.orderDateContainer}>
                        <Text style={styles.orderText}>Order</Text>
                        <Text style={styles.orderDetailsText}>{date}</Text>
                    </View>
                    <Text style={styles.orderDetailsText}>{name}</Text>
                </View>
            </View>
            <Text style={styles.orderAmountText}>$ {amount}</Text>
        </View>
    )
}

OrderItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    listItemContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    orderDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    orderDetailsWrapper: {
        flexDirection: "column"
    },
    orderDateContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    orderText: {
        fontWeight: "bold",
        color: "#E35F21"
    },
    orderDetailsText: {
        color: "gray"
    },
    orderImage: {
        height: 18,
        width: 18
    },
    orderAmountText: {
        fontSize: 15,
        fontWeight: "600"
    }
})