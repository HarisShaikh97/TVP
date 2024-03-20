import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import PaymentCard from "../../components/payment-card/PaymentCard"

export default function Page() {

    const colors = [
        "#F6EBDA",
        "#9FD6B7",
        "#F8B0E0",
        "#E35F21"
    ]

    const cards = [
        {
            id: 1,
            card_number: "5367 1120 8905 0177",
            card_holder_name: "Skm",
            card_expiry_date: "18/9/2023"
        },
        {
            id: 2,
            card_number: "5367 1120 8905 0177",
            card_holder_name: "Skm",
            card_expiry_date: "18/9/2023"
        },
        {
            id: 3,
            card_number: "5367 1120 8905 0177",
            card_holder_name: "Skm",
            card_expiry_date: "18/9/2023"
        },
        {
            id: 4,
            card_number: "5367 1120 8905 0177",
            card_holder_name: "Skm",
            card_expiry_date: "18/9/2023"
        },
        {
            id: 5,
            card_number: "5367 1120 8905 0177",
            card_holder_name: "Skm",
            card_expiry_date: "18/9/2023"
        },
        {
            id: 6,
            card_number: "5367 1120 8905 0177",
            card_holder_name: "Skm",
            card_expiry_date: "18/9/2023"
        },
        {
            id: 7,
            card_number: "5367 1120 8905 0177",
            card_holder_name: "Skm",
            card_expiry_date: "18/9/2023"
        }
    ]

    return (
        <AppScreensLayout title="Previous Card">
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={() => {router.navigate("/add-payment-card")}}>
                        <Text style={styles.addButtonText}>Add New Card</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.cardsListScrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.cardsListContainer}>
                        {cards?.map((item, key) => {
                            return (
                                <PaymentCard id={item?.id} cardNumber={item?.card_number} cardHolderName={item?.card_holder_name} cardExpiryDate={item?.card_expiry_date} backgroundColor={colors[key % 4]} textColor={key % 4 === 0 ? "black" : "white"} key={key} />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        paddingVertical: 15
    },
    headerContainer: {
        width: "100%",
        alignItems: "flex-end"
    },
    addButton: {
        height: 25,
        width: 100,
        borderRadius: 3,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    addButtonText: {
        fontSize: 10,
        color: "white"
    },
    cardsListScrollView: {
        flex: 1,
        width: "100%",
        marginTop: 25
    },
    cardsListContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 15
    }
})