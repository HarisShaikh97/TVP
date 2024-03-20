import { ScrollView, View, StyleSheet } from "react-native"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import RestaurantCard from "../../components/restaurant-card/RestaurantCard"

export default function Page() {

    const popular = [
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

    return (
        <AppScreensLayout title="Popular Near You">
            <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
                <View style={styles.sectionBody}>
                    {popular?.map((item, key) => {
                        return (
                            <RestaurantCard id={item?.id} name={item?.name} type={item?.type} delivery_time={item?.delivery_time} delivery_fee={item?.delivery_fee} discount={item?.discount} cover={item?.cover} logo={item?.logo} key={key} />
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
        width: "95%"
    },
    sectionBody: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15
    }
})