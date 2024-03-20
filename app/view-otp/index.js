import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import OrderProcessScreensLayout from "../../components/layouts/order-process-screens-layout/OrderProcessScreensLayout"

export default function Page() {
    return (
        <OrderProcessScreensLayout title="View OTP">
            <View style={styles.container}>
                <Image source={require("../../assets/images/otp.png")} style={styles.bgImage} />
                <Text style={styles.titleText}>Your OTP</Text>
                <Text style={styles.OTPText}>123456</Text>
                <TouchableOpacity style={styles.continueButton} onPress={() => {router.navigate("/application-rating")}}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.goToHomeButton} onPress={() => {router.navigate("/home")}}>
                    <Text style={styles.goToHomeButtonText}>Go to Home</Text>
                </TouchableOpacity>
                <View style={styles.orderStatusContainer}>
                    <Text style={styles.orderStatusText}>Driver is Arriving</Text>
                    <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={["rgba(227, 95, 33, 0.5)", "rgba(227, 95, 33, 1)"]} style={styles.orderProgressBar} />
                </View>
            </View>
        </OrderProcessScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        gap: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    bgImage: {
        height: 125,
        width: 125
    },
    titleText: {
        fontSize: 40,
        fontWeight: "600",
        color: "#E35F21"
    },
    OTPText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    continueButton: {
        height: 50,
        width: 225,
        borderRadius: 7.5,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    continueButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    },
    goToHomeButton: {
        height: 45,
        width: "90%",
        borderRadius: 7.5,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    goToHomeButtonText: {
        fontSize: 16.5,
        fontWeight: "900",
        color: "white"
    },
    orderStatusContainer: {
        width: "85%",
        flexDirection: "column",
        gap: 25
    },
    orderStatusText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    orderProgressBar: {
        height: 10,
        width: "50%",
        borderRadius: 5
    }
})