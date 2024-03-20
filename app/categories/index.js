import { ScrollView, View, StyleSheet } from "react-native"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import CategoryCard from "../../components/category-card/CategoryCard"

export default function Page() {

    const categories = [
        {
            id: 1,
            name: "Caribbean",
            image: require("../../assets/images/category1.png")
        },
        {
            id: 2,
            name: "Donuts",
            image: require("../../assets/images/category1.png")
        },
        {
            id: 3,
            name: "Pizza",
            image: require("../../assets/images/category1.png")
        },
        {
            id: 4,
            name: "Noodles",
            image: require("../../assets/images/category1.png")
        },
        {
            id: 5,
            name: "Indian",
            image: require("../../assets/images/category1.png")
        },
        {
            id: 6,
            name: "Chinese",
            image: require("../../assets/images/category1.png")
        }
    ]

    return (
        <AppScreensLayout title="Categories">
            <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
                <View style={styles.sectionBody}>
                    {categories?.map((item, key) => {
                        return (
                            <CategoryCard id={item?.id} name={item?.name} image={item?.image} key={key} />
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