import { ScrollView, View, StyleSheet } from "react-native"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import OrderCard from "../../components/order-card/OrderCard"

export default function Page() {

    const orders = [
        {
            id: 1,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 2,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 3,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 4,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 5,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 6,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 7,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 8,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 9,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 10,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 11,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        },
        {
            id: 12,
            item_name: "Beef Burger, Fries, Cold Drink",
            date_time: "21,thu 10:00",
            price: 38.15
        }
    ]

    return (
        <AppScreensLayout title="Orders & Reordering">
            <ScrollView style={styles.bodyScrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.orderScrollContainer}>
                    {orders?.map((item, key) => {
                        return (
                            <OrderCard id={item?.id} item_name={item?.item_name} date_time={item?.date_time} price={item?.price} key={key} />
                        )
                    })}
                </View>
            </ScrollView>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    bodyScrollView: {
        width: "100%",
        flex: 1,
        marginVertical: 15
    },
    orderScrollContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 15
    }
})