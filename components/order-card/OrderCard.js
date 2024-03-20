import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function OrderCard({ id, item_name, date_time, price }) {
    return (
        <TouchableOpacity style={styles.orderContainer}>
            <View style={styles.orderImagesWrapper}>
                <View style={[styles.itemImageContainerStyles, styles.firstItemImageContainerPosition]}>
                    <Image source={require("../../assets/images/item1.png")} style={styles.itemImage} resizeMode="cover" />
                </View>
                <View style={[styles.itemImageContainerStyles, styles.secondItemImageContainerPosition]}>
                    <Image source={require("../../assets/images/item1.png")} style={styles.itemImage} resizeMode="cover" />
                </View>
                <View style={[styles.itemImageContainerStyles, styles.thirdItemImageContainerPosition]}>
                    <Image source={require("../../assets/images/item1.png")} style={styles.itemImage} resizeMode="cover" />
                </View>
            </View>
            <Text style={styles.itemName}>{item_name}</Text>
            <View style={styles.priceAndDateContainer}>
                <Text style={styles.dateAndTimeText}>{date_time}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>$ {price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

OrderCard.propTypes = {
    id: PropTypes.number.isRequired,
    item_name: PropTypes.string.isRequired,
    date_time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    orderContainer: {
        width: "90%",
        height: 115,
        backgroundColor: "#181818",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    orderImagesWrapper: {
        width: 115,
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    itemImageContainerStyles: {
        height: 50,
        width: 50,
        position: "absolute",
        top: -25,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#E35F21",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    firstItemImageContainerPosition: {
        left: 0,
        zIndex: 3
    },
    secondItemImageContainerPosition: {
        left: "50%",
        transform: [{ translateX: -25 }],
        zIndex: 2
    },
    thirdItemImageContainerPosition: {
        right: 0,
        zIndex: 1
    },
    itemImage: {
        height: 35,
        width: 35,
        overflow: "visible"
    },
    itemName: {
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "white",
        width: 75
    },
    priceAndDateContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 5
    },
    dateAndTimeText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white"
    },
    priceContainer: {
        height: 25,
        width: 65,
        borderRadius: 7.5,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    priceText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#E35F21"
    }
})