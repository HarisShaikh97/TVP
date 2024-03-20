import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import ProfilePicture from "../../components/profile-picture/ProfilePicture"
import AddressCardSmall from "../../components/address-card-small/AddressCardSmall"

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
        <AppScreensLayout title="Profile Information">
            <ProfilePicture source={require("../../assets/images/profile.png")} name="Angga Risky" email="ABC@hotmail.com" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.emptyView} />
                    <Text style={styles.title}>Addresses</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => {router.navigate("/add-address")}}>
                        <Text style={styles.addButtonText}>Add New Address</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.addressListScrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.addressListContainer}>
                        {addresses?.map((item, key) => {
                            return (
                                <AddressCardSmall id={item?.id} title={item?.title} description={item?.description} note={item?.note} key={key}/>
                            )
                        })}
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.doneButton} onPress={() => {router.back()}}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginVertical: 35
    },
    header: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    emptyView: {
        width: 85
    },
    title: {
        fontSize: 18,
        fontWeight: "500"
    },
    addButton: {
        height: 25,
        width: 85,
        borderRadius: 15,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    addButtonText: {
        fontSize: 7.5,
        fontWeight: "bold",
        color: "white"
    },
    addressListScrollView: {
        flex: 1,
        width: "100%",
        marginVertical: 25
    },
    addressListContainer: {
        flexDirection: "column",
        gap: 15,
        alignItems: "center"
    },
    doneButton: {
        height: 35,
        width: 125,
        borderRadius: 10,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    doneButtonText: {
        fontSize: 15,
        fontWeight: "900",
        color: "white"
    }
})