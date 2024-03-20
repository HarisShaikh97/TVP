import { TouchableOpacity, View, Text, Image, ImageBackground, StyleSheet } from "react-native"
import { router } from "expo-router"
import PropTypes from "prop-types"

export default function RestaurantCard({ id, name, type, delivery_time, delivery_fee, discount, cover, logo }) {
    return (
        <TouchableOpacity style={styles.restaurantContainer} onPress={() => {router.navigate(`/restaurant/${id}`)}}>
            <ImageBackground source={cover} style={styles.restaurantCoverImage}>
                <View style={styles.restaurantLogoContainer}>
                    <Image source={logo} style={styles.restaurantLogo} />
                </View>
                <View style={styles.deliveryTimeContainer}>
                    <Text style={styles.deliveryTimeText}>{delivery_time} min</Text>
                </View>
                <View style={styles.restaurantLabel}>
                    <Text style={styles.restaurantLabelText}>Food Fast Deals</Text>
                </View>
                {discount > 0 && (
                    <View style={styles.discountLabel}>
                        <Text style={styles.discountLabelText}>{discount}% OFF</Text>
                    </View>
                )}
            </ImageBackground>
            <View style={styles.restaurantDetailsContainer}>
                <Text style={styles.restaurantName}>{name}</Text>
                <Text style={styles.restaurantType}>{type}</Text>
                <Text style={styles.restaurantDeliveryFee}>$ {delivery_fee} delivery fee</Text>
            </View>
        </TouchableOpacity>
    )
}

RestaurantCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    delivery_time: PropTypes.number.isRequired,
    delivery_fee: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    cover: PropTypes.any.isRequired,
    logo: PropTypes.any.isRequired
}

const styles = StyleSheet.create({
    restaurantContainer: {
        height: 175,
        width: 115,
        borderRadius: 10,
        flexDirection: "column",
        overflow: "hidden"
    },
    restaurantCoverImage: {
        height: 75,
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: "cover",
        flexDirection: "column",
        position: "relative"
    },
    restaurantLogoContainer: {
        height: 55,
        width: 55,
        position: "absolute",
        left: "50%",
        bottom: -27.5,
        marginLeft: -27.5,
        borderRadius: 30,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    restaurantLogo: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    deliveryTimeContainer: {
        height: 12,
        width: 35,
        borderRadius: 6,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginRight: 5,
        marginTop: 5
    },
    deliveryTimeText: {
        fontSize: 7.5,
        fontWeight: "bold"
    },
    restaurantLabel: {
        height: 15,
        width: 70,
        backgroundColor: "#13783B",
        borderBottomRightRadius: 2.5,
        borderTopRightRadius: 2.5,
        alignItems: "center",
        justifyContent: "center"
    },
    restaurantLabelText: {
        fontSize: 7.5,
        fontWeight: "500",
        color: "white"
    },
    discountLabel: {
        height: 12,
        width: 40,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    discountLabelText: {
        fontSize: 7.5,
        fontWeight: "500",
        color: "white"
    },
    restaurantDetailsContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        paddingTop: 30
    },
    restaurantName: {
        fontSize: 12,
        fontWeight: "bold"
    },
    restaurantType: {
        fontSize: 10,
        fontWeight: "400"
    },
    restaurantDeliveryFee: {
        fontSize: 10,
        fontWeight: "bold"
    }
})