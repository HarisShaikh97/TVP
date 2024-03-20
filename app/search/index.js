import { useState } from "react"
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import RestaurantCard from "../../components/restaurant-card/RestaurantCard"
import ItemCard from "../../components/item-card/ItemCard"

export default function Page() {

    const [searchText, setSearchText] = useState("")

    const restaurants = [
        {
            id: 1,
            name: "Mc'Donalds",
            type: "Fast Food, American",
            delivery_fee: 60,
            delivery_time: 36,
            discount: 15,
            logo: require("../../assets/logo/mcdonalds.png"),
            cover: require("../../assets/images/restaurant1.png")
        },
        {
            id: 2,
            name: "Mc'Donalds",
            type: "Fast Food, American",
            delivery_fee: 60,
            delivery_time: 36,
            discount: 0,
            logo: require("../../assets/logo/mcdonalds.png"),
            cover: require("../../assets/images/restaurant1.png")
        },
        {
            id: 3,
            name: "Mc'Donalds",
            type: "Fast Food, American",
            delivery_fee: 60,
            delivery_time: 36,
            discount: 15,
            logo: require("../../assets/logo/mcdonalds.png"),
            cover: require("../../assets/images/restaurant1.png")
        },
        {
            id: 4,
            name: "Mc'Donalds",
            type: "Fast Food, American",
            delivery_fee: 60,
            delivery_time: 36,
            discount: 0,
            logo: require("../../assets/logo/mcdonalds.png"),
            cover: require("../../assets/images/restaurant1.png")
        },
        {
            id: 5,
            name: "Mc'Donalds",
            type: "Fast Food, American",
            delivery_fee: 60,
            delivery_time: 36,
            discount: 15,
            logo: require("../../assets/logo/mcdonalds.png"),
            cover: require("../../assets/images/restaurant1.png")
        },
        {
            id: 6,
            name: "Mc'Donalds",
            type: "Fast Food, American",
            delivery_fee: 60,
            delivery_time: 36,
            discount: 15,
            logo: require("../../assets/logo/mcdonalds.png"),
            cover: require("../../assets/images/restaurant1.png")
        }
    ]

    const items = [
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
            favourite: true
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
            favourite: true
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
            favourite: true
        }
    ]

    return (
        <AppScreensLayout title="Search">
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <FontAwesome name="search" size={18} color="white" />
                    <TextInput style={styles.inputField} value={searchText} onChangeText={setSearchText} placeholder="What You're waiting for?!" placeholderTextColor={"white"} />
                </View>
                {searchText?.length > 0 ? (
                    <View style={styles.searchResultsContainer}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionHeaderText}>Restaurants</Text>
                            <ScrollView horizontal style={styles.horizontalScrollArea} showsHorizontalScrollIndicator={false}>
                                <View style={styles.horizontalScrollContainer}>
                                    {restaurants?.map((item, key) => {
                                        return (
                                            <RestaurantCard id={item?.id} name={item?.name} type={item?.type} delivery_time={item?.delivery_time} delivery_fee={item?.delivery_fee} discount={item?.discount} cover={item?.cover} logo={item?.logo} key={key} />
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionHeaderText}>Items</Text>
                            <ScrollView horizontal style={styles.horizontalScrollArea} showsHorizontalScrollIndicator={false}>
                                <View style={styles.horizontalScrollContainer}>
                                    {items?.map((item, key) => {
                                        return (
                                            <ItemCard id={item?.id} name={item?.name} price={item?.price} favourite={item?.favourite} key={key} />
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                ) : (
                    <View style={styles.bodyContainer}>
                        <View style={styles.recentSearchesContainer}>
                            <Text style={styles.recentSearchesTitle}>Recent searches</Text>
                            <TouchableOpacity onPress={() => {setSearchText("Sushi")}}>
                                <Text style={styles.recentSearchesText}>Sushi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setSearchText("Joe's Pizza")}}>
                                <Text style={styles.recentSearchesText}>Joe's Pizza</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setSearchText("Chipotle")}}>
                                <Text style={styles.recentSearchesText}>Chipotle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setSearchText("Burger")}}>
                                <Text style={styles.recentSearchesText}>Burger</Text>
                            </TouchableOpacity>
                        </View>
                        <ImageBackground source={require("../../assets/images/thought-bubble.png")} style={styles.thoughtBubbleImage} resizeMode="contain">
                            <Image source={require("../../assets/images/burger.png")} style={styles.burgerImage} resizeMode="contain" />
                        </ImageBackground>
                    </View>
                )}
            </View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        gap: 25,
        alignItems: "center",
        marginVertical: 25
    },
    searchBarContainer: {
        height: 45,
        width: "85%",
        borderRadius: 25,
        backgroundColor: "#E35F21",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        paddingHorizontal: 20
    },
    inputField: {
        flex: 1,
        color: "white"
    },
    bodyContainer: {
        flex: 1,
        width: "85%",
        flexDirection: "column",
        alignItems: "center",
        gap: 50
    },
    recentSearchesContainer: {
        width: "100%",
        flexDirection: "column",
        gap: 15
    },
    recentSearchesTitle: {
        fontSize: 15,
        fontWeight: "600"
    },
    recentSearchesText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#E35F21"
    },
    thoughtBubbleImage: {
        height: 200,
        width: 200,
        position: "relative"
    },
    burgerImage: {
        height: 175,
        width: 175,
        position: "absolute",
        top: -20,
        left: 5
    },
    searchResultsContainer: {
        flex: 1,
        flexDirection: "column",
        width: "90%"
    },
    sectionContainer: {
        width: "100%",
        flexDirection: "column"
    },
    sectionHeaderText: {
        fontSize: 15,
        fontWeight: "500"
    },
    horizontalScrollArea: {
        width: "100%",
        marginTop: 15
    },
    horizontalScrollContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
})