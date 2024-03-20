import { ScrollView, View, StyleSheet } from "react-native"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import ItemCard from "../../components/item-card/ItemCard"

export default function Page() {

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
        <AppScreensLayout title="Favourites">
            <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {items?.map((item, key) => {
                        return (
                            <ItemCard id={item?.id} name={item?.name} price={item?.price} favourite={item?.favourite} key={key} />
                        )
                    })}
                </View>
            </ScrollView>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    scrollArea: {
        flex: 1,
        width: "100%",
        marginVertical: 15
    },
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }
})