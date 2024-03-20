import { TouchableOpacity, View, Text, ImageBackground, Image, StyleSheet } from "react-native"
import { router } from "expo-router"
import OrderProcessScreensLayout from "../../components/layouts/order-process-screens-layout/OrderProcessScreensLayout"

export default function Page() {
    return (
        <OrderProcessScreensLayout title="Your Order has been Sent to Restaurant">
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/images/order-successful-bg.png")} style={styles.bgImage} resizeMode="contain">
                    <Image source={require("../../assets/icons/check-mark.png")} style={styles.bgIcon} resizeMode="contain" />
                </ImageBackground>
                <Text style={styles.greetingsText}>Thank You</Text>
                <Text style={styles.descriptionText}>Successfully Placed Your Order</Text>
                <TouchableOpacity style={styles.goButton} onPress={() => {router.navigate("/order-tracking")}}>
                    <Text style={styles.goButtonText}>Go</Text>
                </TouchableOpacity>
                <Text style={styles.instructionText}>Please wait for restaurant response</Text>
            </View>
        </OrderProcessScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    bgImage: {
        height: 175,
        width: 175,
        alignItems: "center",
        justifyContent: "center"
    },
    bgIcon: {
        height: 50,
        width: 50
    },
    greetingsText: {
        fontSize: 35,
        fontWeight: "600"
    },
    descriptionText: {
        fontSize: 16.5,
        fontWeight: "600",
        marginTop: 15
    },
    goButton: {
        height: 50,
        width: 275,
        borderRadius: 25,
        backgroundColor: "black",
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    goButtonText: {
        fontSize: 30,
        color: "white",
        fontWeight: "400"
    },
    instructionText: {
        width: 225,
        fontSize: 16.5,
        fontWeight: "800",
        color: "#E35F21",
        textAlign: "center"
    }
})