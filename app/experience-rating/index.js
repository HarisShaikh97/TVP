import { useState } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import OrderProcessScreensLayout from "../../components/layouts/order-process-screens-layout/OrderProcessScreensLayout"
import StarRatingInput from "../../components/star-rating-input/StarRatingInput"

export default function Page() {

    const [ratings, setRatings] = useState(0)

    return (
        <OrderProcessScreensLayout title="Rate Your Experience">
            <View style={styles.container}>
                <Image source={require("../../assets/images/check2.png")} style={styles.bgImage} />
                <Text style={styles.titleText}>Thank you</Text>
                <Text style={styles.descriptionText}>Rate Your Experience</Text>
                <StarRatingInput ratings={ratings} setRatings={setRatings} />
                <View style={styles.reviewsContainer}>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Good</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Excellent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Humble Client</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Poor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.reviewsContainer}>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Good</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Excellent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Humble Client</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reviewPill}>
                        <Text style={styles.reviewText}>Poor</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.continueButton} onPress={() => {router.navigate("/home")}}>
                    <Text style={styles.continueButtonText}>Go To Home</Text>
                </TouchableOpacity>
                <Text style={styles.orderStatusText}>Driver is Arrived at your door step</Text>
                <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={["rgba(227, 95, 33, 0.5)", "rgba(227, 95, 33, 1)"]} style={styles.orderProgressBar} />
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
        justifyContent: "center",
        gap: 25
    },
    bgImage: {
        height: 150,
        width: 150
    },
    titleText: {
        fontSize: 30,
        fontWeight: "600"
    },
    descriptionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#E35F21"
    },
    reviewsContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    reviewPill: {
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#E35F21",
        paddingHorizontal: 10,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    reviewText: {
        color: "white",
        fontSize: 12
    },
    continueButton: {
        height: 50,
        width: 250,
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
    orderStatusText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    orderProgressBar: {
        height: 10,
        width: "65%",
        borderRadius: 5
    }
})