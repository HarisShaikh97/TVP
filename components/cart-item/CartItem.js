import { useState } from "react"
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import { Entypo } from "@expo/vector-icons"

export default function CartItem({image, itemName, itemPrice, variations, quantity}) {
    
    const [currentQuantity, setCurrentQuantity] = useState(quantity)

    return (
        <View style={styles.cartItemContainer}>
            <TouchableOpacity style={styles.removeItemButton}>
                <Entypo name="cross" size={15} color="black" />
            </TouchableOpacity>
            <View style={styles.itemDetailsWrapper}>
                <Image source={image} style={styles.itemImage} />
                <View style={styles.itemDetailsContainer}>
                    <View style={styles.namePriceRow}>
                        <Text style={styles.itemNameText}>{itemName}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.itemPriceText}>$ {itemPrice}</Text>
                        </View>
                    </View>
                    {variations?.map((variation, key) => {
                            return (
                                <View style={styles.namePriceRow} key={key}>
                                    <Text style={styles.itemVariationText}>{variation?.name}</Text>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.itemVariationText}>$ {variation?.price}</Text>
                                    </View>
                                </View>
                            )
                    })}
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.addRemoveButton} onPress={() => {currentQuantity > 1 && setCurrentQuantity(currentQuantity-1)}}>
                            <Entypo name="minus" size={12} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{currentQuantity}</Text>
                        <TouchableOpacity style={styles.addRemoveButton} onPress={() => {setCurrentQuantity(currentQuantity + 1)}}>
                            <Entypo name="plus" size={12} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.dashedLineContainer}>
                {new Array(40).fill(null).map((_, key) => {
                    return (
                        <View style={styles.dash} key={key} />
                    )
                })}
            </View>
        </View>
    )
}

CartItem.propTypes = {
    image: PropTypes.node.isRequired,
    itemName: PropTypes.string.isRequired,
    itemPrice: PropTypes.string.isRequired,
    variations: PropTypes.array.isRequired,
    quantity: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    cartItemContainer: {
        width: "100%",
        flexDirection: "column",
        paddingTop: 10
    },
    removeItemButton: {
        alignSelf: "flex-end"
    },
    itemDetailsWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemImage: {
        height: 75,
        width: "25%",
        borderRadius: 10
    },
    itemDetailsContainer: {
        width: "70%",
        flexDirection: "column",
        gap: 7.5
    },
    namePriceRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    priceContainer: {
        width: 75,
        alignItems: "center"
    },
    itemNameText: {
        fontSize: 20,
        fontWeight: "600"
    },
    itemPriceText: {
        fontSize: 15,
        fontWeight: "600",
        opacity: 0.7
    },
    itemVariationText: {
        fontSize: 12,
        opacity: 0.7
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7.5
    },
    quantityText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    addRemoveButton: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    dashedLineContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    dash: {
        height: 2.5,
        width: "2%",
        backgroundColor: "#E35F21",
        opacity: 0.5
    }
})