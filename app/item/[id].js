import { useState } from "react"
import { TouchableOpacity, SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { CheckBox } from "@rneui/themed"
import { Entypo } from "@expo/vector-icons"
import RestaurantScreensLayout from "../../components/layouts/restaurant-screens-layout/RestaurantScreensLayout"

export default function Page() {

    const { id } = useLocalSearchParams()

    const item = {
        id: id,
        name: "Big Mac Meal",
        price: 100.12,
        description: "Fries & 250 ml drink",
        sizes: [
            {
                id: 1,
                name: "Large",
                price: 19.12
            },
            {
                id: 2,
                name: "Medium",
                price: 19.12
            },
            {
                id: 3,
                name: "Small",
                price: 19.12
            }
        ],
        variations: [
            {
                id: 1,
                name: "Bread",
                selectionType: "single",
                variants: [
                    {
                        id: 1,
                        name: "Italian",
                        price: 7.84
                    },
                    {
                        id: 2,
                        name: "Wheat/Brown",
                        price: 14.90
                    },
                    {
                        id: 3,
                        name: "Parmesan Oregano",
                        price: 7.84
                    }
                ]
            },
            {
                id: 2,
                name: "Sauce",
                selectionType: "multiple",
                variants: [
                    {
                        id: 1,
                        name: "Chilli Sauce",
                        price: 7.84
                    },
                    {
                        id: 2,
                        name: "Mayo",
                        price: 14.90
                    }
                ]
            },
            {
                id: 3,
                name: "Add-Ons",
                selectionType: "multiple",
                variants: [
                    {
                        id: 1,
                        name: "Pepsi",
                        price: 19.12
                    },
                    {
                        id: 2,
                        name: "Cheese",
                        price: 19.12
                    },
                    {
                        id: 3,
                        name: "7Up",
                        price: 19.12
                    }
                ]
            }
        ]
    }

    const [quantity, setQuantity] = useState(1)

    return (
        <RestaurantScreensLayout imageSource={require("../../assets/images/item-cover.png")}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item?.name}</Text>
                    <Text style={styles.detailsText}>$ {item?.price}</Text>
                </View>
                <View style={styles.itemDescriptionContainer}>
                    <Text style={styles.detailsText}>{item?.description}</Text>
                </View>
                <ScrollView style={styles.variationsScrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.variationsScrollContainer}>
                        <View style={styles.variationContainer}>
                            <View style={styles.horizontalLine} />
                            <Text style={styles.variationTitle}>Select Sizes</Text>
                            <Text style={styles.selectionType}>Select One</Text>
                            <View style={styles.variationWrapper}>
                                {item?.sizes?.map((item, key) => {
                                    return (
                                        <View style={styles.variationRow} key={key}>
                                            <CheckBox  containerStyle={styles.checkboxContainer} textStyle={styles.checkboxText} title={item?.name} iconType="material-community" checkedIcon="checkbox-marked" uncheckedIcon="checkbox-blank-outline" uncheckedColor="#E35F21" checkedColor="#E35F21" />
                                            <Text style={styles.detailsText}>$ {item?.price}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        {item?.variations?.map((variation, key) => {
                            return (
                                <View style={styles.variationContainer} key={key}>
                                    <View style={styles.horizontalLine} />
                                    <Text style={styles.variationTitle}>Choose Your {variation?.name}</Text>
                                    <Text style={styles.selectionType}>{variation?.selectionType === "single" ? "Select One" : "Select Multiple"}</Text>
                                    <View style={styles.variationWrapper}>
                                        {variation?.variants?.map((item, key) => {
                                            return (
                                                <View style={styles.variationRow} key={key}>
                                                    <CheckBox containerStyle={styles.checkboxContainer} textStyle={styles.checkboxText} title={item?.name} iconType="material-community" checkedIcon="checkbox-marked" uncheckedIcon="checkbox-blank-outline" uncheckedColor="#E35F21" checkedColor="#E35F21" />
                                                    <Text style={styles.detailsText}>$ {item?.price}</Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.offerNotch}>
                    <View style={styles.curveContainer}>
                        <View style={styles.leftUpperCurveContainer}>
                            <View style={styles.leftUpperCurve} />
                        </View>
                        <View style={styles.leftLowerCurveContainer}>
                            <View style={styles.leftLowerCurve} />
                        </View>
                    </View>
                    <View style={styles.notchEmptySpace} />
                    <View style={styles.curveContainer}>
                        <View style={styles.rightLowerCurveContainer}>
                            <View style={styles.rightLowerCurve} />
                        </View>
                        <View style={styles.rightUpperCurveContainer}>
                            <View style={styles.rightUpperCurve} />
                        </View>
                    </View>
                </View>
                <SafeAreaView style={styles.footerWrapper}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.addRemoveButton} onPress={() => {quantity > 1 && setQuantity(quantity - 1)}}>
                            <Entypo name="minus" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity style={styles.addRemoveButton} onPress={() => {setQuantity(quantity + 1)}}>
                            <Entypo name="plus" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addToCartButton} onPress={() => {router.navigate("/cart")}}>
                        <Text style={styles.addToCartButtonText}>Add to cart</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </RestaurantScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flex: 1,
        flexDirection: "column",
        marginTop: 25
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 25,
        fontWeight: "800"
    },
    detailsText: {
        fontSize: 15,
        opacity: 0.7
    },
    itemDescriptionContainer: {
        marginTop: 15
    },
    variationsScrollView: {
        width: "100%",
        flex: 1,
        marginVertical: 15
    },
    variationsScrollContainer: {
        width: "100%",
        flexDirection: "column",
        gap: 20
    },
    variationContainer: {
        width: "100%",
        flexDirection: "column"
    },
    horizontalLine: {
        height: 1,
        width: "100%",
        backgroundColor: "gray"
    },
    variationTitle: {
        fontSize: 15,
        fontWeight: "500",
        marginTop: 12
    },
    selectionType: {
        fontSize: 12.5,
        fontWeight: "300",
        marginTop: 12
    },
    variationWrapper: {
        width: "100%",
        flexDirection: "column",
        gap: 5,
        marginTop: 12
    },
    variationRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    checkboxContainer: {
        margin: 0,
        marginLeft: -3, 
        padding: 0
    },
    checkboxText: {
        fontSize: 15, 
        fontWeight: "500", 
        color: "black",
        paddingLeft: 10
    },
    footerContainer: {
        width: "100%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#181818",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    footerWrapper: {
        width: "85%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 35,
        marginBottom: StatusBar?.currentHeight / 2 || 0
    },
    offerNotch: {
        height: 15,
        width: 180,
        position: "absolute",
        top: 0,
        left: "50%",
        transform: [{ translateX: -90 }],
        backgroundColor: "#181818",
        flexDirection: "row"
    },
    leftLowerCurveContainer: {
        height: 15,
        width: 35,
        backgroundColor: "#181818"
    },
    leftLowerCurve: {
        height: 15,
        width: 35,
        backgroundColor: "white",
        borderBottomStartRadius: 7.5
    },
    leftUpperCurveContainer: {
        height: 15,
        width: 35,
        backgroundColor: "white"
    },
    leftUpperCurve: {
        height: 15,
        width: 35,
        backgroundColor: "#181818",
        borderTopEndRadius: 7.5
    },
    rightLowerCurveContainer: {
        height: 15,
        width: 35,
        backgroundColor: "#181818",
        alignItems: "flex-end"
    },
    rightLowerCurve: {
        height: 15,
        width: 35,
        backgroundColor: "white",
        borderBottomEndRadius: 7.5
    },
    rightUpperCurveContainer: {
        height: 15,
        width: 35,
        backgroundColor: "white",
        alignItems: "flex-end"
    },
    rightUpperCurve: {
        height: 15,
        width: 35,
        backgroundColor: "#181818",
        borderTopStartRadius: 7.5
    },
    curveContainer: {
        flexDirection: "row"
    },
    notchEmptySpace: {
        flex: 1,
        backgroundColor: "white"
    },
    addToCartButton: {
        height: 35,
        width: 150,
        backgroundColor: "white",
        borderRadius: 8.5,
        alignItems: "center",
        justifyContent: "center"
    },
    addToCartButtonText: {
        fontSize: 15,
        color: "#E35F21",
        fontWeight: "600"
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    quantityText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    },
    addRemoveButton: {
        height: 27.5,
        width: 27.5,
        borderRadius: 15,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    }
})