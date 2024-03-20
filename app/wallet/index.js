import { useState } from "react"
import { TouchableOpacity, ScrollView, View, Text, TextInput, Image, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import PaymentCard from "../../components/payment-card/PaymentCard"
import OrderItem from "../../components/order-item/OrderItem"
import TransactionSuccessfulModal from "../../components/transaction-successful-modal/TransactionSuccessfulModal"

export default function Page() {

    const orders = [
        {
            id: 1,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 2,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 3,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 4,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 5,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 6,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 7,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 8,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 9,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        },
        {
            id: 10,
            name: "Red & Spicy Shawarma",
            date: "8/11/2023",
            amount: 34.99
        }
    ]

    const [showTopUpView, setShowTopUpView] = useState(false)
    const [showTransactionSuccessfulModal, setShowTransactionSuccessfulModal] = useState(false)
    const [topUpAmount, setTopUpAmount] = useState("")

    return (
        <AppScreensLayout title="Wallet">
            <TransactionSuccessfulModal showTransactionSuccessfulModal={showTransactionSuccessfulModal} setShowTransactionSuccessfulModal={setShowTransactionSuccessfulModal} setShowTopUpView={setShowTopUpView} />
            <View style={styles.container}>
                <View style={styles.accountBalanceContainer}>
                    <Text style={styles.walletNameText}>TVP Pay</Text>
                    <Text style={styles.accountBalanceText}>$321:000</Text>
                </View>
                <TouchableOpacity style={styles.topUpButton} onPress={() => {setShowTopUpView(!showTopUpView)}}>
                    <Text style={styles.topUpButtonText}>Top-Up Your Wallet</Text>
                </TouchableOpacity>
                <PaymentCard id={1} cardNumber="5367 1120 8905 0177" cardHolderName="Skm" cardExpiryDate="18/9/2023" backgroundColor="#F6EBDA" textColor="black" />
            </View>
            {showTopUpView ? (
                    <View style={styles.topUpContainer}>
                        <View style={styles.fixedAmountsContainer}>
                            <TouchableOpacity style={styles.fixedAmountButton} onPress={() => {setTopUpAmount("10")}}>
                                <Text style={styles.fixedAmountButtonText}>10$</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fixedAmountButton} onPress={() => {setTopUpAmount("50")}}>
                                <Text style={styles.fixedAmountButtonText}>50$</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fixedAmountButton} onPress={() => {setTopUpAmount("100")}}>
                                <Text style={styles.fixedAmountButtonText}>100$</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputBlock}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Enter Your Amount</Text>
                                <Text style={styles.requiredMarker}>*</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput value={topUpAmount} onChangeText={setTopUpAmount} />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.submitButton} onPress={() => {setShowTransactionSuccessfulModal(true)}}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.activitiesContainer}>
                        <View style={styles.savePaymentContainer}>
                            <View style={styles.savePaymentDescriptionContainer}>
                                <Text style={styles.savePaymentDescriptionText}>Save a payment method at checkout to view it here</Text>
                                <TouchableOpacity onPress={() => {router.navigate("/home")}}>
                                    <Text style={styles.backButtonText}>Back To Home</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => {router.navigate("/add-payment-card")}}>
                                <Image source={require("../../assets/icons/credit-card2.png")} style={styles.cardImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.recentActivitiesHeader}>
                            <View style={styles.recentActivitiesTitleContainer}>
                                <Image source={require("../../assets/icons/two-arrows.png")} style={styles.recentActivitiesImage} />
                                <Text style={styles.recentActivitiesText}>Recent activities</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.viewAllText}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.recentActivitiesScrollView} showsVerticalScrollIndicator={false}>
                            <View style={styles.recentActivitiesScrollContainer}>
                                {orders?.map((item, key) => {
                                    return (
                                        <OrderItem id={item?.id} name={item?.name} date={item?.date} amount={item?.amount} key={key} />
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                )
            }
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "85%",
        flexDirection: "column",
        gap: 15,
        alignItems: "center",
        marginTop: 15
    },
    accountBalanceContainer: {
        height: 35,
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
        backgroundColor: "#313036"
    },
    walletNameText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    accountBalanceText: {
        color: "white",
        fontSize: 18,
        fontWeight: "900"
    },
    topUpButton: {
        height: 35,
        width: "100%",
        borderRadius: 5,
        borderWidth: 1,
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    topUpButtonText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    activitiesContainer: {
        flex: 1,
        flexDirection: "column",
        width: "90%",
        alignItems: "center",
        marginTop: 20
    },
    savePaymentContainer: {
        height: 80,
        width: "100%",
        borderRadius: 10,
        borderColor: "#E35F21",
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    savePaymentDescriptionContainer: {
        flexDirection: "column",
        gap: 7,
        width: "75%"
    },
    savePaymentDescriptionText: {
        fontSize: 12.5,
        fontWeight: "600"
    },
    cardImage: {
        height: 35,
        width: 35
    },
    backButtonText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#E35F21"
    },
    recentActivitiesHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    recentActivitiesTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    recentActivitiesImage: {
        height: 35,
        width: 35
    },
    recentActivitiesText: {
        fontSize: 15,
        fontWeight: "600"
    },
    viewAllText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#E35F21"
    },
    recentActivitiesScrollView: {
        flex: 1,
        width: "100%",
        marginVertical: 15
    },
    recentActivitiesScrollContainer: {
        width: "100%",
        flexDirection: "column",
        gap: 20
    },
    topUpContainer: {
        width: "90%",
        flexDirection: "column",
        alignItems: "center",
        gap: 25,
        marginTop: 20
    },
    fixedAmountsContainer: {
        width: "75%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    fixedAmountButton: {
        height: 55,
        width: 55,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#FFEEEE",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowOffset: { width: 0, height: 2.5 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    fixedAmountButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#E35F21"
    },
    inputBlock: {
        width: "100%",
        flexDirection: "column",
        gap: 10
    },
    inputBox: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        elevation: 5,
        shadowOffset: { width: 0, height: 2.5 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        backgroundColor: "white"
    },
    labelContainer: {
        flexDirection: "row",
        gap: 5
    },
    labelText: {
        fontSize: 12.5,
        fontWeight: "600"
    },
    requiredMarker: {
        fontSize: 10,
        color: "red"
    },
    submitButton: {
        height: 50,
        width: 125,
        borderRadius: 10,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "white"
    }
})