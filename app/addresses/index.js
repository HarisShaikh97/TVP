import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import AddressCard from "../../components/address-card/AddressCard"

export default function Page() {

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

    return (
        <AppScreensLayout title="Addresses">
            <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {addresses?.map((item, key) => {
                        return (
                            <AddressCard id={item?.id} title={item?.title} description={item?.description} note={item?.note} key={key} />
                        )
                    })}
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addButton} onPress={() => {router.navigate("/add-address")}}>
                <Text style={styles.addButtonText}>Add New Address</Text>
            </TouchableOpacity>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    scrollArea: {
        flex: 1,
        width: "100%",
        marginVertical: 25
    },
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 25
    },
    addButton: {
        height: 60,
        width: "90%",
        borderRadius: 5,
        backgroundColor: "#E35F21",
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    addButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})