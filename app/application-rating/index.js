import { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { router } from "expo-router"
import OrderProcessScreensLayout from "../../components/layouts/order-process-screens-layout/OrderProcessScreensLayout"
import StarRatingInput from "../../components/star-rating-input/StarRatingInput"

export default function Page() {

    const [ratings, setRatings] = useState(0)
    const [suggestions, setSuggestions] = useState("")

    return (
        <OrderProcessScreensLayout title="Rate Our Application">
            <View style={styles.container}>
                <Image source={require("../../assets/images/check2.png")} style={styles.bgImage} />
                <Text style={styles.titleText}>Thank you</Text>
                <Text style={styles.descriptionText}>Rate Our Application</Text>
                <StarRatingInput ratings={ratings} setRatings={setRatings} />
                <View style={styles.suggestionContainer}>
                    <Text style={styles.suggestionBoxTitleText}>Suggestion Box</Text>
                    <View style={styles.suggestionBox}>
                        <TextInput value={suggestions} onChangeText={setSuggestions} multiline style={styles.suggestionTextArea} />
                    </View>
                </View>
                <TouchableOpacity style={styles.goToHomeButton} onPress={() => {router.navigate("/experience-rating")}}>
                    <Text style={styles.goToHomeButtonText}>Continue</Text>
                </TouchableOpacity>
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
    suggestionContainer: {
        width: "90%",
        flexDirection: "column",
        gap: 10
    },
    suggestionBox: {
        height: 125,
        width: "100%",
        borderRadius: 15,
        borderWidth: 1,
        padding: 10
    },
    suggestionTextArea: {
        flex: 1,
        textAlignVertical: "top"
    },
    suggestionBoxTitleText: {
        fontSize: 15,
        fontWeight: "600"
    },
    goToHomeButton: {
        height: 50,
        width: 250,
        borderRadius: 10,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    goToHomeButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})