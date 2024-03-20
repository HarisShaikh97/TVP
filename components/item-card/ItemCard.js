import { useState, useEffect } from "react"
import { TouchableWithoutFeedback, TouchableOpacity, View, ImageBackground, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import PropTypes from "prop-types"
import { AntDesign } from "@expo/vector-icons"

export default function ItemCard({ id, name, price, favourite }) {

    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
        setIsFavourite(favourite)
    }, [id])

    return (
        <View style={styles.itemContainer}>
            <ImageBackground source={require("../../assets/images/item1.png")} style={styles.itemImage}>
                <TouchableOpacity onPress={() => {setIsFavourite(!isFavourite)}}>
                    <AntDesign name={isFavourite ? "heart" : "hearto"} size={15} color={isFavourite ? "red" : "black"} />
                </TouchableOpacity>
            </ImageBackground>
            <TouchableWithoutFeedback onPress={() => {router.navigate(`/item/${id}`)}}>
                <View style={styles.touchableContainer}>
                    <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
                    <Text style={styles.itemPrice}>$ {price}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

ItemCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    favourite: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 150,
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        marginVertical: 10
    },
    touchableContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 10
    },
    itemImage: {
        height: 85,
        width: "100%",
        alignItems: "flex-end"
    },
    itemName: {
        fontSize: 12,
        fontWeight: "bold"
    },
    itemPrice: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#E35F21"
    }
})