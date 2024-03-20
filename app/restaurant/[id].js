import { useState } from "react"
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import RestaurantScreensLayout from "../../components/layouts/restaurant-screens-layout/RestaurantScreensLayout"
import StarRating from "../../components/star-rating/StarRating"
import ItemCard from "../../components/item-card/ItemCard"

export default function Page() {

    const { id } = useLocalSearchParams()

    const rating = 4.5

    const categories = [
        {
            id: 1,
            name: "Most Popular",
            items: [
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
        },
        {
            id: 2,
            name: "Extra Value Meals Value",
            items: [
                {
                    id: 7,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 8,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 9,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 10,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 3,
            name: "Value Meals Value",
            items: [
                {
                    id: 11,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 12,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 13,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 14,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 15,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 16,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 4,
            name: "Breakfast",
            items: [
                {
                    id: 17,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 18,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 19,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 20,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 5,
            name: "Fries",
            items: [
                {
                    id: 21,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 22,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 23,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 24,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 25,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 26,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 6,
            name: "Beef Menu",
            items: [
                {
                    id: 27,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 28,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 29,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 30,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 7,
            name: "Chicken & Fish Menu",
            items: [
                {
                    id: 31,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 32,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 33,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 34,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 35,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 36,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 8,
            name: "Desserts Menu",
            items: [
                {
                    id: 37,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 38,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 39,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 40,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 9,
            name: "Crispy Chicken Menu",
            items: [
                {
                    id: 41,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 42,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 43,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 44,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 45,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 46,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 10,
            name: "Wraps Menu",
            items: [
                {
                    id: 47,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 48,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 49,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 50,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        },
        {
            id: 11,
            name: "Happy Meal Menu",
            items: [
                {
                    id: 51,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 52,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 53,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 54,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                },
                {
                    id: 55,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.05,
                    favourite: true
                },
                {
                    id: 56,
                    name: "Double Spicy Mc'Crispy Meal",
                    price: 15.15,
                    favourite: true
                }
            ]
        }
    ]

    const [selectedTab, setSelectedTab] = useState(categories[0])

    return (
        <RestaurantScreensLayout imageSource={require("../../assets/images/restaurant1.png")}>
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.restaurantName}>McDONALD'S</Text>
                    <Text style={styles.detailsText}>1.2 km away / $ 4.43 Minimum</Text>
                    <View style={styles.iconTextWrapper}>
                        <StarRating rating={rating} />
                        <Text style={styles.detailsText}>1000+ Ratings</Text>
                    </View>
                    <View style={styles.iconTextWrapper}>
                        <MaterialCommunityIcons name="progress-clock" size={15} color="#E35F21" />
                        <Text style={styles.detailsText}>Delivery 40 Min</Text>
                    </View>
                </View>
                <View style={styles.tabsScrollView}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.tabsScrollContainer}>
                            {categories?.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} onPress={() => {setSelectedTab(item)}}>
                                        <Text style={item?.id === selectedTab?.id ? styles.selectedTabsText : styles.tabsText}>{item?.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <ScrollView style={styles.bodyScrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.bodyScrollContainer}>
                        {selectedTab?.items?.map((item, key) => {
                            return (
                                <ItemCard id={item?.id} name={item?.name} price={item?.price} favourite={item?.favourite} key={key} />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </RestaurantScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        flex: 1,
        flexDirection: "column",
        marginTop: 25
    },
    detailsContainer: {
        flexDirection: "column",
        gap: 10
    },
    restaurantName: {
        fontSize: 25,
        fontWeight: "700"
    },
    detailsText: {
        fontSize: 12
    },
    iconTextWrapper: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    tabsScrollView: {
        height: 50
    },
    tabsScrollContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    tabsText: {
        fontSize: 12,
        fontWeight: "bold"
    },
    selectedTabsText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#E35F21"
    },
    bodyScrollView: {
        flex: 1,
        width: "100%"
    },
    bodyScrollContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
})