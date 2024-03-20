import { useEffect, useState } from "react"
import { TouchableOpacity, View, ScrollView, SafeAreaView, Text, TextInput, Image, StatusBar, StyleSheet } from "react-native"
import { router } from "expo-router"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolate, Extrapolation, runOnJS } from "react-native-reanimated"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import PaymentCard from "../../components/payment-card/PaymentCard"
import AddressCardColored from "../../components/address-card-colored/AddressCardColored"

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

    const addresses = [
        {
            id: 1,
            title: "Home",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 2,
            title: "Work",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 3,
            title: "Home",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 4,
            title: "Work",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 5,
            title: "Home",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 6,
            title: "Work",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 7,
            title: "Home",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 8,
            title: "Work",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 9,
            title: "Home",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 10,
            title: "Work",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 11,
            title: "Home",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        },
        {
            id: 12,
            title: "Work",
            description: "Zafar Center Baloch Colony Flyover Karachi",
            note: "none"
        }
    ]

    const [deliveryInstructions, setDeliveryInstructions] = useState("")
    const [toggled, setToggled] = useState(false)

    const X = useSharedValue(0)

    const panGesture = Gesture.Pan()
    .onUpdate((e) => {
        if(X.value >= 0 && X.value < 190 && e.translationX >= 0 && e.translationX < 190) {
            X.value = e.translationX
        }
    })
    .onEnd(() => {
        if(X.value < 150) {
            X.value = withSpring(0)
        }
        else {
            X.value = withSpring(188)
            runOnJS(setToggled)(true)
        }
    })

    const animatedStyles = {
        swipeable: useAnimatedStyle(() => {
            return {
                transform: [{ translateX: X.value }]
            }
        }),
        swipeLabelContainer: useAnimatedStyle(() => {
            return {
                transform: [{
                    translateX: interpolate(X.value, [0, 95], [0, 25, Extrapolation.CLAMP])
                }],
                opacity:  interpolate(X.value, [0, 95], [1, 0, Extrapolation.CLAMP])
            }
        })
    }

    useEffect(() => {
        if(toggled) {
            router.navigate("/order-waiting")
            setToggled(false)
            X.value = 0
        }
    }, [toggled])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerContainer} onPress={() => {router.navigate("/cart")}}>
                <View style={styles.offerNotch}>
                    <View style={styles.curveContainer}>
                        <View style={styles.rightUpperCurveContainer}>
                            <View style={styles.rightUpperCurve} />
                        </View>
                        <View style={styles.rightLowerCurveContainer}>
                            <View style={styles.rightLowerCurve} />
                        </View>
                    </View>
                    <View style={styles.notchEmptySpace} />
                    <View style={styles.curveContainer}>
                        <View style={styles.leftLowerCurveContainer}>
                            <View style={styles.leftLowerCurve} />
                        </View>
                        <View style={styles.leftUpperCurveContainer}>
                            <View style={styles.leftUpperCurve} />
                        </View>
                    </View>
                </View>
                <SafeAreaView style={styles.cartItemsContainer}>
                    <View style={styles.itemQuantityWrapper}>
                        <View style={styles.itemQuantityCircle}>
                            <Text style={styles.itemQuantity}>3</Text>
                        </View>
                        <View style={styles.cartItemsTextContainer}>
                            <Text style={styles.cartText}>Cart</Text>
                            <Text style={styles.itemsText}>3 Items</Text>
                        </View>
                    </View>
                        <View style={styles.orderImagesContainer}>
                            <View style={[styles.itemImageContainerStyles, styles.firstItemImageContainerPosition]}>
                                <Image source={require("../../assets/images/item1.png")} style={styles.itemImage} />
                            </View>
                            <View style={[styles.itemImageContainerStyles, styles.secondItemImageContainerPosition]}>
                                <Image source={require("../../assets/images/item1.png")} style={styles.itemImage} />
                            </View>
                            <View style={[styles.itemImageContainerStyles, styles.thirdItemImageContainerPosition]}>
                                <Image source={require("../../assets/images/item1.png")} style={styles.itemImage} />
                            </View>
                            <View style={styles.addToCartButton}>
                                <Entypo name="plus" size={15} color="black" />
                            </View>
                        </View>
                </SafeAreaView>
            </TouchableOpacity>
            <View style={styles.bodyContainer}>
                <ScrollView style={styles.bodyScrollView}>
                    <View style={styles.bodyScrollContainer}>
                        <View style={styles.orderInfoContainer}>
                            <View style={styles.orderInfoHeadingContainer}>
                                <Text style={styles.orderInfoHeadingText}>Order Info</Text>
                            </View>
                            <View style={styles.orderInfoRow}>
                                <Text style={styles.orderInfoDetailsText}>Subtotal</Text>
                                <Text style={styles.orderInfoDetailsText}>$ 200.00</Text>
                            </View>
                            <View style={styles.orderInfoRow}>
                                <Text style={styles.orderInfoDetailsText}>Platform Fee</Text>
                                <Text style={styles.orderInfoDetailsText}>$ 5.00</Text>
                            </View>
                            <View style={styles.orderInfoRow}>
                                <Text style={styles.orderInfoDetailsText}>Delivery Fee</Text>
                                <Text style={styles.orderInfoDetailsText}>$ 10.00</Text>
                            </View>
                            <View style={styles.orderInfoRow}>
                                <Text style={styles.orderInfoDetailsText}>Discount</Text>
                                <Text style={styles.orderInfoDetailsText}>5%</Text>
                            </View>
                            <View style={styles.orderInfoRow}>
                                <Text style={styles.estimatedTotalText}>Estimated Total</Text>
                                <Text style={styles.orderInfoDetailsText}>$ 250.00</Text>
                            </View>
                        </View>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionHeadingText}>Master Card</Text>
                            <TouchableOpacity style={styles.sectionAddButton} onPress={() => {router.navigate("/add-payment-card")}}>
                                <Text style={styles.sectionAddButtonText}>Add Your Card</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal style={styles.horizontalScrollView} showsHorizontalScrollIndicator={false}>
                            <View style={styles.horizontalScrollContainer}>
                                {cards?.map((item, key) => {
                                    return (
                                        <PaymentCard id={item?.id} cardNumber={item?.card_number} cardHolderName={item?.card_holder_name} cardExpiryDate={item?.card_expiry_date} backgroundColor={colors[key % 4]} textColor={key % 4 === 0 ? "black" : "white"} key={key} />
                                    )
                                })}
                            </View>
                        </ScrollView>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionHeadingText}>Address</Text>
                            <TouchableOpacity style={styles.sectionAddButton} onPress={() => {router.navigate("/add-address")}}>
                                <Text style={styles.sectionAddButtonText}>Add Your Address</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal style={styles.horizontalScrollView} showsHorizontalScrollIndicator={false}>
                            <View style={styles.horizontalScrollContainer}>
                                {addresses?.map((item, key) => {
                                    return (
                                        <AddressCardColored id={item?.id} title={item?.title} description={item?.description} backgroundColor={colors[key % 4]} textColor={key % 4 === 0 ? "black" : "white"} key={key} />
                                    )
                                })}
                            </View>
                        </ScrollView>
                        <Text style={styles.deliveryInstructionsTitleText}>+ Add Delivery Instruction For Your Rider</Text>
                        <View style={styles.deliveryInstructionBox}>
                            <TextInput value={deliveryInstructions} onChangeText={setDeliveryInstructions} multiline style={styles.deliveryInstructionTextArea} placeholder="e.g. Near Walmart" placeholderTextColor={"white"} />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.swipeContainer}>
                    <GestureDetector gesture={panGesture}>
                        <Animated.View style={[styles.swipeable, animatedStyles.swipeable]}>
                            <Image source={require("../../assets/icons/lock3.png")} style={styles.swipeableIcon} resizeMode="contain" />
                        </Animated.View>
                    </GestureDetector>
                    <Animated.View style={[styles.swipeLabelContainer, animatedStyles.swipeLabelContainer]}>
                        <MaterialCommunityIcons name="chevron-triple-right" size={35} color="white" />
                        <Text style={styles.swipeLabelText}>Check Out Now</Text>
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        backgroundColor: "white"
    },
    headerContainer: {
        width: "100%",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: "#181818",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar?.currentHeight || 0
    },
    offerNotch: {
        height: 20,
        width: 180,
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: [{ translateX: -90 }],
        backgroundColor: "#181818",
        flexDirection: "row"
    },
    leftLowerCurveContainer: {
        height: 20,
        width: 35,
        backgroundColor: "#181818"
    },
    leftLowerCurve: {
        height: 20,
        width: 35,
        backgroundColor: "white",
        borderTopEndRadius: 11.5
    },
    leftUpperCurveContainer: {
        height: 20,
        width: 35,
        backgroundColor: "white"
    },
    leftUpperCurve: {
        height: 20,
        width: 35,
        backgroundColor: "#181818",
        borderBottomStartRadius: 11.5
    },
    rightLowerCurveContainer: {
        height: 20,
        width: 35,
        backgroundColor: "#181818",
        alignItems: "flex-end"
    },
    rightLowerCurve: {
        height: 20,
        width: 35,
        backgroundColor: "white",
        borderTopStartRadius: 11.5
    },
    rightUpperCurveContainer: {
        height: 20,
        width: 35,
        backgroundColor: "white",
        alignItems: "flex-end"
    },
    rightUpperCurve: {
        height: 20,
        width: 35,
        backgroundColor: "#181818",
        borderBottomEndRadius: 11.5
    },
    curveContainer: {
        flexDirection: "row"
    },
    notchEmptySpace: {
        flex: 1,
        backgroundColor: "white"
    },
    cartItemsContainer: {
        width: "90%",
        marginBottom: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemQuantityWrapper: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
    },
    itemQuantityCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    itemQuantity: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    cartItemsTextContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    cartText: {
        fontSize: 20,
        color: "white"
    },
    itemsText: {
        fontSize: 15,
        fontWeight: "800",
        color: "white"
    },
    orderImagesContainer: {
        width: 115,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginRight: 20
    },
    itemImageContainerStyles: {
        height: 50,
        width: 50,
        position: "absolute",
        top: -25,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#E35F21",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    firstItemImageContainerPosition: {
        left: 0,
        zIndex: 3
    },
    secondItemImageContainerPosition: {
        left: "50%",
        transform: [{ translateX: -25 }],
        zIndex: 2
    },
    thirdItemImageContainerPosition: {
        right: 0,
        zIndex: 1
    },
    itemImage: {
        height: 35,
        width: 35,
        overflow: "visible"
    },
    addToCartButton: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: -10,
        right: -20
    },
    bodyContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: "#181818",
        marginTop: 25
    },
    bodyScrollView: {
        flex: 1,
        width: "100%",
        marginTop: 30
    },
    bodyScrollContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    orderInfoContainer: {
        width: "85%",
        height: 225,
        borderRadius: 35,
        borderWidth: 1.5,
        borderColor: "#414349",
        backgroundColor: "#313036",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    orderInfoHeadingContainer: {
        width: "90%"
    },
    orderInfoHeadingText: {
        fontSize: 13.5,
        fontWeight: "500",
        color: "#ADACB2"
    },
    orderInfoDetailsText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#ADACB2"
    },
    estimatedTotalText: {
        fontSize: 16.5,
        fontWeight: "bold",
        color: "white"
    },
    orderInfoRow: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    sectionHeaderRow: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 30
    },
    sectionHeadingText: {
        fontSize: 20,
        fontWeight: "800",
        color: "white"
    },
    sectionAddButton: {
        height: 22.5,
        width: 100,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#414349",
        backgroundColor: "#313036",
        alignItems: "center",
        justifyContent: "center"
    },
    sectionAddButtonText: {
        fontSize: 8.5,
        fontWeight: "900",
        color: "white"
    },
    horizontalScrollView: {
        width: "100%"
    },
    horizontalScrollContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
        paddingHorizontal: 25
    },
    deliveryInstructionsTitleText: {
        fontSize: 16.5,
        fontWeight: "900",
        color: "white",
        textDecorationLine: "underline",
        marginVertical: 25
    },
    deliveryInstructionBox: {
        height: 150,
        width: "90%",
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderColor: "#414349",
        backgroundColor: "#313036"
    },
    deliveryInstructionTextArea: {
        flex: 1,
        textAlignVertical: "top",
        color: "white"
    },
    swipeContainer: {
        height: 75,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#313036",
        marginTop: 15,
        marginBottom: 25,
        borderWidth: 1.5,
        borderColor: "#414349",
        alignItems: "center",
        justifyContent: "center"
    },
    swipeLabelContainer: {
        width: "80%",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 1
    },
    swipeLabelText: {
        fontSize: 15,
        fontWeight: "900",
        fontStyle: "italic",
        color: "white"
    },
    swipeable: {
        height: 65,
        width: 100,
        borderRadius: 35,
        backgroundColor: "#E35F21",
        position: "absolute",
        left: 5,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
    },
    swipeableIcon: {
        height: 35,
        width: 35
    }
})