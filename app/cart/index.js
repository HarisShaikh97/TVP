import { useState } from "react"
import { TouchableOpacity, ScrollView, View, Text, TextInput, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import CartItem from "../../components/cart-item/CartItem"
import ItemCard from "../../components/item-card/ItemCard"

export default function Page() {

    const [couponCode, setCouponCode] = useState("")
    const [instructions, setInstructions] = useState("")

    const cartItems = [
        {
            id: 1,
            itemName: "Big Mac Meal",
            itemPrice: "100.00",
            quantity: 1,
            image: require("../../assets/images/item-cover.png"),
            variations: [
                {
                    id: 1,
                    name: "Fries & 250 ml drink",
                    price: "29.00"
                },
                {
                    id: 2,
                    name: "Small coke 360 ml",
                    price: "29.00"
                }
            ]
        },
        {
            id: 2,
            itemName: "Big Mac Meal",
            itemPrice: "100.00",
            quantity: 1,
            image: require("../../assets/images/item-cover.png"),
            variations: [
                {
                    id: 1,
                    name: "Fries & 250 ml drink",
                    price: "29.00"
                },
                {
                    id: 2,
                    name: "Small coke 360 ml",
                    price: "29.00"
                }
            ]
        },
        {
            id: 3,
            itemName: "Big Mac Meal",
            itemPrice: "100.00",
            quantity: 1,
            image: require("../../assets/images/item-cover.png"),
            variations: [
                {
                    id: 1,
                    name: "Fries & 250 ml drink",
                    price: "29.00"
                },
                {
                    id: 2,
                    name: "Small coke 360 ml",
                    price: "29.00"
                }
            ]
        }
    ]

    const suggestedItems = [
        {
            id: 1,
            name: "Double Spicy Mc'Crispy Meal",
            price: 15.05,
            favourite: true
        },
        {
            id: 2,
            name: "Double Spicy Mc'Crispy Meal",
            price: 15.15,
            favourite: false
        },
        {
            id: 3,
            name: "Double Spicy Mc'Crispy Meal",
            price: 15.05,
            favourite: true
        },
        {
            id: 4,
            name: "Double Spicy Mc'Crispy Meal",
            price: 15.15,
            favourite: false
        },
        {
            id: 5,
            name: "Double Spicy Mc'Crispy Meal",
            price: 15.05,
            favourite: true
        },
        {
            id: 6,
            name: "Double Spicy Mc'Crispy Meal",
            price: 15.15,
            favourite: false
        }
    ]

    return (
        <AppScreensLayout title="My Cart" >
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.scrollContainer}>
                    {cartItems?.map((item, key) => {
                        return (
                            <CartItem image={item?.image} itemName={item?.itemName} itemPrice={item?.itemPrice} variations={item?.variations} quantity={item?.quantity} key={key} />
                        )
                    })}
                    <TouchableOpacity style={styles.addMoreItemsButton}>
                        <Text style={styles.addMoreItemsButtonText}>Add more items</Text>
                    </TouchableOpacity>
                    <View style={styles.applyCouponContainer}>
                        <TextInput value={couponCode} onChangeText={setCouponCode} style={styles.inputField} placeholder="Apply Coupon Code" placeholderTextColor={"black"} />
                        <TouchableOpacity style={styles.applyButton}>
                            <Text style={styles.applyButtonText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headingText}>Popular with your order</Text>
                    <Text style={styles.descriptiveText}>Other customers also bought these</Text>
                    <ScrollView horizontal style={styles.horizontalScrollArea} showsHorizontalScrollIndicator={false}>
                        <View style={styles.horizontalScrollContainer}>
                            {suggestedItems?.map((item, key) => {
                                return (
                                    <ItemCard id={item?.id} name={item?.name} price={item?.price} favourite={item?.favourite} key={key} />
                                )
                            })}
                        </View>
                    </ScrollView>
                    <Text style={styles.headingText}>Special instructions</Text>
                    <Text style={styles.descriptiveText}>Please let us know if you are allergic to anything or if we need to avoid anything</Text>
                    <View style={styles.instructionBox}>
                        <TextInput value={instructions} onChangeText={setInstructions} multiline style={styles.instructionTextArea} placeholder="e.g. No mayo" placeholderTextColor={"black"} />
                    </View>
                    <Text style={styles.orderInfoText}>Order Info</Text>
                    <View style={styles.receiptRow}>
                        <Text style={styles.subTotalText}>Sub Total:</Text>
                        <Text style={styles.receiptPriceText}>$ 100.00</Text>
                    </View>
                    <View style={styles.receiptRow}>
                        <Text style={styles.receiptDetailsText}>Platform Fee:</Text>
                        <Text style={styles.receiptPriceText}>$ 5.00</Text>
                    </View>
                    <View style={styles.receiptRow}>
                        <Text style={styles.receiptDetailsText}>Delivery Fee:</Text>
                        <Text style={styles.receiptPriceText}>$ 10.00</Text>
                    </View>
                    <TouchableOpacity style={styles.confirmButton} onPress={() => {router.navigate("/check-out")}}>
                        <Text style={styles.confirmButtonText}>Confirm payment and address</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        width: "90%",
        marginVertical: 15
    },
    scrollContainer: {
        width: "100%",
        flexDirection: "column"
    },
    addMoreItemsButton: {
        marginVertical: 15
    },
    addMoreItemsButtonText: {
        fontSize: 15,
        fontWeight: "800",
        color: "#E35F21"
    },
    applyCouponContainer: {
        height: 60,
        width: "100%",
        borderRadius: 30,
        borderWidth: 1.25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        paddingLeft: 20,
        paddingRight: 5
    },
    inputField: {
        width: "50%",
        fontWeight: "500",
        fontSize: 16
    },
    applyButton: {
        height: 50,
        width: "35%",
        borderRadius: 25,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    applyButtonText: {
        fontSize: 15,
        fontWeight: "900",
        fontStyle: "italic",
        color: "white"
    },
    headingText: {
        fontSize: 15,
        fontWeight: "600",
        marginTop: 15
    },
    descriptiveText: {
        fontSize: 15,
        color: "#525252",
        marginTop: 10
    },
    horizontalScrollArea: {
        width: "100%",
        marginTop: 15
    },
    horizontalScrollContainer: {
        flexDirection: "row",
        gap: 15
    },
    instructionBox: {
        height: 150,
        width: "100%",
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 15,
        padding: 10
    },
    instructionTextArea: {
        flex: 1,
        textAlignVertical: "top"
    },
    orderInfoText: {
        fontSize: 15,
        fontWeight: "500",
        marginTop: 20
    },
    receiptRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    subTotalText: {
        fontSize: 15,
        fontWeight: "800"
    },
    receiptPriceText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#9A8B8B"
    },
    receiptDetailsText: {
        fontSize: 12,
        fontWeight: "500"
    },
    confirmButton: {
        height: 60,
        width: "100%",
        borderRadius: 5,
        backgroundColor: "#E35F21",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    confirmButtonText: {
        fontSize: 15,
        fontWeight: "800",
        color: "white"
    }
})